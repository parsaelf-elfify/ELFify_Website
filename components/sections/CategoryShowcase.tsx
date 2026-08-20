'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { CATEGORIES } from '@/lib/data';
import {
  ShieldAlert,
  Eye,
  Cpu,
  BellRing,
  PackageCheck,
  BatteryCharging,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Eye,
  Cpu,
  BellRing,
  PackageCheck,
  BatteryCharging,
};

export default function CategoryShowcase() {
  const { lang, setActiveCategory } = useApp();

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0C0F0A] dark:text-[#D8D5DB] mb-3">
          {lang === 'fa' ? 'دسته‌بندی تجهیزات حفاظتی و سیستم‌های امنیتی' : 'Security & Smart Equipment Categories'}
        </h2>
        <p className="text-xs sm:text-sm text-[#657688] dark:text-[#ADACB5] leading-relaxed">
          {lang === 'fa'
            ? 'تنوع کاملی از پنل‌های دزدگیر سیم‌کارتی، سنسورهای وزنی، آژیرهای صنعتی، رله‌های کنترل از راه دور و پکیج‌های آماده نصب'
            : 'Explore complete security hubs, pet-immune sensors, industrial sirens, and smart IoT automation kits.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {CATEGORIES.map((cat, index) => {
          const IconComp = iconMap[cat.iconName] || ShieldAlert;
          return (
            <motion.div
              key={cat.id}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => {
                setActiveCategory(cat.slug);
                const el = document.getElementById('shop');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cursor-pointer p-6 rounded-3xl bg-white dark:bg-[#161A24] border border-[#D8D5DB]/80 dark:border-[#2D3142] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DDE2FB] to-[#FBE3DD] dark:from-[#210B2C] dark:to-[#1E2230] flex items-center justify-center text-[#210B2C] dark:text-[#D8D5DB] mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between text-xs text-[#657688] dark:text-[#ADACB5] mb-1">
                  <span>{cat.itemCount} کالا</span>
                  <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400">گارانتی تعویض</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0C0F0A] dark:text-[#D8D5DB] mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {lang === 'fa' ? cat.name : cat.nameEn}
                </h3>

                <p className="text-xs text-[#2D3142]/70 dark:text-[#ADACB5]/70 line-clamp-2 leading-relaxed">
                  {lang === 'fa' ? cat.description : cat.descriptionEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D8D5DB]/50 dark:border-[#2D3142]/50 flex items-center justify-between text-xs font-bold text-[#210B2C] dark:text-purple-300">
                <span>{lang === 'fa' ? 'مشاهده محصولات این دسته' : 'View Products'}</span>
                {lang === 'fa' ? (
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
