import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use("*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["*"],
}));

app.use("*", logger(console.log));

app.post("/make-server-b21d2f69/send-email", async (c) => {
  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  } = {};

  try {
    body = await c.req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    const submissionData = {
      id: submissionId,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      emailSent: false,
    };

    await kv.set(submissionId, submissionData);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey || resendApiKey.trim() === "" || resendApiKey === "your-resend-api-key-here") {
      return c.json({
        success: true,
        message: "Message saved successfully.",
        emailSent: false,
        stored: true,
        submissionId,
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "honglayrlim@gmail.com",
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #f97316;">New Portfolio Contact Message</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #f97316;">
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
        reply_to: email,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return c.json({
        success: true,
        message: "Message saved successfully.",
        emailSent: false,
        stored: true,
        submissionId,
        emailError: result.message || "Email service temporarily unavailable",
      });
    }

    await kv.set(submissionId, {
      ...submissionData,
      emailSent: true,
      emailId: result.id,
    });

    return c.json({
      success: true,
      message: "Message sent successfully.",
      emailSent: true,
      stored: true,
      emailId: result.id,
      submissionId,
    });
  } catch (error) {
    if (body.name && body.email && body.subject && body.message) {
      const fallbackId = `contact_error_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;

      await kv.set(fallbackId, {
        id: fallbackId,
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        timestamp: new Date().toISOString(),
        emailSent: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });

      return c.json({
        success: true,
        message: "Message saved successfully.",
        emailSent: false,
        stored: true,
        submissionId: fallbackId,
      });
    }

    return c.json({
      error: "Failed to process contact form submission",
      details: error instanceof Error ? error.message : "Unknown error",
    }, 500);
  }
});

app.get("/make-server-b21d2f69/health", (c) => {
  return c.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.get("/make-server-b21d2f69/contact-submissions", async (c) => {
  try {
    const submissions = await kv.getByPrefix("contact_");
    const validSubmissions = submissions
      .filter((submission) => {
        return submission &&
          typeof submission === "object" &&
          submission.id &&
          submission.name &&
          submission.email &&
          submission.subject &&
          submission.message &&
          submission.timestamp;
      })
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return c.json({
      success: true,
      submissions: validSubmissions,
      count: validSubmissions.length,
    });
  } catch (error) {
    return c.json({
      success: false,
      error: "Failed to fetch contact submissions",
      details: error instanceof Error ? error.message : "Unknown error",
      submissions: [],
      count: 0,
    }, 500);
  }
});

Deno.serve(app.fetch);
