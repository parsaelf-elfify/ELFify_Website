'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export function formatPriceNumber(num: number, lang: 'fa' | 'en' = 'fa'): string {
  const formatted = num.toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US');
  return formatted;
}

export function TomanIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="تومان"
      role="img"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-1.57-4.5-3.5 0-1.5 1.2-2.77 3-3.23V8.5h1.5v1.3c2.05.37 3.5 1.83 3.5 3.7 0 2.21-2.01 4-4.5 4zm-1.5-2.2c-.83 0-1.5-.58-1.5-1.3s.67-1.3 1.5-1.3v2.6zm1.5 0v-2.6c.83 0 1.5.58 1.5 1.3s-.67 1.3-1.5 1.3z" />
    </svg>
  );
}

interface TomanPriceProps {
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDiscountBadge?: boolean;
  className?: string;
}

export default function TomanPrice({
  price,
  originalPrice,
  discountPercent,
  size = 'md',
  showDiscountBadge = true,
  className = '',
}: TomanPriceProps) {
  const { lang, t } = useApp();

  const sizeClasses = {
    sm: 'text-sm font-semibold',
    md: 'text-base font-bold',
    lg: 'text-xl font-extrabold',
    xl: 'text-2xl lg:text-3xl font-black',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {originalPrice && originalPrice > price && (
        <div className="flex items-center gap-2 text-xs text-french-gray line-through mb-0.5">
          <span>{formatPriceNumber(originalPrice, lang)}</span>
          {showDiscountBadge && discountPercent && (
            <span className="bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold px-1.5 py-0.5 rounded text-[10px] no-underline">
              %{lang === 'fa' ? discountPercent.toLocaleString('fa-IR') : discountPercent} {t('off')}
            </span>
          )}
        </div>
      )}
      <div className={`inline-flex items-center gap-1 text-night dark:text-platinum tracking-tight ${sizeClasses[size]}`}>
        <span>{formatPriceNumber(price, lang)}</span>
        <span className="inline-flex items-center text-gunmetal/70 dark:text-french-gray text-xs font-normal mr-0.5">
          {t('toman')}
        </span>
      </div>
    </div>
  );
}
