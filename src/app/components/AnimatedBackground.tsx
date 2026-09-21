export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Large warm orange blob — top left */}
      <div
        className="blob-1 absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #fb923c 0%, #fdba74 60%, transparent 100%)', filter: 'blur(60px)' }}
      />

      {/* Amber blob — top right */}
      <div
        className="blob-2 absolute -top-20 right-0 w-[420px] h-[420px] rounded-full opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #fbbf24 0%, #fde68a 60%, transparent 100%)', filter: 'blur(70px)' }}
      />

      {/* Yellow blob — center left */}
      <div
        className="blob-3 absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full opacity-[0.09]"
        style={{ background: 'radial-gradient(circle, #facc15 0%, #fef08a 60%, transparent 100%)', filter: 'blur(80px)' }}
      />

      {/* Orange blob — center right */}
      <div
        className="blob-4 absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.11]"
        style={{ background: 'radial-gradient(circle, #ea580c 0%, #fb923c 60%, transparent 100%)', filter: 'blur(65px)' }}
      />

      {/* Soft amber blob — bottom center */}
      <div
        className="blob-5 absolute -bottom-40 left-1/3 w-[560px] h-[560px] rounded-full opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #f59e0b 0%, #fde68a 60%, transparent 100%)', filter: 'blur(75px)' }}
      />

      {/* Small accent dot — mid right */}
      <div
        className="blob-1 absolute top-2/3 right-1/4 w-[180px] h-[180px] rounded-full opacity-[0.13]"
        style={{ background: 'radial-gradient(circle, #fb923c 0%, transparent 100%)', filter: 'blur(40px)', animationDelay: '6s' }}
      />
    </div>
  );
}
