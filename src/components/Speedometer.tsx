import React, { useEffect, useRef } from 'react';
import { CarPhysics } from '../lib/physics';

interface SpeedometerProps {
  car: CarPhysics;
}

export const Speedometer: React.FC<SpeedometerProps> = ({ car }) => {
  const needleRef = useRef<SVGGElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateSpeedometer = () => {
      if (needleRef.current && textRef.current) {
        // Calculate speed in km/h
        const speedKmh = Math.abs(car.speed * 24000000);
        const displaySpeed = Math.min(Math.round(speedKmh), 240); // Cap at 240 for UI

        // Calculate angle (-120 to +120 degrees)
        const angle = -120 + (displaySpeed / 240) * 240;

        needleRef.current.style.transform = `rotate(${angle}deg)`;
        textRef.current.textContent = displaySpeed.toString();
      }
      animationFrameId = requestAnimationFrame(updateSpeedometer);
    };

    updateSpeedometer();

    return () => cancelAnimationFrame(animationFrameId);
  }, [car]);

  // Generate ticks
  const ticks = [];
  for (let i = 0; i <= 240; i += 20) {
    const angle = -120 + (i / 240) * 240;
    const rad = (angle - 90) * (Math.PI / 180);
    const isMajor = i % 40 === 0;
    const isRedZone = i >= 200;

    const r1 = 85;
    const r2 = isMajor ? 73 : 79;
    const x1 = 100 + r1 * Math.cos(rad);
    const y1 = 100 + r1 * Math.sin(rad);
    const x2 = 100 + r2 * Math.cos(rad);
    const y2 = 100 + r2 * Math.sin(rad);

    const strokeColor = isRedZone ? "#ef4444" : (isMajor ? "white" : "#94a3b8");

    ticks.push(
      <line
        key={`line-${i}`}
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={strokeColor}
        strokeWidth={isMajor ? 3 : 1.5}
        strokeLinecap="round"
      />
    );

    if (isMajor) {
      const tx = 100 + 56 * Math.cos(rad);
      const ty = 100 + 56 * Math.sin(rad);
      ticks.push(
        <text
          key={`text-${i}`}
          x={tx} y={ty}
          fill={isRedZone ? "#ef4444" : "white"}
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {i}
        </text>
      );
    }
  }

  return (
    <div className="absolute bottom-6 right-30 w-56 h-56 bg-slate-900/90 backdrop-blur-md rounded-full border-[6px] border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden z-10">
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.15)] pointer-events-none"></div>

      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
        {/* Background gradient */}
        <defs>
          <radialGradient id="dialGradient" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#dialGradient)" />

        {/* Ticks */}
        {ticks}

        {/* Digital Speed */}
        <text
          ref={textRef}
          x="100" y="145"
          fill="white"
          fontSize="36"
          fontWeight="900"
          textAnchor="middle"
          fontFamily="monospace"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          0
        </text>
        <text
          x="100" y="165"
          fill="#94a3b8"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
          letterSpacing="1"
        >
          KM/H
        </text>

        {/* Needle */}
        <g ref={needleRef} style={{ transformOrigin: '100px 100px', transition: 'transform 0.05s linear' }}>
          {/* Needle shadow */}
          <polygon points="97,102 103,102 100,22" fill="rgba(0,0,0,0.4)" />
          {/* Needle body */}
          <polygon points="96,100 104,100 100,20" fill="#ef4444" />
          {/* Center cap */}
          <circle cx="100" cy="100" r="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <circle cx="100" cy="100" r="4" fill="#ef4444" />
        </g>
      </svg>
    </div>
  );
};
