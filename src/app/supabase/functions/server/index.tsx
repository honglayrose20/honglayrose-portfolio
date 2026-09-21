import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['*'],
}));

app.use('*', logger(console.log));

app.post('/make-server-b21d2f69/send-email', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      console.log('Missing required fields in contact form submission');
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Always store the submission in the database as backup
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const submissionData = {
      id: submissionId,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      emailSent: false
    };

    try {
      await kv.set(submissionId, submissionData);
      console.log('Contact form submission stored:', submissionId);
    } catch (dbError) {
      console.error('Failed to store submission in database:', dbError);
      // Continue with email attempt even if DB storage fails
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    console.log('RESEND_API_KEY exists:', !!resendApiKey);
    console.log('RESEND_API_KEY length:', resendApiKey ? resendApiKey.length : 0);
    
    if (!resendApiKey || resendApiKey.trim() === '' || resendApiKey === 'your-resend-api-key-here') {
      console.log('RESEND_API_KEY not configured properly. Current value:', resendApiKey ? 'EXISTS_BUT_INVALID' : 'NOT_SET');
      return c.json({ 
        success: true, 
        message: 'Contact form submitted successfully! Your message has been saved and will be reviewed.',
        emailSent: false,
        stored: true,
        submissionId,
        debugInfo: 'API key not configured'
      });
    }

    console.log('Attempting to send email with Resend API key (first 10 chars):', resendApiKey.substring(0, 10) + '...');

    const emailData = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'honglayrlim@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #f97316, #eab308); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact Message</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 12px; border-left: 4px solid #f97316;">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            
            <h3 style="color: #1f2937; margin-top: 30px; margin-bottom: 15px;">Message</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This message was sent from your portfolio website contact form.</p>
            <p>You can reply directly to <strong>${email}</strong></p>
          </div>
        </div>
      `,
      reply_to: email
    };

    console.log('Sending email to Resend API...');
    console.log('Email data (without API key):', {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      html: 'HTML_CONTENT_PRESENT',
      reply_to: emailData.reply_to
    });

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    console.log('Resend API response status:', response.status);
    const result = await response.json();
    console.log('Resend API response body:', result);

    if (!response.ok) {
      console.log('Resend API error response status:', response.status);
      console.log('Resend API error details:', result);
      
      // Email failed, but submission is already stored in database
      console.log('Email sending failed, but submission stored successfully:', submissionId);
      
      return c.json({ 
        success: true, 
        message: 'Contact form submitted successfully! Your message has been saved and will be reviewed.',
        emailSent: false,
        stored: true,
        submissionId,
        emailError: result.message || 'Email service temporarily unavailable',
        debugInfo: {
          status: response.status,
          error: result
        }
      });
    }

    // Email sent successfully, update the stored submission
    try {
      submissionData.emailSent = true;
      submissionData.emailId = result.id;
      await kv.set(submissionId, submissionData);
    } catch (updateError) {
      console.error('Failed to update submission with email status:', updateError);
    }

    console.log('Email sent successfully! Result:', result);
    return c.json({ 
      success: true, 
      message: 'Message sent successfully! Email delivered and submission stored.',
      emailSent: true,
      stored: true,
      emailId: result.id,
      submissionId,
      debugInfo: 'Email sent successfully'
    });

  } catch (error) {
    console.log('Error in contact form handler:', error);
    
    // Even if there's an error, if we have the submission data, try to store it
    if (body && body.name && body.email && body.subject && body.message) {
      try {
        const fallbackId = `contact_error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        await kv.set(fallbackId, {
          id: fallbackId,
          name: body.name,
          email: body.email,
          subject: body.subject,
          message: body.message,
          timestamp: new Date().toISOString(),
          emailSent: false,
          error: error.message
        });
        
        return c.json({ 
          success: true, 
          message: 'Contact form submitted successfully! Your message has been saved and will be reviewed.',
          emailSent: false,
          stored: true,
          submissionId: fallbackId
        });
      } catch (fallbackError) {
        console.error('Failed to store submission even as fallback:', fallbackError);
      }
    }
    
    return c.json({ 
      error: 'Failed to process contact form submission',
      details: error.message 
    }, 500);
  }
});

app.get('/make-server-b21d2f69/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/make-server-b21d2f69/contact-submissions', async (c) => {
  try {
    console.log('Fetching contact form submissions...');
    const submissions = await kv.getByPrefix('contact_');
    
    // Filter and validate submissions, then sort by timestamp (newest first)
    const validSubmissions = submissions
      .map(item => item.value)
      .filter(submission => {
        // Ensure the submission has all required fields
        return submission && 
               typeof submission === 'object' &&
               submission.id &&
               submission.name &&
               submission.email &&
               submission.subject &&
               submission.message &&
               submission.timestamp;
      })
      .sort((a, b) => {
        try {
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        } catch (dateError) {
          console.error('Error sorting by timestamp:', dateError);
          return 0;
        }
      });
    
    console.log(`Found ${validSubmissions.length} valid contact form submissions out of ${submissions.length} total`);
    
    return c.json({ 
      success: true, 
      submissions: validSubmissions,
      count: validSubmissions.length 
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return c.json({ 
      success: false,
      error: 'Failed to fetch contact submissions',
      details: error.message,
      submissions: [],
      count: 0
    }, 500);
  }
});

Deno.serve(app.fetch);