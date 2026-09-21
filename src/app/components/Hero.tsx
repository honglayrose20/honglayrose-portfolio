import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import profilePhoto from '../../imports/IMG_0981-1.jpeg';
import introAudio from '../../imports/copy_AB75B2BB-79F8-4B19-927F-A780DFBA3B70.mp3';
import { ArrowUpRight, ChevronDown, ChevronUp, Download } from 'lucide-react';

const expertise = [
  'Project Planning & Coordination',
  'UI/UX Design',
  'App Store & Google Play Release Management',
  'Agile & Scrum Methodologies',
  'Requirements Gathering & Analysis',
  'Cross-functional Team Collaboration',
  'Quality Assurance (QA) & User Acceptance Testing (UAT)',
  'Product & Feature Testing',
  'Process & Workflow Improvement',
  'Figma & Interactive Prototyping',
  'Flutter Project Coordination',
  'Claude Design',
  'Claude Code',
  'Codex',
  'Git & GitHub',
  'Technical Documentation',
  'Problem Solving & Troubleshooting',
];

export function Hero() {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const handleEnded = () => setPlaying(false);

  return (
    <section className="min-h-screen bg-[#f0ece6] pb-10 px-4 sm:px-6 flex items-center" style={{ paddingTop: 'calc(env(safe-area-inset-top) + 5rem)' }}>
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ── Card 1: Profile + Headline ── */}
          <div
            className="shimmer-card md:row-span-2 rounded-3xl overflow-hidden flex flex-col justify-end relative p-6"
            style={{
              backgroundImage: [
                'linear-gradient(145deg, #fed7aa 0%, #fbbf24 55%, #f97316 100%)',
                'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
              ].join(', '),
              backgroundSize: 'cover, 22px 22px',
            }}
          >
            <div className="mb-4">
              <ImageWithFallback
                src={profilePhoto}
                alt="Honglay Rose Lim"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                style={{ objectPosition: '50% 10%' }}
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-2">
              UX Designer · Project Manager · Mobile Dev
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-snug drop-shadow-sm">
              Honglay Rose Lim - Aton
            </h1>
          </div>

          {/* ── Card 2: About ── */}
          <div className="md:row-span-2 bg-white rounded-3xl p-8 flex flex-col">
            <p className="text-sm text-gray-400 mb-5 tracking-wide">About</p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Hi, I'm Honglay Rose. I'm a UX Designer and Project Manager with over 9 years
              of experience building intuitive digital products. My passion is turning deep
              user insight into experiences that don't just solve problems — they create
              delight. I bridge the gap between human needs and technology, so digital tools
              feel like second nature.
            </p>
          </div>

          {/* ── Audio intro ── */}
          <div className="flex gap-4 md:contents">

          {/* ── Card 3: Audio intro ── */}
          <div className="flex-1 bg-orange-500 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-xl leading-snug">Designing and Managing for Calm</h3>
              <p className="text-orange-100 text-sm mt-1">Listen to my introduction</p>
            </div>

            {/* Animated waveform — faster when playing */}
            <div className={`flex items-center justify-between w-full my-4 h-8 ${playing ? '' : 'opacity-70'}`}>
              <div className="wbar wbar-1"  style={{height:6,  animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-2"  style={{height:14, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-3"  style={{height:20, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-4"  style={{height:8,  animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-5"  style={{height:18, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-6"  style={{height:6,  animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-7"  style={{height:24, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-8"  style={{height:10, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-9"  style={{height:16, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-10" style={{height:6,  animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-11" style={{height:20, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-12" style={{height:8,  animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-3"  style={{height:22, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-1"  style={{height:12, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-5"  style={{height:6,  animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-7"  style={{height:18, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-2"  style={{height:26, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-4"  style={{height:10, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-9"  style={{height:20, animationPlayState: playing ? 'running' : 'paused'}} />
              <div className="wbar wbar-6"  style={{height:6,  animationPlayState: playing ? 'running' : 'paused'}} />
            </div>

            {/* Hidden audio element */}
            <audio ref={audioRef} src={introAudio} onEnded={handleEnded} preload="auto" />

            {/* Play / Pause button */}
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
              aria-label={playing ? 'Pause introduction' : 'Play introduction'}
            >
              {playing ? (
                /* Pause icon */
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                /* Play icon */
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500 fill-current ml-0.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          </div>

          {/* ── My Work — single merged card ── */}
          <div className="bg-white rounded-3xl p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-400 mb-4 tracking-wide border-b border-gray-100 pb-4">My Work</p>

            {/* Stats row */}
            <div className="flex gap-6 mb-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">6+</p>
                <p className="text-xs text-gray-400 mt-0.5">Design Projects</p>
              </div>
              <div className="w-px bg-gray-100" />
              <div>
                <p className="text-3xl font-bold text-gray-900">9+</p>
                <p className="text-xs text-gray-400 mt-0.5">Years in PM</p>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">UI/UX design and project management across healthcare, fintech, and enterprise software.</p>

            <button
              onClick={() => navigate('/design-works')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-5 py-3 text-sm font-medium flex items-center justify-between transition-colors duration-200"
            >
              View My Work
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-6">
            <p className="text-sm text-gray-400 mb-4 tracking-wide border-b border-gray-100 pb-4">Expertise</p>
            <div
              className="flex flex-wrap gap-3 overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: showAllSkills ? '500px' : '96px' }}
            >
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-800 bg-[#f7f7f5] hover:border-orange-300 hover:text-orange-600 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowAllSkills((v) => !v)}
              className="mt-3 flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              {showAllSkills ? (
                <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
              ) : (
                <><ChevronDown className="w-3.5 h-3.5" /> Show more</>
              )}
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 flex min-h-64 flex-col justify-between">
            <h2 className="text-7xl sm:text-8xl font-bold leading-none tracking-tight text-gray-950">CV</h2>
            <button
              onClick={() => navigate('/resume')}
              className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-6 py-4 text-base font-medium flex items-center justify-between transition-colors duration-200"
            >
              Download
              <Download className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
