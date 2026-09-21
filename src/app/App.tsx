import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { ContactSubmissions } from './components/ContactSubmissions';
import { DesignWorks } from './components/DesignWorks';
import { BestFinds } from './components/BestFinds';
import { ResumePage } from './components/Resume';
import { ProjectManagement } from './components/ProjectManagement';
import { SelectedWork } from './components/SelectedWork';
import { Stats } from './components/Stats';
import { AnimatedBackground } from './components/AnimatedBackground';
import { MobileHub } from './components/MobileHub';
import { Toaster } from './components/ui/sonner';
import { Button } from './components/ui/button';
import { Mail, ArrowLeft, ChevronUp } from 'lucide-react';

function Portfolio() {
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [hubDismissed, setHubDismissed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAdminButton, setShowAdminButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setShowAdminButton(true);
        setTimeout(() => setShowAdminButton(false), 10000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (showSubmissions) {
    return (
      <div className="min-h-screen bg-background antialiased">
        <div className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowSubmissions(false)}
                variant="outline"
                size="sm"
                className="border-primary/20 text-primary hover:bg-primary/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              <h2 className="text-xl font-semibold text-foreground">Admin Panel</h2>
            </div>
          </div>
        </div>
        <ContactSubmissions />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden">
      {!hubDismissed && <MobileHub onEnter={() => setHubDismissed(true)} />}
      <AnimatedBackground />

      <Navigation />

      {showAdminButton && (
        <div className="fixed top-24 right-6 z-40 animate-fade-in">
          <Button
            onClick={() => setShowSubmissions(true)}
            variant="outline"
            size="sm"
            className="bg-white/95 backdrop-blur-md hover:bg-white border-primary/20 text-primary hover:text-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4 mr-2" />
            View Submissions
          </Button>
        </div>
      )}

      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-40">
          <Button
            onClick={scrollToTop}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full w-12 h-12 p-0"
          >
            <ChevronUp className="w-5 h-5" />
          </Button>
        </div>
      )}

      <main className="relative pb-16 md:pb-0">
        <section id="home" className="animate-fade-in relative z-10">
          <Hero />
        </section>

        <section className="animate-slide-up relative z-10">
          <SelectedWork />
        </section>

        <section className="animate-slide-up relative z-10">
          <Stats />
        </section>

        <div className="relative z-10">
<section className="animate-slide-up relative">
            <Certifications />
          </section>

          <section id="contact" className="animate-slide-up relative">
            <Contact />
          </section>
        </div>
      </main>

      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/design-works" element={<DesignWorks />} />
        <Route path="/best-finds" element={<BestFinds />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/project-management" element={<ProjectManagement />} />
      </Routes>
    </BrowserRouter>
  );
}
