import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 9,  suffix: '+', label: 'Years of experience' },
  { target: 40, suffix: '+', label: 'Products shipped' },
  { target: 12, suffix: '',  label: 'Certificates' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#f7f6f3] rounded-3xl grid grid-cols-3 divide-x divide-gray-200 overflow-hidden">
          {stats.map(({ target, suffix, label }) => (
            <div key={label} className="px-8 py-10">
              <div className="text-5xl sm:text-6xl font-light text-gray-900 mb-3">
                <Counter target={target} suffix={suffix} />
              </div>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
