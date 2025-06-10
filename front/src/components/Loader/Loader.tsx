// components/WormLoader.tsx
export default function WormLoader() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-fg)] animate-[var(--animation-worm1)]">
      <main className="py-6">
        <svg
          className="w-[16em] h-[8em]"
          viewBox="0 0 256 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5ebd3e" />
              <stop offset="33%" stopColor="#ffb900" />
              <stop offset="67%" stopColor="#f78200" />
              <stop offset="100%" stopColor="#e23838" />
            </linearGradient>
            <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#e23838" />
              <stop offset="33%" stopColor="#973999" />
              <stop offset="67%" stopColor="#009cdf" />
              <stop offset="100%" stopColor="#5ebd3e" />
            </linearGradient>
          </defs>
          <g fill="none" strokeLinecap="round" strokeWidth="16">
            <g className="stroke-[hsl(var(--hue),90%,90%)] dark:stroke-[hsl(var(--hue),90%,15%)] transition-colors">
              <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
              <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
            </g>
            <g strokeDasharray="180 656">
              <path
                className="animate-worm1"
                stroke="url(#grad1)"
                strokeDashoffset="0"
                d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"
              />
              <path
                className="animate-worm2"
                stroke="url(#grad2)"
                strokeDashoffset="358"
                d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"
              />
            </g>
          </g>
        </svg>
      </main>
    </div>
  );
}
