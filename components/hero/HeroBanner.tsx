'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Eye,
  Radio,
  Cpu,
  Store,
  Heart,
  ArrowLeft,
  Lock,
  Unlock,
  Zap,
  CheckCircle2,
  BellRing,
  Layers,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroBanner() {
  const { lang, t, setIsCartOpen } = useApp();
  const [isArmed, setIsArmed] = useState(true);

  // Sample hero product data matching Desktop - 1.png
  const heroProducts = [
    {
      id: 'hp-1',
      title: 'دزدگیر اماکن',
      titleEn: 'Burglar Alarm',
      discount: '55%OFF',
      timer: '12:80,1404/04/10',
      specs: { sensor: '10', output: '10', cpu: 'ARM' },
      oldPrice: '990',
      newPrice: '900',
      image: '/example_product.webp',
    },
    {
      id: 'hp-2',
      title: 'دزدگیر اماکن',
      titleEn: 'Burglar Alarm',
      discount: '55%OFF',
      timer: '12:80,1404/04/10',
      specs: { sensor: '10', output: '10', cpu: 'ARM' },
      oldPrice: '990',
      newPrice: '900',
      image: '/example_product.webp',
    },
    {
      id: 'hp-3',
      title: 'دزدگیر اماکن',
      titleEn: 'Burglar Alarm',
      discount: '55%OFF',
      timer: '12:80,1404/04/10',
      specs: { sensor: '10', output: '10', cpu: 'ARM' },
      oldPrice: '990',
      newPrice: '900',
      image: '/example_product.webp',
    },
  ];

  // Category Slider Items (Matching Desktop - 1.png)
  const categorySliderItems = [
    { id: 1, name: 'افزایش دهنده', sub: 'Zone Expander', icon: Layers },
    { id: 2, name: 'سنسور ها', sub: 'Alarm Sensors', icon: Eye },
    { id: 3, name: 'دزدگیر اماکن', sub: 'Burglar Alarm', icon: Shield },
    { id: 4, name: 'تلفن کننده', sub: 'Dialer - Caller', icon: Radio },
    { id: 5, name: 'افزایش دهنده', sub: 'Zone Expander', icon: Cpu },
    { id: 6, name: 'سنسور ها', sub: 'Alarm Sensors', icon: BellRing },
  ];

  // Special Discounts Items (Matching Desktop - 1.png bottom row)
  const discountProducts = [
    {
      id: 'dp-1',
      title: 'دزدگیر اماکن',
      discount: '55%',
      timer: '12:80,1404/04/10',
      cpu: 'ARM',
      oldPrice: '599.32',
      newPrice: '299.536',
      image: '/example_product.webp',
    },
    {
      id: 'dp-2',
      title: 'دزدگیر اماکن',
      discount: '55%',
      timer: '12:80,1404/04/10',
      cpu: 'ARM',
      oldPrice: '599.32',
      newPrice: '299.536',
      image: '/example_product.webp',
    },
    {
      id: 'dp-3',
      title: 'دزدگیر اماکن',
      discount: '55%',
      timer: '12:80,1404/04/10',
      cpu: 'ARM',
      oldPrice: '599.32',
      newPrice: '299.536',
      image: '/example_product.webp',
    },
    {
      id: 'dp-4',
      title: 'دزدگیر اماکن',
      discount: '55%',
      timer: '12:80,1404/04/10',
      cpu: 'ARM',
      oldPrice: '599.32',
      newPrice: '299.536',
      image: '/example_product.webp',
    },
    {
      id: 'dp-5',
      title: 'دزدگیر اماکن',
      discount: '55%',
      timer: '12:80,1404/04/10',
      cpu: 'ARM',
      oldPrice: '599.32',
      newPrice: '299.536',
      image: '/example_product.webp',
    },
  ];

  return (
    <section id="home" className="py-4 sm:py-6 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO TOP ROW (Matching Desktop - 1.png)                     */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
        
        {/* Left Side (RTL): 3 Featured Product Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {heroProducts.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#D8D5DB] dark:bg-[#1A1E29] rounded-2xl p-3.5 flex flex-col justify-between border border-[#ADACB5]/40 dark:border-[#2D3142] shadow-sm hover:shadow-md transition-all group"
            >
              {/* Card Header: Discount Badge & Timer */}
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="bg-[#210B2C] text-white px-2 py-0.5 rounded-full tracking-wide">
                  {p.discount}
                </span>
                <span className="text-[#657688] dark:text-[#ADACB5] font-mono" dir="ltr">
                  {p.timer}
                </span>
              </div>

              {/* Product Image */}
              <div className="my-2 flex justify-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-28 sm:h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info & Specs */}
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#0C0F0A] dark:text-white mb-2">
                  {lang === 'fa' ? p.title : p.titleEn}
                </h3>

                <div className="grid grid-cols-3 gap-1 text-[10px] font-medium text-[#2D3142] dark:text-[#ADACB5] bg-white/50 dark:bg-[#12151E] p-1.5 rounded-xl text-center mb-3">
                  <div>
                    <span className="block text-[9px] text-[#657688]">پردازنده</span>
                    <span className="font-bold">{p.specs.cpu}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-[#657688]">خروجی</span>
                    <span className="font-bold">{p.specs.output}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-[#657688]">سنسور</span>
                    <span className="font-bold">{p.specs.sensor}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Buy Button */}
              <div className="flex items-center justify-between pt-2 border-t border-[#ADACB5]/40 dark:border-[#2D3142]">
                <div>
                  <div className="text-[10px] text-[#657688] line-through flex items-center gap-0.5">
                    <span>{p.oldPrice}</span>
                    <img src="/icon_price.png" alt="تومان" className="w-3 h-3 object-contain" />
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#210B2C] dark:text-purple-300 flex items-center gap-0.5">
                    <span>{p.newPrice}</span>
                    <img src="/icon_price.png" alt="تومان" className="w-3.5 h-3.5 object-contain" />
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#210B2C] hover:bg-[#2D3142] dark:bg-white dark:hover:bg-slate-200 text-white dark:text-[#0C0F0A] font-bold text-xs shadow transition-all"
                >
                  {lang === 'fa' ? 'خرید' : 'Buy'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side (RTL): Dark Hero Banner Box (Matching Desktop - 1.png) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#210B2C] dark:bg-[#131622] text-white rounded-3xl p-6 relative overflow-hidden shadow-xl min-h-[300px]">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#657688]/30 via-transparent to-[#283555]/50 pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold backdrop-blur-sm border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'fa' ? 'نسل جدید دزدگیر اماکن و IoT' : 'Next-Gen Smart Security'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black leading-snug">
              {lang === 'fa' ? (
                <>
                  امنیت هوشمند و <span className="text-amber-300">کنترل کامل</span> اماکن با الفیفای
                </>
              ) : (
                'Complete Security & Smart IoT Automation'
              )}
            </h2>

            <p className="text-xs sm:text-sm text-[#ADACB5] leading-relaxed max-w-md">
              {lang === 'fa'
                ? 'مرکز تخصصی فروش جدیدترین پنل‌های دزدگیر سیم‌کارتی، چشمی‌های وزنی ضد حیوانات و رله‌های هوشمند کنترل از راه دور با ۳۶ ماه ضمانت تعویض.'
                : 'GSM cellular security central hubs, pet-immune PIR sensors, and smart IoT remote switches with 36 months full replacement warranty.'}
            </p>
          </div>

          {/* Bottom Interactive Device Status Indicator */}
          <div className="relative z-10 pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isArmed ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
              <span className="font-bold">
                {isArmed ? (lang === 'fa' ? 'سیستم مسلح و آماده خدمت' : 'System Armed') : (lang === 'fa' ? 'سیستم غیرمسلح' : 'Disarmed')}
              </span>
            </div>

            <button
              onClick={() => setIsArmed(!isArmed)}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 font-bold transition-all text-xs flex items-center gap-1.5"
            >
              {isArmed ? <Lock className="w-3.5 h-3.5 text-emerald-300" /> : <Unlock className="w-3.5 h-3.5 text-rose-300" />}
              <span>{isArmed ? 'مسلح' : 'غیرمسلح'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. CATEGORY ICON SLIDER BAR (Matching Desktop - 1.png middle)  */}
      {/* ------------------------------------------------------------- */}
      <div className="my-8 py-4 border-y border-[#D8D5DB] dark:border-[#2D3142] flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        {/* Navigation Arrow Right (RTL) */}
        <button
          className="w-8 h-8 rounded-xl bg-[#D8D5DB] dark:bg-[#1E2330] text-[#2D3142] dark:text-[#D8D5DB] flex items-center justify-center shrink-0 hover:bg-[#210B2C] hover:text-white transition-colors"
          aria-label="Previous Categories"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Category Items */}
        <div className="flex items-center justify-between gap-4 sm:gap-8 flex-1 min-w-max px-2">
          {categorySliderItems.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                {/* Double Ringed Circle Icon */}
                <div className="w-12 h-12 rounded-full border-2 border-[#2D3142] dark:border-[#ADACB5] p-0.5 flex items-center justify-center bg-white dark:bg-[#1A1E29] group-hover:border-[#210B2C] transition-colors">
                  <div className="w-full h-full rounded-full bg-[#D8D5DB] dark:bg-[#2D3142] flex items-center justify-center text-[#210B2C] dark:text-white group-hover:bg-[#210B2C] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="text-right">
                  <span className="block text-xs font-black text-[#0C0F0A] dark:text-white group-hover:text-[#210B2C] dark:group-hover:text-purple-300 transition-colors">
                    {lang === 'fa' ? item.name : item.sub}
                  </span>
                  <span className="block text-[10px] text-[#657688] font-medium">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrow Left (RTL) */}
        <button
          className="w-8 h-8 rounded-xl bg-[#D8D5DB] dark:bg-[#1E2330] text-[#2D3142] dark:text-[#D8D5DB] flex items-center justify-center shrink-0 hover:bg-[#210B2C] hover:text-white transition-colors"
          aria-label="Next Categories"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. SPECIAL DISCOUNTS CAROUSEL (Matching Desktop - 1.png)      */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#D8D5DB] dark:bg-[#181C28] rounded-3xl p-5 sm:p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Right Panel (RTL): Section Title & CTA Button */}
          <div className="lg:col-span-3 text-right space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0F0A] dark:text-white">
              {lang === 'fa' ? 'تخفیف‌های ویژه' : 'Special Discounts'}
            </h2>
            <p className="text-xs text-[#2D3142] dark:text-[#ADACB5] font-semibold leading-relaxed">
              {lang === 'fa' ? 'محصولات با تخفیف بیشتر از ۵۰٪' : 'Products with over 50% discount'}
            </p>

            <div className="pt-2">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#210B2C] dark:bg-white text-white dark:text-[#0C0F0A] font-bold text-xs shadow-md hover:bg-[#2D3142] transition-colors group"
              >
                <span>{lang === 'fa' ? 'نمایش بیشتر' : 'Show More'}</span>
                <div className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center">
                  <ArrowLeft className="w-3 h-3 rtl:rotate-0 ltr:rotate-180" />
                </div>
              </a>
            </div>
          </div>

          {/* Left Panel (RTL): Horizontal Discount Product Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {discountProducts.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="bg-white dark:bg-[#1E2330] rounded-2xl p-3 border border-[#ADACB5]/40 dark:border-[#2D3142] shadow-sm flex flex-col justify-between group"
              >
                {/* Top Badges */}
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="bg-rose-500 text-white px-2 py-0.5 rounded-md">
                    {item.discount}
                  </span>
                  <span className="bg-[#210B2C] text-white px-1.5 py-0.5 rounded-md font-mono text-[9px]" dir="ltr">
                    {item.timer}
                  </span>
                </div>

                {/* Product Image */}
                <div className="my-2 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="text-right">
                  <h3 className="text-xs font-bold text-[#0C0F0A] dark:text-white">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-[#210B2C] text-white text-[9px] font-bold px-2 py-0.5 rounded my-1">
                    CPU: {item.cpu}
                  </span>

                  {/* Prices with تومان icon */}
                  <div className="mt-1">
                    <div className="text-[10px] text-[#657688] line-through flex items-center gap-0.5">
                      <span>{item.oldPrice}</span>
                      <img src="/icon_price.png" alt="تومان" className="w-3 h-3 object-contain" />
                    </div>
                    <div className="text-xs font-black text-[#210B2C] dark:text-purple-300 flex items-center gap-0.5">
                      <span>{item.newPrice}</span>
                      <img src="/icon_price.png" alt="تومان" className="w-3.5 h-3.5 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Bottom Action Controls */}
                <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1">
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="flex-1 py-1 px-2 rounded-xl bg-[#210B2C] hover:bg-[#2D3142] text-white text-[10px] font-bold shadow text-center transition-colors"
                  >
                    {lang === 'fa' ? 'نمایش محصول' : 'View'}
                  </button>

                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="p-1.5 rounded-xl bg-[#210B2C] hover:bg-[#2D3142] text-white transition-colors"
                    title="افزودن به سبد خرید"
                  >
                    <Store className="w-3.5 h-3.5" />
                  </button>

                  <button
                    className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-rose-500 transition-colors"
                    title="علاقه‌مندی"
                  >
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
