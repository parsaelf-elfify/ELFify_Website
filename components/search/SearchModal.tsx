'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { PRODUCTS, ARTICLES } from '@/lib/data';
import TomanPrice from '@/components/ui/TomanPrice';
import { Search, X, Layers, BookOpen, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct, lang, t } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return { products: [], articles: [] };
    const term = searchTerm.toLowerCase();
    const prods = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.nameEn.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term)
    );
    const arts = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(term) ||
        a.titleEn.toLowerCase().includes(term) ||
        a.tags.some((tg) => tg.toLowerCase().includes(term))
    );
    return { products: prods, articles: arts };
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#161A24] rounded-3xl border border-[#D8D5DB] dark:border-[#2D3142] shadow-2xl p-5 overflow-hidden max-h-[80vh] flex flex-col"
        >
          {/* Search Input Bar */}
          <div className="relative flex items-center border-b border-[#D8D5DB]/80 dark:border-[#2D3142] pb-4">
            <Search className="w-5 h-5 text-[#657688] dark:text-[#ADACB5] ml-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent text-sm sm:text-base font-medium text-[#0C0F0A] dark:text-[#D8D5DB] placeholder-[#ADACB5] focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1 rounded-full text-[#657688] hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="mr-2 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results Stream */}
          <div className="flex-1 overflow-y-auto pt-4 space-y-4">
            {!searchTerm.trim() ? (
              <div className="text-center py-10 text-xs text-[#657688] dark:text-[#ADACB5]">
                عبارت مورد نظر خود را تایپ کنید (مثلاً: سایلکس، چشمی وزنی، فایروال، IoT، دیاگرام سیم‌کشی)
              </div>
            ) : filtered.products.length === 0 && filtered.articles.length === 0 ? (
              <div className="text-center py-10 text-xs text-[#657688] dark:text-[#ADACB5]">
                هیچ کالایی یا مقاله‌ای مطابق جستجوی شما یافت نشد.
              </div>
            ) : (
              <>
                {/* Products Result */}
                {filtered.products.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      محصولات ({filtered.products.length})
                    </span>
                    <div className="space-y-2">
                      {filtered.products.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => {
                            setQuickViewProduct(prod);
                            setIsSearchOpen(false);
                          }}
                          className="cursor-pointer p-3 rounded-2xl bg-slate-50 dark:bg-[#1E2230] hover:bg-indigo-50/50 dark:hover:bg-purple-950/20 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3 transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative w-12 h-12 rounded-xl bg-white dark:bg-[#161A24] p-1 shrink-0">
                              <Image
                                src={prod.images[0] || '/example_product.webp'}
                                alt={prod.name}
                                fill
                                className="object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB] truncate">
                                {lang === 'fa' ? prod.name : prod.nameEn}
                              </h4>
                              <span className="text-[10px] text-[#657688]">برند: {prod.brand}</span>
                            </div>
                          </div>
                          <TomanPrice price={prod.price} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles Result */}
                {filtered.articles.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      مقالات و آموزش‌ها ({filtered.articles.length})
                    </span>
                    <div className="space-y-2">
                      {filtered.articles.map((art) => (
                        <a
                          key={art.id}
                          href="#articles"
                          onClick={() => setIsSearchOpen(false)}
                          className="block p-3 rounded-2xl bg-slate-50 dark:bg-[#1E2230] hover:bg-amber-50/50 dark:hover:bg-amber-950/20 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                        >
                          <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">
                            {lang === 'fa' ? art.title : art.titleEn}
                          </h4>
                          <span className="text-[10px] text-[#657688]">{art.category}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
