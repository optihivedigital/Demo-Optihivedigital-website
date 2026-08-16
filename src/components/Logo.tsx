import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'monochrome' | 'vertical';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'auto',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-13',
    xl: 'h-16'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id="optihive-brand-logo">
      {/* Brand Hexagon Mark with Growth Arrow */}
      <div className={`relative flex items-center justify-center shrink-0 ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-13 h-13' : size === 'xl' ? 'w-16 h-16' : 'w-10 h-10'}`}>
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
        >
          <defs>
            {/* Blue Gradients */}
            <linearGradient id="blueHexGrad1" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="35%" stopColor="#3B82F6" />
              <stop offset="70%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            <linearGradient id="blueHexGrad2" x1="120" y1="20" x2="20" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>

            <linearGradient id="darkHexGrad" x1="40" y1="30" x2="140" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="blueArrowGrad" x1="30" y1="130" x2="145" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="40%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#BFDBFE" />
            </linearGradient>

            <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Small Hexagons on top-left */}
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            {/* Hexagon 1 */}
            <polygon
              points="45,28 55,22 65,28 65,39 55,45 45,39"
              fill="url(#blueHexGrad1)"
              stroke="#1D4ED8"
              strokeWidth="1"
            />
            {/* Hexagon 2 */}
            <polygon
              points="32,48 42,42 52,48 52,59 42,65 32,59"
              fill="url(#blueHexGrad2)"
              stroke="#1D4ED8"
              strokeWidth="1"
            />
            {/* Hexagon 3 */}
            <polygon
              points="43,62 53,56 63,62 63,73 53,79 43,73"
              fill="url(#blueHexGrad1)"
              stroke="#1D4ED8"
              strokeWidth="1"
            />
          </g>

          {/* Outer Charcoal Hexagon Shell */}
          <polygon
            points="80,18 132,48 132,108 80,138 28,108 28,48"
            fill="url(#darkHexGrad)"
            stroke="#334155"
            strokeWidth="2.5"
          />

          {/* Inner Blue Hexagon Facet */}
          <polygon
            points="80,34 118,56 118,100 80,122 42,100 42,56"
            fill="url(#blueHexGrad1)"
            stroke="#BFDBFE"
            strokeWidth="2"
          />

          {/* Hollow Inner Cutout for 3D depth */}
          <polygon
            points="80,48 106,63 106,93 80,108 54,93 54,63"
            fill="#0F172A"
            stroke="#1D4ED8"
            strokeWidth="2"
          />

          {/* Ascending Blue Growth Arrow piercing upward right */}
          <g filter="url(#blueGlow)">
            {/* Arrow shaft following hexagon bottom-left to top-right */}
            <path
              d="M 52 108 L 78 84 L 126 36"
              stroke="url(#blueArrowGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrow Head */}
            <path
              d="M 108 22 L 142 22 L 142 56 Z"
              fill="url(#blueArrowGrad)"
            />
          </g>
        </svg>
      </div>

      {/* Typography & Subtitles */}
      {variant !== 'compact' && (
        <div className="flex flex-col leading-tight">
          {/* Main Wordmark */}
          <div className="flex items-baseline font-black tracking-tight text-xl sm:text-2xl font-sans">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Opti
            </span>
            <span className="text-blue-600 ml-0.5">
              Hive
            </span>
            <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}>
              Digital
            </span>
          </div>

          {/* Tagline & Subtext if full format */}
          {variant === 'full' && (
            <div className="flex flex-col mt-0.5">
              <div className="flex items-center gap-1 text-[8.5px] sm:text-[9.5px] font-bold tracking-wider text-blue-600 uppercase">
                <span>GROW</span>
                <span className="text-blue-400">•</span>
                <span>ATTRACT</span>
                <span className="text-blue-400">•</span>
                <span>CONVERT</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 mt-0.5">
                <span className="h-[1px] w-3 bg-blue-500/40"></span>
                <span className="text-[7.5px] font-semibold tracking-widest text-slate-500 uppercase">
                  DIGITAL MARKETING AGENCY
                </span>
                <span className="h-[1px] w-3 bg-blue-500/40"></span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
