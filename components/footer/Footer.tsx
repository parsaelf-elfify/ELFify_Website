'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import {
  STORE_NAME,
  STORE_NAME_EN,
  PHONE_NUMBER,
  ADDRESS_FA,
  ADDRESS_EN,
  EMAIL,
  POSTAL_CODE,
} from '@/lib/data';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  Send,
  Award,
  Lock,
  Headphones,
  CheckCircle,
} from 'lucide-react';

export default function Footer() {
  const { lang, t, setIsContactOpen } = useApp();

  return (
    <footer className="relative bg-white dark:bg-[#0E1118] border-t border-[#D8D5DB]/80 dark:border-[#2D3142] pt-14 pb-8 text-[#2D3142] dark:text-[#ADACB5] transition-colors">
      {/* Organization & WebSite JSON-LD Schema */}
      <OrganizationSchema />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Trust Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-12 border-b border-[#D8D5DB]/60 dark:border-[#2D3142]/60">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#161A24] border border-slate-200/60 dark:border-[#2D3142]">
            <Award className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">ضمانت ۳۶ ماهه</h4>
              <p className="text-[11px] text-[#657688]">تعویض طلایی الفیفای</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#161A24] border border-slate-200/60 dark:border-[#2D3142]">
            <ShieldCheck className="w-8 h-8 text-emerald-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">۱۰۰٪ اصالت کالا</h4>
              <p className="text-[11px] text-[#657688]">تضمین اورجینال بودن</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#161A24] border border-slate-200/60 dark:border-slate-700/60">
            <Headphones className="w-8 h-8 text-indigo-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">پشتیبانی ۲۴/۷</h4>
              <p className="text-[11px] text-[#657688]">مشاوره فنی شبانه‌روزی</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#161A24] border border-slate-200/60 dark:border-slate-700/60">
            <Lock className="w-8 h-8 text-rose-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">امنیت خرید آنلاین</h4>
              <p className="text-[11px] text-[#657688]">درگاه بانکی شاپرک</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10">
          
          {/* Brand & Store Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFFFFF] via-[#F0F2FA] to-[#DDE2FB] dark:from-[#210B2C] dark:to-[#0C0F0A] border border-[#D8D5DB] dark:border-[#2D3142] inline-flex items-center">
                <span className="font-serif text-2xl font-black text-[#210B2C] dark:text-[#D8D5DB]">
                  ELF<span className="text-[#657688] font-light">ify</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#2D3142]/80 dark:text-[#ADACB5] leading-relaxed">
              {lang === 'fa'
                ? 'مرکز تخصصی تأمین، پخش عمده و خرده سیستم‌های دزدگیر اماکن، هوشمندسازی ساختمان، تجهیزات اینترنت اشیاء (IoT) و دایرکتوری نصابان مجاز کشور.'
                : 'Premier engineering and distribution hub for GSM smart alarms, PIR sensors, and commercial IoT security solutions.'}
            </p>

            {/* Business Hours */}
            <div className="flex items-center gap-2 text-xs text-[#657688] dark:text-[#ADACB5]">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>ساعات پاسخگویی: شنبه تا جمعه (۲۴ ساعته و بدون تعطیلی)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">دسته‌بندی‌ها</h4>
            <ul className="space-y-2">
              <li>
                <a href="#shop" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  دزدگیر سیم‌کارتی
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  چشمی وزنی و حرکتی
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  رله‌های اینترنت اشیاء (IoT)
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  بلندگو و آژیر شیپوری
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  پکیج‌های کامل آماده نصب
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Pages */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">خدمات مشتریان</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  درباره ما و تیم الفیفای
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  شرایط گارانتی و اصالت کالا
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  راهنمای بازگشت کالا (۷ روز مهلت تست)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  دایرکتوری و درخواست نصاب مجاز
                </button>
              </li>
              <li>
                <a href="#articles" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  مقالات و دیاگرام‌های نصب
                </a>
              </li>
            </ul>
          </div>

          {/* Local SEO / NAP Section (CRITICAL FOR TECHNICAL SEO) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">اطلاعات تماس و نشانی (Local SEO)</h4>
            
            <div className="space-y-2.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <address className="not-italic text-[#2D3142]/90 dark:text-[#ADACB5]">
                  {lang === 'fa' ? ADDRESS_FA : ADDRESS_EN}
                  <span className="block text-[11px] text-[#657688] mt-0.5">کد پستی: {POSTAL_CODE}</span>
                </address>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">شماره تماس مستقیم:</span>
                <a
                  href="tel:09928681254"
                  className="font-bold text-[#0C0F0A] dark:text-[#D8D5DB] hover:text-indigo-600 dir-ltr font-mono"
                  dir="ltr"
                >
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <span>پست الکترونیک:</span>
                <a href={`mailto:${EMAIL}`} className="font-mono text-indigo-600 dark:text-indigo-400">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Domain info */}
        <div className="pt-6 border-t border-[#D8D5DB]/60 dark:border-[#2D3142]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#657688] dark:text-[#ADACB5]">
          <p>
            © {new Date().getFullYear()} کلیه حقوق این وب‌سایت برای <strong>ELFify (elfify.ir)</strong> محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">Domain: elfify.ir</span>
            <span>•</span>
            <span className="font-mono text-[11px]">Version: 2.4.0 (SSR / Next.js)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
