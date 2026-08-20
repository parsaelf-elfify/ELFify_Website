'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ARTICLES } from '@/lib/data';
import { Article } from '@/types';
import {
  BookOpen,
  Clock,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogSection() {
  const { lang } = useApp();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1.5 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'fa' ? 'مقالات آموزشی و راهنمای نصب دزدگیر' : 'Technical Articles & Installation Guides'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0C0F0A] dark:text-[#D8D5DB]">
            {lang === 'fa' ? 'پایگاه دانش، عیب‌یابی و راهنمای خرید سیستم‌های حفاظتی' : 'Knowledge Base & Troubleshooting'}
          </h2>
        </div>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <motion.article
            key={article.id}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => setSelectedArticle(article)}
            className="cursor-pointer bg-white dark:bg-[#161A24] rounded-3xl p-6 border border-[#D8D5DB]/80 dark:border-[#2D3142] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Category & Read time */}
              <div className="flex items-center justify-between text-xs text-[#657688] dark:text-[#ADACB5] mb-3">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-0.5 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? article.readTime : article.readTimeEn}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0C0F0A] dark:text-[#D8D5DB] leading-snug mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {lang === 'fa' ? article.title : article.titleEn}
              </h3>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-[#2D3142]/70 dark:text-[#ADACB5]/70 line-clamp-3 leading-relaxed mb-4">
                {lang === 'fa' ? article.excerpt : article.excerptEn}
              </p>
            </div>

            {/* Tags & Action */}
            <div>
              <div className="flex items-center gap-1.5 flex-wrap mb-4">
                {article.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-100 dark:bg-slate-800 text-[#2D3142] dark:text-[#ADACB5] px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-[#D8D5DB]/50 dark:border-[#2D3142]/50 flex items-center justify-between text-xs font-bold text-[#210B2C] dark:text-purple-300">
                <span>{lang === 'fa' ? 'مطالعه کامل مقاله' : 'Read Full Guide'}</span>
                {lang === 'fa' ? (
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#161A24] rounded-3xl border border-[#D8D5DB] dark:border-[#2D3142] shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-[#657688] dark:text-[#ADACB5] mb-3">
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>نویسنده: {selectedArticle.author}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[#0C0F0A] dark:text-[#D8D5DB] leading-snug mb-6">
                {lang === 'fa' ? selectedArticle.title : selectedArticle.titleEn}
              </h2>

              <div className="prose dark:prose-invert max-w-none text-sm text-[#2D3142] dark:text-[#D8D5DB] leading-relaxed whitespace-pre-line space-y-4">
                {lang === 'fa' ? selectedArticle.content : selectedArticle.contentEn}
              </div>

              {/* Contextual Internal Links for SEO */}
              <div className="mt-8 p-4 rounded-2xl bg-[#DDE2FB]/30 dark:bg-[#210B2C]/40 border border-[#D8D5DB]/60 dark:border-[#2D3142] flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB] mb-0.5">
                    نیاز به تهیه چشمی یا پنل دزدگیر دارید؟
                  </h4>
                  <p className="text-[11px] text-[#657688] dark:text-[#ADACB5]">
                    تمامی محصولات با گارانتی اصالت و ارسال فوری در فروشگاه موجود است.
                  </p>
                </div>
                <a
                  href="#shop"
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-xl bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] font-bold text-xs whitespace-nowrap"
                >
                  مشاهده محصولات
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
