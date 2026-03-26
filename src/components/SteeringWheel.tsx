import React, { useEffect, useRef } from 'react';
import { CarPhysics } from '../lib/physics';

interface SteeringWheelProps {
  car: CarPhysics;
}

export const SteeringWheel: React.FC<SteeringWheelProps> = ({ car }) => {
  const wheelRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateWheel = () => {
      if (wheelRef.current) {
        // steeringAngle ranges from -maxSteeringAngle to +maxSteeringAngle (e.g. ±40)
        // Multiply for more dramatic visual rotation (real steering wheels turn ~450°)
        const visualAngle = car.steeringAngle * 4;
        wheelRef.current.style.transform = `rotate(${visualAngle}deg)`;
      }
      animationFrameId = requestAnimationFrame(updateWheel);
    };

    updateWheel();
    return () => cancelAnimationFrame(animationFrameId);
  }, [car]);

  return (
    <div className="absolute bottom-24 left-2 w-24 h-24 sm:bottom-10 sm:left-auto sm:right-100 sm:w-44 sm:h-44 bg-slate-900/90 backdrop-blur-md rounded-full border-[3px] sm:border-[5px] border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden z-10">
      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.1)] pointer-events-none" />

      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="wheelBg" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>
          <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="spokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        {/* Background */}
        <circle cx="100" cy="100" r="95" fill="url(#wheelBg)" />

        {/* Rotating group */}
        <g ref={wheelRef} style={{ transformOrigin: '100px 100px', transition: 'transform 0.05s linear' }}>
          {/* Outer rim */}
          <circle cx="100" cy="100" r="82" fill="none" stroke="url(#rimGrad)" strokeWidth="14" />
          <circle cx="100" cy="100" r="88" fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />
          <circle cx="100" cy="100" r="76" fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />

          {/* Grip texture on rim - small dots around the outer rim */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10) * (Math.PI / 180);
            const x = 100 + 82 * Math.cos(angle);
            const y = 100 + 82 * Math.sin(angle);
            return (
              <circle key={`grip-${i}`} cx={x} cy={y} r="1" fill="#64748b" opacity="0.4" />
            );
          })}

          {/* Left spoke */}
          <rect x="28" y="94" width="40" height="12" rx="4" fill="url(#spokeGrad)" />
          <rect x="28" y="95" width="40" height="1" fill="#94a3b8" opacity="0.3" />

          {/* Right spoke */}
          <rect x="132" y="94" width="40" height="12" rx="4" fill="url(#spokeGrad)" />
          <rect x="132" y="95" width="40" height="1" fill="#94a3b8" opacity="0.3" />

          {/* Bottom spoke */}
          <rect x="94" y="132" width="12" height="40" rx="4" fill="url(#spokeGrad)" />
          <rect x="95" y="132" width="1" height="40" fill="#94a3b8" opacity="0.3" />

          {/* Center hub */}
          <circle cx="100" cy="100" r="24" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <circle cx="100" cy="100" r="18" fill="#0f172a" stroke="#334155" strokeWidth="1" />

          {/* Center logo/marker - helps see rotation */}
          <path
            d="M92 96 L100 88 L108 96 Z"
            fill="#3b82f6"
            opacity="0.8"
          />
          <rect x="97" y="96" width="6" height="10" rx="1" fill="#3b82f6" opacity="0.6" />
        </g>

        {/* Fixed top marker (12 o'clock indicator) */}
        <polygon points="100,8 96,16 104,16" fill="#ef4444" opacity="0.9" />
      </svg>
    </div>
  );
};
