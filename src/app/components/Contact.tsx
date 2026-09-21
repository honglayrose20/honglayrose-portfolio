import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Contact() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="contact" className="bg-[#f0ece6] px-4 sm:px-6 py-6 pb-20 md:pb-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-orange-500 rounded-3xl overflow-hidden">

          {/* Main content */}
          <div className="px-8 pt-12 pb-10 sm:px-12">
            <div className="max-w-3xl">
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
              </div>
            </div>
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
