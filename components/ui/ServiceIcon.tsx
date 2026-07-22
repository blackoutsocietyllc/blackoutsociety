import type { Service } from '@/lib/data';

export default function ServiceIcon({ icon, className }: { icon: Service['icon']; className?: string }) {
  const common = { className, strokeWidth: 1.5, fill: 'none', viewBox: '0 0 48 48' };

  switch (icon) {
    case 'tint':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10h32l-4 28H12L8 10Z" stroke="currentColor" />
          <path d="M8 10h32" stroke="currentColor" />
          <path d="M16 16l16 22M24 16l8 22" stroke="#E10600" />
        </svg>
      );
    case 'ppf':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6 8 12v12c0 10 7 16.5 16 18 9-1.5 16-8 16-18V12L24 6Z" stroke="currentColor" />
          <path d="M16 24l6 6 12-12" stroke="#E10600" />
        </svg>
      );
    case 'ceramic':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="17" stroke="currentColor" />
          <path d="M24 9v8M24 31v8M9 24h8M31 24h8" stroke="currentColor" />
          <circle cx="24" cy="24" r="5" stroke="#E10600" />
        </svg>
      );
    case 'wrap':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16h28l8 8-8 8H6l8-8-8-8Z" stroke="currentColor" />
          <path d="M14 16v16" stroke="#E10600" />
        </svg>
      );
    case 'home':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M8 22 24 8l16 14" stroke="currentColor" />
          <path d="M12 20v18h24V20" stroke="currentColor" />
          <rect x="19" y="24" width="10" height="10" stroke="#E10600" />
          <path d="M24 24v10M19 29h10" stroke="#E10600" />
        </svg>
      );
    case 'commercial':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40V10h18v30" stroke="currentColor" />
          <path d="M28 40V22h10v18" stroke="currentColor" />
          <path d="M14 16h4M20 16h4M14 22h4M20 22h4M14 28h4M20 28h4" stroke="#E10600" />
        </svg>
      );
    case 'detailing':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" stroke="currentColor" />
          <path d="M11 32l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4Z" stroke="#E10600" />
        </svg>
      );
    case 'removal':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10h28v28H10Z" stroke="currentColor" />
          <path d="M28 10c0 6 4 10 10 10" stroke="#E10600" />
          <path d="M14 32l10-10" stroke="#E10600" />
        </svg>
      );
    case 'headlight':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14c0-3.3 2.7-6 6-6h6c9 0 20 7 20 16s-11 16-20 16h-6c-3.3 0-6-2.7-6-6V14Z" stroke="currentColor" />
          <path d="M24 14c5 2 8 5.5 8 10s-3 8-8 10" stroke="#E10600" />
          <path d="M34 12l6-4M36 24h6M34 36l6 4" stroke="#E10600" />
        </svg>
      );
    case 'headlighttint':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14c0-3.3 2.7-6 6-6h6c9 0 20 7 20 16s-11 16-20 16h-6c-3.3 0-6-2.7-6-6V14Z" stroke="currentColor" />
          <path d="M14 8 8 40" stroke="#E10600" />
          <path d="M22 8l-7 32" stroke="#E10600" />
          <path d="M30 8l-7 32" stroke="#E10600" />
        </svg>
      );
    default:
      return null;
  }
}
