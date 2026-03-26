import React, { useCallback, useRef } from 'react';

interface MobileControlsProps {
  keysRef: React.MutableRefObject<{ [key: string]: boolean }>;
}

export const MobileControls: React.FC<MobileControlsProps> = ({ keysRef }) => {
  const activeRef = useRef<Set<string>>(new Set());

  const press = useCallback((key: string) => {
    keysRef.current[key] = true;
    activeRef.current.add(key);
  }, [keysRef]);

  const release = useCallback((key: string) => {
    keysRef.current[key] = false;
    activeRef.current.delete(key);
  }, [keysRef]);

  const releaseAll = useCallback(() => {
    activeRef.current.forEach(key => {
      keysRef.current[key] = false;
    });
    activeRef.current.clear();
  }, [keysRef]);

  const handleTouch = useCallback((key: string, isDown: boolean) => {
    if (isDown) press(key);
    else release(key);
  }, [press, release]);

  // Prevent default to avoid scrolling/zooming while playing
  const preventAndHandle = useCallback((key: string, isDown: boolean) => (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleTouch(key, isDown);
  }, [handleTouch]);

  const btnBase = "select-none touch-none active:scale-95 transition-transform duration-75 flex items-center justify-center";

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" style={{ touchAction: 'none' }}>
      <div className="flex justify-between items-end p-4 pb-6">
        {/* Left side - Steering */}
        <div className="pointer-events-auto flex gap-3 items-center">
          {/* Left button */}
          <button
            className={`${btnBase} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-800/80 backdrop-blur-sm border-2 border-slate-600/50 text-white`}
            onTouchStart={preventAndHandle('ArrowLeft', true)}
            onTouchEnd={preventAndHandle('ArrowLeft', false)}
            onTouchCancel={() => release('ArrowLeft')}
            onMouseDown={preventAndHandle('ArrowLeft', true)}
            onMouseUp={preventAndHandle('ArrowLeft', false)}
            onMouseLeave={() => release('ArrowLeft')}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right button */}
          <button
            className={`${btnBase} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-800/80 backdrop-blur-sm border-2 border-slate-600/50 text-white`}
            onTouchStart={preventAndHandle('ArrowRight', true)}
            onTouchEnd={preventAndHandle('ArrowRight', false)}
            onTouchCancel={() => release('ArrowRight')}
            onMouseDown={preventAndHandle('ArrowRight', true)}
            onMouseUp={preventAndHandle('ArrowRight', false)}
            onMouseLeave={() => release('ArrowRight')}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Right side - Gas & Brake */}
        <div className="pointer-events-auto flex flex-col gap-3">
          {/* Gas pedal */}
          <button
            className={`${btnBase} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-green-700/70 backdrop-blur-sm border-2 border-green-500/50 text-white`}
            onTouchStart={preventAndHandle('ArrowUp', true)}
            onTouchEnd={preventAndHandle('ArrowUp', false)}
            onTouchCancel={() => release('ArrowUp')}
            onMouseDown={preventAndHandle('ArrowUp', true)}
            onMouseUp={preventAndHandle('ArrowUp', false)}
            onMouseLeave={() => release('ArrowUp')}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>

          {/* Brake pedal */}
          <button
            className={`${btnBase} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-700/70 backdrop-blur-sm border-2 border-red-500/50 text-white`}
            onTouchStart={preventAndHandle('ArrowDown', true)}
            onTouchEnd={preventAndHandle('ArrowDown', false)}
            onTouchCancel={() => release('ArrowDown')}
            onMouseDown={preventAndHandle('ArrowDown', true)}
            onMouseUp={preventAndHandle('ArrowDown', false)}
            onMouseLeave={() => release('ArrowDown')}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
