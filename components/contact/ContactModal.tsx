'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { PHONE_NUMBER, ADDRESS_FA, EMAIL } from '@/lib/data';
import {
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactModal() {
  const { isContactOpen, setIsContactOpen, lang, t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'مشاوره خرید پکیج دزدگیر',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isContactOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsContactOpen(false);
      setFormData({ name: '', phone: '', serviceType: 'مشاوره خرید پکیج دزدگیر', message: '' });
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#161A24] rounded-3xl border border-[#D8D5DB] dark:border-[#2D3142] shadow-2xl p-6 sm:p-8"
        >
          <button
            onClick={() => setIsContactOpen(false)}
            className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
              واحد مشاوره و پشتیبانی ۲۴ ساعته الفیفای
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#0C0F0A] dark:text-[#D8D5DB] mb-4">
            {lang === 'fa' ? 'درخواست مشاوره رایگان و اعزام نصاب مجاز' : 'Free Security Consultation & Service'}
          </h2>

          {isSubmitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-base font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">
                درخواست شما با موفقیت ثبت شد!
              </h3>
              <p className="text-xs text-[#657688] dark:text-[#ADACB5]">
                کارشناس فنی سیستم‌های حفاظتی الفیفای ظرف کمتر از ۱۵ دقیقه با شما تماس خواهد گرفت.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Direct Hotline Info */}
              <div className="md:col-span-5 space-y-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB]/60 dark:border-[#2D3142] text-xs">
                <div>
                  <span className="block text-[#657688] dark:text-[#ADACB5] text-[11px] mb-1">
                    تماس مستقیم تلفنی:
                  </span>
                  <a
                    href="tel:09928681254"
                    className="font-bold text-sm text-[#0C0F0A] dark:text-[#D8D5DB] hover:text-indigo-600 flex items-center gap-1.5 dir-ltr font-mono"
                    dir="ltr"
                  >
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span>{PHONE_NUMBER}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="block text-[#657688] dark:text-[#ADACB5] text-[11px] mb-1">
                    نشانی دفتر مرکزی:
                  </span>
                  <p className="text-[11px] text-[#2D3142] dark:text-[#D8D5DB] leading-relaxed">
                    {ADDRESS_FA}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>پوشش نصب و خدمات در کلیه استان‌های کشور</span>
                </div>
              </div>

              {/* Consultation Form */}
              <form onSubmit={handleSubmit} className="md:col-span-7 space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-[#0C0F0A] dark:text-[#D8D5DB] mb-1">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: علیرضا محمدی"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-[#0C0F0A] dark:text-[#D8D5DB] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0C0F0A] dark:text-[#D8D5DB] mb-1">
                    شماره همراه:
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="۰۹۱۲..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-[#0C0F0A] dark:text-[#D8D5DB] focus:outline-none focus:ring-2 focus:ring-indigo-500 dir-ltr text-right"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0C0F0A] dark:text-[#D8D5DB] mb-1">
                    نوع خدمت مورد نیاز:
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-[#0C0F0A] dark:text-[#D8D5DB] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="مشاوره خرید پکیج دزدگیر">مشاوره خرید پکیج دزدگیر اماکن</option>
                    <option value="درخواست اعزام نصاب">درخواست اعزام نصاب و کارشناسی در محل</option>
                    <option value="خرید عمده و همکار">استعلام قیمت همکاری و پخش عمده</option>
                    <option value="پشتیبانی فنی">پشتیبانی فنی و استعلام گارانتی</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#0C0F0A] dark:text-[#D8D5DB] mb-1">
                    توضیحات (متراژ، تعداد ورودی‌ها و نوع مکان):
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="مثال: آپارتمان ۱۲۰ متری طبقه اول دارای ۲ درب بالکن..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-[#0C0F0A] dark:text-[#D8D5DB] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] font-bold text-xs shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>ثبت درخواست مشاوره رایگان</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
