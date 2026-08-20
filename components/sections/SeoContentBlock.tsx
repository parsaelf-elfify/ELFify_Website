'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Cpu, Phone, Award, CheckCircle } from 'lucide-react';

export default function SeoContentBlock() {
  const { lang } = useApp();

  if (lang !== 'fa') {
    return (
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#D8D5DB]/60 dark:border-[#2D3142]/60">
        <div className="bg-white dark:bg-[#161A24] rounded-3xl p-8 border border-[#D8D5DB]/80 dark:border-[#2D3142]">
          <h2 className="text-2xl font-black text-[#0C0F0A] dark:text-[#D8D5DB] mb-4">
            Professional Security Systems & IoT Automation Center - ELFify
          </h2>
          <p className="text-sm text-[#2D3142]/80 dark:text-[#ADACB5] leading-relaxed mb-4">
            ELFify is the premier Iranian supplier and engineering center for commercial and residential GSM security systems, smart alarms, pet-immune PIR detectors, and home automation relays. With brands like ioMax, Silex, Firewall, and Classic, we provide complete safety solutions backed by 36-month warranties and nationwide certified technicians.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#D8D5DB]/60 dark:border-[#2D3142]/60">
      <div className="bg-white dark:bg-[#161A24] rounded-3xl p-6 sm:p-10 border border-[#D8D5DB]/80 dark:border-[#2D3142] shadow-sm">
        
        {/* Main Section H2 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-6 bg-[#210B2C] dark:bg-purple-400 rounded-full" />
          <h2 className="text-xl sm:text-2xl font-black text-[#0C0F0A] dark:text-[#D8D5DB]">
            راهنمای جامع انتخاب و خرید دزدگیر اماکن و سیستم‌های حفاظتی هوشمند
          </h2>
        </div>

        {/* Detailed 500+ Words SEO Content Block */}
        <div className="space-y-6 text-xs sm:text-sm text-[#2D3142]/85 dark:text-[#ADACB5] leading-relaxed">
          <p>
            تأمین امنیت منازل مسکونی، ویلاها، فروشگاه‌ها، انبارها و مراکز صنعتی امروزه نیازمند به کارگیری سیستم‌های اعلام سرقت هوشمند مبتنی بر ارتباطات سیم‌کارتی (GSM) و اینترنت اشیاء (IoT) است. در فروشگاه تخصصی <strong>الفیفای (ELFify)</strong>، مجموعه‌ای برگزیده از جدیدترین پنل‌های دزدگیر مرکزی به همراه انواع سنسورهای حرکتی مادون قرمز (PIR)، چشمی‌های وزنی ضد حیوانات (Pet-Immune)، دتکتورهای دود و شکست شیشه، مگنت‌های درب و پنجره و رله‌های کنترل از راه دور هوشمند با گارانتی اصالت عرضه می‌گردد.
          </p>

          {/* Subheading H3: Types of Alarms */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-[#0C0F0A] dark:text-[#D8D5DB] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              انواع سیستم‌های دزدگیر اماکن: سیم‌کارتی در برابر خط ثابت
            </h3>
            <p>
              در گذشته سیستم‌های دزدگیر صرفاً به خطوط تلفن ثابت شهری (PSTN) متصل می‌شدند که سارقین به سادگی با قطع کردن کابل تلفن ورودی ساختمان، سیستم گزارش‌دهی را مختل می‌کردند. نسل جدید <strong>دزدگیرهای سیم‌کارتی مانند ioMax-Plus، سایلکس SG8-S و فایروال F10</strong> با بهره‌مندی از ماژول مخابراتی داخلی، به محض تحریک زون‌ها در کمتر از ۲ ثانیه علاوه بر تماس صوتی سخنگو، متن پیامک هشدار را به شماره همراه مدیران ارسال کرده و گزارش قطع برق شهر، سوختن فیوز یا باز شدن قاب سنسورها را لحظه‌ای گزارش می‌نمایند.
            </p>
          </div>

          {/* Subheading H3: Top Brands Overview */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-[#0C0F0A] dark:text-[#D8D5DB] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              بررسی برندهای شاخص بازار: سایلکس، فایروال، کلاسیک و سری‌های اینترنت اشیاء ioMax
            </h3>
            <p>
              هر یک از برندهای تولیدی دارای ویژگی‌های منحصر‌به‌فردی هستند:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <li className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                <strong className="text-[#0C0F0A] dark:text-white block mb-1">۱. سری‌های هوشمند ioMax-Plus:</strong>
                تلفیق دزدگیر پیشرفته با قابلیت‌های اینترنت اشیاء (IoT)، اپلیکیشن دو زبانه فوق‌العاده سریع و رله‌های کنترل وسایل برقی (پمپ، روشنایی، کرکره).
              </li>
              <li className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                <strong className="text-[#0C0F0A] dark:text-white block mb-1">۲. دزدگیر سایلکس (Silex):</strong>
                پایداری الکترونیکی مثال‌زدنی، تلفن‌کننده سخنگوی پرقدرت و تفکیک زون‌ها به حالت‌های مختلف.
              </li>
              <li className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                <strong className="text-[#0C0F0A] dark:text-white block mb-1">۳. دزدگیر فایروال (Firewall F10):</strong>
                دارای ۷ رله خروجی مستقل، ۸ زون باسیم و ۸ زون بیسیم با ۵ سال گارانتی معتبر.
              </li>
              <li className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                <strong className="text-[#0C0F0A] dark:text-white block mb-1">۴. دزدگیر کلاسیک (Classic Z4 Ultra):</strong>
                امنیت بی‌نظیر با ریموت‌های ۶۴ بیتی ترارکد (TeraCode) ضد هک و ضد کپی.
              </li>
            </ul>
          </div>

          {/* Subheading H3: Important Tips for Purchasing */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-[#0C0F0A] dark:text-[#D8D5DB] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              نکات کلیدی در نصب و انتخاب چشمی مناسب جهت جلوگیری از آژیر خطا
            </h3>
            <p>
              برای اماکنی که دارای حیوانات خانگی یا پرندگان هستند، استفاده از <strong>چشمی‌های وزنی (Pet Immune)</strong> با تفکیک وزنی تا ۳۰ کیلوگرم ضروری است. همچنین توصیه می‌شود همواره از کابل‌های فویل‌دار استاندارد، بلندگوهای با کاور فلزی مجهز به سوئیچ تمپر و باتری‌های سیلد لید اسید ۱۲ ولت ۷.۲ آمپر تازه تولید استفاده نمایید تا سیستم در هنگام قطعی برق بیش از ۴۸ ساعت به فعالیت پایدار خود ادامه دهد.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
