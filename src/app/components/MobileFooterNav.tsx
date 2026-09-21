import { User, Briefcase, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home',       label: 'About Me',   icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact',    label: "Let's Connect", icon: Calendar },
];

export function MobileFooterNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollY) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-[0_-4px_20px_rgba(234,88,12,0.08)]">
      <div className="flex items-stretch">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 relative transition-colors duration-200"
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-orange-500" />
              )}
              <Icon
                className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}
                strokeWidth={isActive ? 2.2 : 1.8}
              />
              <span
                className={`text-[10px] font-medium leading-none transition-colors duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Safe area spacer for notched phones */}
      <div className="h-safe-bottom bg-white/95" style={{ height: 'env(safe-area-inset-bottom)' }} />
    </nav>
  );
}
