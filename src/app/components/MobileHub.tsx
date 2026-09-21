import { useState } from 'react';
import { ArrowRight, Briefcase, Map, BookOpen, Star } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import profilePhoto from '../../imports/IMG_0981-1.jpeg';

const tiles = [
  {
    id: 'portfolio',
    label: 'My Work Portfolio',
    sub: 'UX Design · PM · Mobile Dev',
    icon: Briefcase,
    primary: true,
    available: true,
  },
  {
    id: 'finds',
    label: 'Best Finds',
    sub: 'Things I Love',
    icon: Star,
    primary: false,
    available: true,
  },
  {
    id: 'travel',
    label: 'Travel Blogs',
    sub: 'Adventures & Places',
    icon: Map,
    primary: false,
    available: false,
  },
  {
    id: 'reads',
    label: 'Read Recommendation',
    sub: 'Books & Articles',
    icon: BookOpen,
    primary: false,
    available: false,
  },
];
interface MobileHubProps {
  onEnter: () => void;
}

export function MobileHub({ onEnter }: MobileHubProps) {
  const [pressed, setPressed] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleTile = (tile: typeof tiles[0]) => {
    if (!tile.available) return;
    setPressed(tile.id);
    setTimeout(() => {
      if (tile.id === 'portfolio') {
        navigate('/');
        onEnter();
      } else if (tile.id === 'finds') {
        navigate('/best-finds');
      } else {
        onEnter();
      }
    }, 300);
  };

  return (
    <div className="md:hidden fixed inset-0 z-[100] bg-[#f0ece6] flex flex-col overflow-hidden">

      {/* Top — profile */}
      <div
        className="relative flex-shrink-0 flex flex-col items-center justify-center pb-8 px-6"
        style={{
          background: 'linear-gradient(165deg, #fed7aa 0%, #fbbf24 55%, #f97316 100%)',
          paddingTop: 'max(calc(env(safe-area-inset-top) + 2rem), 5.5rem)',
          minHeight: '48%',
        }}
      >
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-36 h-36 rounded-full border-4 border-white shadow-xl overflow-hidden mb-4">
            <ImageWithFallback
              src={profilePhoto}
              alt="Honglay Rose Lim"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 10%' }}
            />
          </div>
          <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Welcome to my space</p>
          <h1 className="text-2xl font-bold text-white leading-tight">Honglay Rose Lim</h1>
          <p className="text-white/80 text-sm mt-1">UX Designer · Project Manager · Mobile Dev</p>
        </div>
      </div>

      {/* Bottom — tiles */}
      <div className="flex-1 px-5 pt-5 flex flex-col gap-3 overflow-auto" style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 1.5rem)' }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Choose a section</p>

        <div className="flex flex-col gap-3">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            const isActive = pressed === tile.id;

            return (
              <button
                key={tile.id}
                onClick={() => handleTile(tile)}
                className={`relative flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 active:scale-95 w-full ${
                  tile.primary
                    ? `bg-orange-500 text-white shadow-lg shadow-orange-200 ${isActive ? 'scale-95 opacity-80' : 'hover:bg-orange-600'}`
                    : 'bg-white border border-gray-100 text-gray-700 shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${tile.primary ? 'bg-white/20' : 'bg-orange-50'}`}>
                  <Icon className={`w-5 h-5 ${tile.primary ? 'text-white' : 'text-orange-500'}`} />
                </div>

                <div className="flex-1 text-left">
                  <p className={`text-sm font-bold leading-snug ${tile.primary ? 'text-white' : 'text-gray-900'}`}>{tile.label}</p>
                  <p className={`text-xs mt-0.5 ${tile.primary ? 'text-white/70' : 'text-gray-400'}`}>{tile.sub}</p>
                </div>

                {tile.available ? (
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${tile.primary ? 'bg-white/20' : 'bg-orange-50'}`}>
                    <ArrowRight className={`w-3.5 h-3.5 ${tile.primary ? 'text-white' : 'text-orange-500'}`} />
                  </div>
                ) : (
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-300 shrink-0">Coming soon</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
