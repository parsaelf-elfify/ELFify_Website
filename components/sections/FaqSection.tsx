'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { FAQS } from '@/lib/data';
import FaqSchema from '@/components/seo/FaqSchema';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const { lang, t } = useApp();
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Inject FAQ JSON-LD Schema */}
      <FaqSchema faqs={FAQS} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1.5 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{t('faqTitle')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0C0F0A] dark:text-[#D8D5DB]">
            {lang === 'fa' ? 'سوالات متداول درباره خرید و نصب دزدگیر اماکن' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-[#161A24] border border-[#D8D5DB]/80 dark:border-[#2D3142] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-right gap-4 font-bold text-sm sm:text-base text-[#0C0F0A] dark:text-[#D8D5DB] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{lang === 'fa' ? faq.question : faq.questionEn}</span>
                  <span className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[#657688] dark:text-[#ADACB5] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2D3142]/80 dark:text-[#ADACB5] leading-relaxed border-t border-slate-100 dark:border-slate-800"
                    >
                      {lang === 'fa' ? faq.answer : faq.answerEn}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
