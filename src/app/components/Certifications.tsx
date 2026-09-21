import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import cert36 from '../../imports/image-36.png';
import cert35 from '../../imports/image-35.png';
import cert34 from '../../imports/image-34.png';
import cert33 from '../../imports/image-33.png';
import cert32 from '../../imports/image-32.png';
import cert37 from '../../imports/image-37.png';
import cert38 from '../../imports/image-38.png';
import cert39 from '../../imports/image-39.png';
import cert40 from '../../imports/image-40.png';

const allCerts = [
  { title: 'Foundations of Project Management', image: cert36, issuer: 'Google' },
  { title: 'Project Initiation: Starting a Successful Project', image: cert35, issuer: 'Google' },
  { title: 'Project Planning: Putting It All Together', image: cert34, issuer: 'Google' },
  { title: 'Project Execution: Running the Project', image: cert33, issuer: 'Google' },
  { title: 'Agile Project Management', image: cert32, issuer: 'Google' },
  { title: 'Foundations of User Experience (UX) Design', image: cert37, issuer: 'Google' },
  { title: 'Create a website with MailChimp', image: cert38, issuer: 'Coursera' },
  { title: 'Create a Mockup in Figma', image: cert39, issuer: 'Coursera' },
  { title: 'Draw an interactive wireframe in Mockplus', image: cert40, issuer: 'Coursera' },
];

function CertModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>
        <ImageWithFallback src={src} alt="Certificate" className="w-full h-auto" />
      </div>
    </div>
  );
}

export function Certifications() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="bg-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">Professional Development</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-none">Certifications</h2>
          </div>
          <span className="text-sm text-gray-400 hidden sm:block">{allCerts.length} certificates</span>
        </div>
        <div className="border-t border-gray-200 mb-8" />

        {/* All certificates grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {allCerts.map((c) => (
            <button
              key={c.title}
              onClick={() => setActiveCert(c.image)}
              title={c.title}
              className="group flex flex-col gap-3 text-left"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-orange-200 group-hover:scale-[1.02] transition-all duration-200">
                <ImageWithFallback src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">{c.title}</p>
                <p className="text-xs text-gray-400 mt-1">{c.issuer} · Coursera</p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {activeCert && <CertModal src={activeCert} onClose={() => setActiveCert(null)} />}
    </section>
  );
}
