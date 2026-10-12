import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Palette, FileText, Briefcase, Award, Mail } from 'lucide-react';

const navItems = [
  { id: 'works', label: 'My Works', icon: Palette, path: '/design-works' },
  { id: 'resume', label: 'Resume', icon: FileText, path: '/resume' },
  { id: 'experiences', label: 'Experiences', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact Me', icon: Mail },
];

export function Navigation() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      for (const id of ['contact', 'certifications', 'experiences', 'home']) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-12 bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-sm"
      style={{ paddingTop: 'max(env(safe-area-inset-top), 12px)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">

        {/* Mobile: name pill */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => scrollTo('home')}
            className="border border-gray-300 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-800 bg-white/60 hover:bg-white transition-colors duration-200"
          >
            H. Rose Lim&nbsp;<span className="font-normal text-gray-400">/</span>&nbsp;UX · PM
          </button>
        </div>

        {/* Desktop: name pill (left) */}
        <button
          onClick={() => scrollTo('home')}
          className="hidden md:block border border-gray-300 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-800 hover:bg-white transition-colors duration-200"
        >
          Honglay Rose Lim&nbsp;<span className="font-normal text-gray-400">/</span>&nbsp;UX Designer · PM
        </button>

        {/* Right — nav pills (desktop only) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map(({ id, label, icon: Icon, path }) => (
            <button
              key={id}
              onClick={() => path ? navigate(path) : scrollTo(id)}
              aria-label={label}
              title={label}
              className={`border rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                activeSection === id
                  ? 'bg-burgundy-500 text-white border-burgundy-500'
                  : 'border-gray-300 text-gray-800 hover:bg-white'
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}
