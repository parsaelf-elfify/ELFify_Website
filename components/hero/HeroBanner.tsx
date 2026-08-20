'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { PHONE_NUMBER } from '@/lib/data';
import {
  Shield,
  ShieldCheck,
  Zap,
  Wifi,
  Radio,
  PhoneCall,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Lock,
  Unlock,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroBanner() {
  const { lang, t, setIsContactOpen } = useApp();
  const [isArmed, setIsArmed] = useState(true);
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const [simulatedAlert, setSimulatedAlert] = useState<string | null>(null);

  const triggerTestZone = (zoneNum: number, zoneName: string) => {
    setActiveZone(zoneNum);
    if (isArmed) {
      setSimulatedAlert(`🚨 هشدار زون ${zoneNum} (${zoneName})! ارسال پیامک و تماس در ۱.۴ ثانیه`);
      setTimeout(() => {
        setSimulatedAlert(null);
        setActiveZone(null);
      }, 4000);
    } else {
      setSimulatedAlert(`ℹ️ سیستم غیرمسلح است؛ تردد در زون ${zoneNum} ثبت شد.`);
      setTimeout(() => {
        setSimulatedAlert(null);
        setActiveZone(null);
      }, 2500);
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-14 overflow-hidden">
      {/* Ambient background glow matching specified palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#DDE2FB]/40 via-[#FBE3DD]/20 to-transparent dark:from-[#210B2C]/30 dark:via-[#2D3142]/20 dark:to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Typography & SEO Heading Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Top Quality Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#1A1E29]/80 border border-[#D8D5DB] dark:border-[#2D3142] shadow-sm text-xs font-semibold text-[#2D3142] dark:text-[#ADACB5]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{lang === 'fa' ? 'نسل جدید سیستم‌های حفاظتی و اینترنت اشیاء (IoT)' : 'Next-Gen Smart Security & IoT Hubs'}</span>
            </div>

            {/* Single H1 on Homepage for SEO Priority */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C0F0A] dark:text-[#D8D5DB] leading-tight sm:leading-snug tracking-tight">
              {lang === 'fa' ? (
                <>
                  مرکز تخصصی فروش <span className="text-[#210B2C] dark:text-purple-300">دزدگیر اماکن</span> و تجهیزات حفاظتی و هوشمندسازی <span className="underline decoration-[#ADACB5] decoration-wavy decoration-2">ELFify</span>
                </>
              ) : (
                <>
                  Professional <span className="text-[#210B2C] dark:text-purple-300">Smart Alarm Systems</span> & IoT Security Solutions
                </>
              )}
            </h1>

            {/* Subheading & Core Keywords */}
            <p className="text-base sm:text-lg text-[#2D3142]/80 dark:text-[#ADACB5] leading-relaxed max-w-2xl">
              {lang === 'fa'
                ? 'مشاوره فنی، خرید و استعلام قیمت انواع پنل‌های دزدگیر سیم‌کارتی، چشمی‌های وزنی ضد حیوانات، سنسورهای بیسیم و رله‌های کنترل از راه دور هوشمند با ۳۶ ماه گارانتی تعویض و ارسال فوری به سراسر کشور.'
                : 'Direct supply of GSM cellular alarm hubs, pet-immune PIR sensors, smart IoT relays, and commercial grade security equipment with 36 months full replacement warranty.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#shop"
                className="px-6 py-3.5 rounded-full bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] font-bold text-sm sm:text-base hover:opacity-95 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>{lang === 'fa' ? 'مشاهده پکیج‌ها و محصولات' : 'Explore Security Products'}</span>
                {lang === 'fa' ? (
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </a>

              <button
                onClick={() => setIsContactOpen(true)}
                className="px-6 py-3.5 rounded-full bg-white dark:bg-[#1A1E29] text-[#2D3142] dark:text-[#D8D5DB] border border-[#D8D5DB] dark:border-[#2D3142] font-bold text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{lang === 'fa' ? 'مشاوره رایگان نصب و خرید' : 'Free Expert Consultation'}</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#D8D5DB]/50 dark:border-[#2D3142]/50 text-xs text-[#2D3142] dark:text-[#ADACB5]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="font-semibold">{lang === 'fa' ? '۳۶ ماه ضمانت تعویض' : '36M Warranty'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-semibold">{lang === 'fa' ? 'ارسال فوری سراسری' : 'Express Delivery'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-sky-500 shrink-0" />
                <span className="font-semibold">{lang === 'fa' ? 'پشتیبانی ۲۴ ساعته' : '24/7 Support'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-semibold">{lang === 'fa' ? 'شبکه نصابان مجرب' : 'Certified Techs'}</span>
              </div>
            </div>
          </div>

          {/* 3D Interactive Hero Panel Simulator Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-6 bg-gradient-to-br from-white via-[#F8F9FD] to-[#DDE2FB]/60 dark:from-[#181B26] dark:via-[#131620] dark:to-[#210B2C]/50 border border-[#D8D5DB] dark:border-[#2D3142] shadow-xl shadow-slate-200/50 dark:shadow-purple-950/20"
            >
              {/* Header of Device Simulator */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D5DB]/60 dark:border-[#2D3142]/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">
                      پنل مرکزی ioMax-Plus <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-black">Lite</span>
                    </h3>
                    <p className="text-[11px] text-[#657688] dark:text-[#ADACB5]">
                      شبیه‌ساز وضعیت زنده اینترنت اشیاء
                    </p>
                  </div>
                </div>

                {/* Arm / Disarm Toggle */}
                <button
                  onClick={() => setIsArmed(!isArmed)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                    isArmed
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-emerald-500 text-white hover:bg-emerald-600'
                  }`}
                >
                  {isArmed ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                  <span>{isArmed ? t('armSystem') : t('disarmSystem')}</span>
                </button>
              </div>

              {/* Status Signal & GSM Network Simulation */}
              <div className="py-4 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="p-2.5 rounded-2xl bg-white/70 dark:bg-[#1E2230]/70 border border-[#D8D5DB]/50 dark:border-[#2D3142]/50">
                  <span className="block text-[#657688] dark:text-[#ADACB5] text-[10px]">وضعیت برق</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                    <Zap className="w-3 h-3" /> ۲۲۰V وصل
                  </span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/70 dark:bg-[#1E2230]/70 border border-[#D8D5DB]/50 dark:border-[#2D3142]/50">
                  <span className="block text-[#657688] dark:text-[#ADACB5] text-[10px]">سیگنال سیم‌کارت</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400 flex items-center justify-center gap-1 mt-0.5">
                    <Radio className="w-3 h-3" /> ۴G پرقدرت
                  </span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/70 dark:bg-[#1E2230]/70 border border-[#D8D5DB]/50 dark:border-[#2D3142]/50">
                  <span className="block text-[#657688] dark:text-[#ADACB5] text-[10px]">باتری پشتیبان</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1 mt-0.5">
                    ۱۲.۶V (۱۰۰%)
                  </span>
                </div>
              </div>

              {/* Interactive Zone Buttons */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-semibold text-[#2D3142] dark:text-[#D8D5DB]">
                  <span>{lang === 'fa' ? 'تست سنسور زون‌ها (کلیک کنید):' : 'Click to Trigger Zone Sensor:'}</span>
                  <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">۴ زون هوشمند</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 1, name: 'سالن پذیرایی', en: 'Living Room', icon: Shield },
                    { id: 2, name: 'درب ورودی اصلی', en: 'Front Door', icon: Lock },
                    { id: 3, name: 'انبار / گاوصندوق', en: 'Safe / Storage', icon: Cpu },
                    { id: 4, name: 'حیاط و محوطه', en: 'Outer Perimeter', icon: Radio },
                  ].map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => triggerTestZone(zone.id, zone.name)}
                      className={`p-2.5 rounded-2xl border text-right transition-all duration-200 flex items-center justify-between text-xs ${
                        activeZone === zone.id
                          ? 'bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-400 font-bold scale-[1.02]'
                          : 'bg-white/80 dark:bg-[#1E2230]/80 border-[#D8D5DB]/80 dark:border-[#2D3142] text-[#2D3142] dark:text-[#D8D5DB] hover:border-indigo-400'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${activeZone === zone.id ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`} />
                        <span>زون {zone.id}: {zone.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Alert Notification Toast Box */}
              {simulatedAlert && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-3 p-3 rounded-2xl bg-[#210B2C] text-white text-xs font-semibold shadow-lg flex items-center justify-between border border-purple-800"
                >
                  <span>{simulatedAlert}</span>
                </motion.div>
              )}

              {/* Bottom Quick link */}
              <div className="mt-4 pt-3 border-t border-[#D8D5DB]/40 dark:border-[#2D3142]/40 flex items-center justify-between text-[11px] text-[#657688] dark:text-[#ADACB5]">
                <span>پروتکل رمزنگاری Hopping Code ۶۴ بیتی</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">Latency: &lt; 1.4s</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
