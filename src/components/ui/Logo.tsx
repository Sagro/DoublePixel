import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8">
        <div className="absolute top-0 left-0 w-5 h-5 bg-[#C6FF00] rounded-[4px] mix-blend-screen opacity-90 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 duration-300"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-2 border-white rounded-[4px] backdrop-blur-sm transition-transform group-hover:translate-y-1 group-hover:translate-x-1 duration-300"></div>
      </div>
      <span className="text-xl font-display font-bold tracking-tight z-50">
        Double Pixel<span className="text-[#C6FF00]">.</span>
      </span>
    </div>
  );
}
