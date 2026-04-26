import React from 'react';

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[120px] animate-pulse"
        style={{ background: 'var(--ifm-color-primary)' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[120px] animate-pulse"
        style={{ background: '#a855f7', animationDelay: '2s' }}
      />
    </div>
  );
}
