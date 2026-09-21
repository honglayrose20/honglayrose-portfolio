import { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router';

const navItems = [
  { id: 'home',           label: 'ABOUT' },
  { id: 'certifications', label: 'CERTIFICATES' },
  { id: 'contact',        label: 'CONTACT' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      for (const id of ['contact', 'certifications', 'home']) {
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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goHome = () => {
    navigate('/');
    window.requestAnimationFrame(() => {
      const el = document.getElementById('home');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-12 bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-sm"
      style={{ paddingTop: 'max(env(safe-area-inset-top), 12px)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">

        {/* Mobile: back button (left) + name pill (right) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={goHome}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white/60 hover:bg-white transition-colors duration-200"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5 text-gray-700" />
          </button>
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
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`border rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                activeSection === id
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'border-gray-300 text-gray-800 hover:bg-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}
