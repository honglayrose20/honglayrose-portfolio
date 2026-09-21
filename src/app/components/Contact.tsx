import { FormEvent, useState } from 'react';
import { AlertCircle, CheckCircle2, Linkedin, Mail, ArrowUp, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b21d2f69/send-email`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to send your message right now.');
      }

      setStatus('success');
      setStatusMessage(result?.message || 'Message sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Unable to send your message right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="contact" className="bg-[#f0ece6] px-4 sm:px-6 py-6 pb-20 md:pb-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-orange-500 rounded-3xl overflow-hidden">

          {/* Main content */}
          <div className="grid gap-8 px-8 pt-12 pb-10 sm:px-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-200 mb-6">Contact</p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 max-w-2xl">
                Let's make something people love to use.
              </h2>

              {/* Email pill + social icons */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Email pill */}
                <a
                  href="mailto:honglayrlim@gmail.com"
                  className="flex items-center gap-2 bg-white text-orange-600 rounded-full px-5 py-3 text-sm font-medium hover:bg-orange-50 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  honglayrlim@gmail.com
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/honglayroselim"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Calendly / Book a call */}
                <a
                  href="https://calendly.com/limhonglayrose/initial-interview"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  aria-label="Book a call"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </a>

                {/* Figma / Portfolio */}
                <a
                  href="https://honglayroselim.figma.site"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  aria-label="Portfolio"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
                  </svg>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  required
                  value={formData.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="Name"
                  className="h-11 border-orange-100 bg-white"
                />
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder="Email"
                  className="h-11 border-orange-100 bg-white"
                />
              </div>
              <Input
                required
                value={formData.subject}
                onChange={(event) => updateField('subject', event.target.value)}
                placeholder="Subject"
                className="mt-3 h-11 border-orange-100 bg-white"
              />
              <Textarea
                required
                value={formData.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Message"
                className="mt-3 min-h-32 border-orange-100 bg-white"
              />

              {status !== 'idle' && (
                <div className={`mt-4 flex items-start gap-2 rounded-xl px-3 py-2 text-sm ${
                  status === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {status === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4" /> : <AlertCircle className="mt-0.5 h-4 w-4" />}
                  <span>{statusMessage}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 h-11 w-full rounded-full bg-orange-500 text-white hover:bg-orange-600"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/20 px-8 sm:px-12 py-5 flex items-center justify-between text-xs text-orange-100">
            <span>© {new Date().getFullYear()} Honglay Rose Lim. All rights reserved.</span>
            <span className="hidden sm:block">Philippines · Available Worldwide</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-orange-200 hover:text-white transition-colors duration-200"
            >
              Back to top <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
