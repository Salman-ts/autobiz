'use client';

import Link from 'next/link';

export function Logo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizes = {
    small: { box: 'w-6 h-6', text: 'text-base', icon: 'text-xs' },
    default: { box: 'w-10 h-10', text: 'text-xl', icon: 'text-sm' },
    large: { box: 'w-16 h-16', text: 'text-3xl', icon: 'text-lg' }
  };

  const { box, text, icon } = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Logo Icon */}
      <div className={`${box} rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* AB Monogram */}
        <div className="relative flex items-center justify-center">
          <span className={`font-bold text-white ${icon} tracking-tighter`}>
            AB
          </span>
        </div>
        
        {/* Automation symbol (gear) */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full flex items-center justify-center">
          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span className={`${text} font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent leading-none`}>
          AutoBiz
        </span>
        {size === 'large' && (
          <span className="text-xs text-muted-foreground mt-1">
            Business Automation
          </span>
        )}
      </div>
    </Link>
  );
}
