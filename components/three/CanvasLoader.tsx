'use client';

export default function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-base-light">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-1 w-40 overflow-hidden bg-ink/10">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-blood animate-shimmer" />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Loading Experience</p>
      </div>
    </div>
  );
}
