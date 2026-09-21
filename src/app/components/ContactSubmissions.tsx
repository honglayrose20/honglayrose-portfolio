import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Calendar, User, MessageSquare, RefreshCw, ExternalLink } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  emailSent: boolean;
  emailId?: string;
  error?: string;
}

interface SubmissionsResponse {
  success: boolean;
  submissions: ContactSubmission[];
  count: number;
}

export function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b21d2f69/contact-submissions`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch submissions`);
      }

      const result: SubmissionsResponse = await response.json();
      
      if (result.success) {
        // Filter out any null/undefined submissions and validate structure
        const validSubmissions = (result.submissions || []).filter(submission => 
          submission && 
          typeof submission === 'object' &&
          submission.id &&
          submission.name &&
          submission.email &&
          submission.subject &&
          submission.message &&
          submission.timestamp
        );
        setSubmissions(validSubmissions);
        console.log(`Loaded ${validSubmissions.length} valid submissions`);
      } else {
        // Even if success is false, try to use any submissions that were returned
        const submissions = result.submissions || [];
        if (submissions.length > 0) {
          const validSubmissions = submissions.filter(submission => 
            submission && 
            typeof submission === 'object' &&
            submission.id &&
            submission.name &&
            submission.email &&
            submission.subject &&
            submission.message &&
            submission.timestamp
          );
          setSubmissions(validSubmissions);
          console.log(`Loaded ${validSubmissions.length} submissions despite server error`);
        } else {
          throw new Error(result.error || 'Failed to fetch submissions');
        }
      }
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const handleEmailReply = (email: string, subject: string) => {
    const replySubject = `Re: ${subject}`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(replySubject)}`;
    window.open(mailtoUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 mx-auto mb-4 text-orange-600 animate-spin" />
            <p className="text-gray-600">Loading contact submissions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <p className="text-red-600 mb-4">Error loading submissions: {error}</p>
              <Button onClick={fetchSubmissions} variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Form Submissions</h1>
          <p className="text-gray-600 mb-6">
            Manage and respond to contact form submissions from your portfolio
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={fetchSubmissions} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Badge variant="secondary" className="px-4 py-2">
              {submissions.length} Total Submissions
            </Badge>
          </div>
        </div>

        {/* Submissions List */}
        {submissions.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No submissions yet</h3>
              <p className="text-gray-600">Contact form submissions will appear here when received.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission) => {
              // Additional safety check for each submission
              if (!submission || typeof submission !== 'object') {
                return null;
              }

              return (
                <Card key={submission.id || Math.random()} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {submission.subject || 'No Subject'}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {submission.name || 'Unknown'}
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {submission.email || 'No email'}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {submission.timestamp ? formatDate(submission.timestamp) : 'Unknown date'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {submission.emailSent ? (
                          <Badge className="bg-green-100 text-green-800">Email Sent</Badge>
                        ) : (
                          <Badge variant="secondary">Stored Only</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-gray-600" />
                        <span className="font-medium text-gray-900">Message</span>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {submission.message || 'No message content'}
                      </p>
                    </div>
                    
                    {submission.error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                        <p className="text-red-700 text-sm">
                          <strong>Email Error:</strong> {submission.error}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleEmailReply(submission.email || '', submission.subject || 'No Subject')}
                        className="bg-orange-600 hover:bg-orange-700"
                        disabled={!submission.email}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Reply via Email
                      </Button>
                      
                      {submission.emailId && (
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Email ID: {submission.emailId}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            }).filter(Boolean)}
          </div>
        )}
      </div>
    </div>
  );
}