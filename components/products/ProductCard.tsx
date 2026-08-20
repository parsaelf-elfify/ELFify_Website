'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useApp } from '@/context/AppContext';
import TomanPrice from '@/components/ui/TomanPrice';
import {
  ShoppingCart,
  Eye,
  Star,
  ShieldCheck,
  Check,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductCard({ product }: { product: Product }) {
  const { lang, addToCart, setQuickViewProduct, t } = useApp();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const displayName = lang === 'fa' ? product.name : product.nameEn;
  const displayShortDesc = lang === 'fa' ? product.shortDescription : product.shortDescriptionEn;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => setQuickViewProduct(product)}
      className="group cursor-pointer relative bg-white dark:bg-[#161A24] rounded-3xl p-4 sm:p-5 border border-[#D8D5DB]/80 dark:border-[#2D3142] shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-purple-950/20 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Badges Area */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {product.hasFreeShipping && (
              <span className="px-2.5 py-1 rounded-full bg-rose-500 text-white text-[11px] font-bold shadow-sm flex items-center gap-1">
                <Zap className="w-3 h-3" />
                {t('freeShipping')}
              </span>
            )}
            {product.packageType && (
              <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[11px] font-black tracking-tight">
                {product.packageType}
              </span>
            )}
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.ratingValue}</span>
          </div>
        </div>

        {/* Product Image Stage with Fixed Aspect Ratio (Prevent CLS) */}
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#F8F9FA] to-[#ECEEF8] dark:from-[#1C202E] dark:to-[#12151E] p-3 mb-4 overflow-hidden flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-300">
          <Image
            src={product.images[0] || '/example_product.webp'}
            alt={displayName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-2 drop-shadow-md"
            referrerPolicy="no-referrer"
          />

          {/* Quick View Hover Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white/90 dark:bg-[#210B2C]/90 backdrop-blur-sm text-[#210B2C] dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            title={t('quickView')}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Brand & Category Label */}
        <div className="flex items-center justify-between text-[11px] text-[#657688] dark:text-[#ADACB5] mb-1 font-medium">
          <span>{product.brand}</span>
          <span className="font-mono text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
            {product.sku}
          </span>
        </div>

        {/* Title inside <h3> for Strict SEO Hierarchy */}
        <h3 className="text-sm sm:text-base font-bold text-[#0C0F0A] dark:text-[#D8D5DB] line-clamp-2 leading-snug mb-2 group-hover:text-[#210B2C] dark:group-hover:text-purple-300 transition-colors">
          {displayName}
        </h3>

        {/* Short Specs Excerpt */}
        <p className="text-xs text-[#2D3142]/70 dark:text-[#ADACB5]/80 line-clamp-2 leading-relaxed mb-4">
          {displayShortDesc}
        </p>
      </div>

      {/* Pricing & Add to Cart Footer */}
      <div className="pt-3 border-t border-[#D8D5DB]/50 dark:border-[#2D3142]/50 flex items-center justify-between gap-3">
        <TomanPrice
          price={product.price}
          originalPrice={product.originalPrice}
          discountPercent={product.discountPercent}
          size="md"
        />

        <button
          onClick={handleAddToCart}
          className={`p-2.5 sm:px-3.5 sm:py-2.5 rounded-2xl font-bold text-xs transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] hover:opacity-90 active:scale-95'
          }`}
          title={t('addToCart')}
          aria-label={t('addToCart')}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">{t('addedToCart')}</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">{t('addToCart')}</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
