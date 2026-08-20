'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  ShieldAlert,
  ShieldCheck,
  Radio,
  Lock,
  Unlock,
  Smartphone,
  Lightbulb,
  Power,
  Volume2,
  VolumeX,
  BellRing,
  AlertTriangle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ZoneState {
  id: number;
  name: string;
  nameEn: string;
  isTriggered: boolean;
  type: 'Wired' | 'Wireless';
}

export default function AlarmSystemSimulator() {
  const { lang, t } = useApp();
  const [isArmed, setIsArmed] = useState(true);
  const [isSirenMuted, setIsSirenMuted] = useState(false);
  const [relayLight, setRelayLight] = useState(false);
  const [relayPump, setRelayPump] = useState(false);
  const [smsLogs, setSmsLogs] = useState<string[]>([
    'سیستم امنیتی ELFify در حالت آماده‌باش (مسلح) قرار گرفت.',
  ]);

  const [zones, setZones] = useState<ZoneState[]>([
    { id: 1, name: 'زون ۱: چشمی وزنی سالن پذیرایی', nameEn: 'Zone 1: Living Hall PIR', isTriggered: false, type: 'Wired' },
    { id: 2, name: 'زون ۲: مگنت بیسیم درب ورودی', nameEn: 'Zone 2: Wireless Front Door', isTriggered: false, type: 'Wireless' },
    { id: 3, name: 'زون ۳: سنسور لرزشی گاوصندوق', nameEn: 'Zone 3: Vault Vibration', isTriggered: false, type: 'Wired' },
    { id: 4, name: 'زون ۴: دتکتور دود و حرارت', nameEn: 'Zone 4: Smoke & Heat', isTriggered: false, type: 'Wired' },
  ]);

  const triggerZone = (zoneId: number) => {
    setZones((prev) =>
      prev.map((z) => (z.id === zoneId ? { ...z, isTriggered: true } : z))
    );

    const targetZone = zones.find((z) => z.id === zoneId);
    const zoneName = targetZone ? targetZone.name : `زون ${zoneId}`;

    if (isArmed) {
      const now = new Date().toLocaleTimeString('fa-IR');
      const newMsg = `🚨 [${now}] هشدار! ${zoneName} تحریک شد. تماس صوتی برقرار گردید.`;
      setSmsLogs((prev) => [newMsg, ...prev.slice(0, 4)]);
    } else {
      const now = new Date().toLocaleTimeString('fa-IR');
      const newMsg = `ℹ️ [${now}] تردد در ${zoneName} ثبت شد (سیستم خاموش است).`;
      setSmsLogs((prev) => [newMsg, ...prev.slice(0, 4)]);
    }
  };

  const resetAllZones = () => {
    setZones((prev) => prev.map((z) => ({ ...z, isTriggered: false })));
  };

  const anyTriggered = zones.some((z) => z.isTriggered);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FD] to-[#DDE2FB]/40 dark:from-[#141722] dark:via-[#181C28] dark:to-[#210B2C]/50 border border-[#D8D5DB] dark:border-[#2D3142] shadow-xl">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D8D5DB]/60 dark:border-[#2D3142]/60">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{t('simulatorTitle')}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0F0A] dark:text-[#D8D5DB]">
              {lang === 'fa'
                ? 'شبیه‌ساز تعاملی عملکرد دزدگیر و سناریوهای اینترنت اشیاء (IoT)'
                : 'Interactive IoT Alarm Zone & SMS Simulator'}
            </h2>
          </div>

          {/* Master Arm Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsArmed(!isArmed);
                if (isArmed) resetAllZones();
              }}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all ${
                isArmed
                  ? 'bg-rose-500 hover:bg-rose-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isArmed ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
              <span>{isArmed ? t('armSystem') : t('disarmSystem')}</span>
            </button>

            <button
              onClick={resetAllZones}
              className="p-2.5 rounded-full bg-white dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-[#2D3142] dark:text-[#D8D5DB] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="بازنشانی زون‌ها"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Grid of Zones and Mobile Notification Phone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          
          {/* 4 Zones Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold text-[#0C0F0A] dark:text-[#D8D5DB] flex items-center justify-between">
              <span>{lang === 'fa' ? 'نقشه زون‌های حفاظتی (روی هر زون کلیک کنید):' : 'Zone Matrix (Click to test):'}</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                isArmed && anyTriggered
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
              }`}>
                {isArmed && anyTriggered ? '🚨 آژیر فعال شد' : '🛡️ مدار امن'}
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => triggerZone(zone.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 select-none ${
                    zone.isTriggered
                      ? 'bg-rose-500/10 border-rose-500 dark:bg-rose-950/30'
                      : 'bg-white dark:bg-[#1A1E29] border-[#D8D5DB]/80 dark:border-[#2D3142] hover:border-indigo-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#657688] dark:text-[#ADACB5]">
                      {zone.type === 'Wired' ? 'سیمی (Wired)' : 'بیسیم (433MHz)'}
                    </span>
                    <span
                      className={`w-3 h-3 rounded-full ${
                        zone.isTriggered
                          ? 'bg-rose-500 animate-ping'
                          : 'bg-emerald-500'
                      }`}
                    />
                  </div>

                  <h4 className="font-bold text-sm text-[#0C0F0A] dark:text-[#D8D5DB] mb-2">
                    {lang === 'fa' ? zone.name : zone.nameEn}
                  </h4>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerZone(zone.id);
                    }}
                    className={`w-full py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      zone.isTriggered
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB] hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                  >
                    {zone.isTriggered ? 'سنسور تحریک شده' : 'تحریک سنسور زون'}
                  </button>
                </div>
              ))}
            </div>

            {/* Smart IoT Relays Controls */}
            <div className="pt-4 border-t border-[#D8D5DB]/60 dark:border-[#2D3142]/60">
              <h4 className="text-xs font-bold text-[#657688] dark:text-[#ADACB5] mb-2">
                کنترل رله‌های خروجی هوشمند (IoT Automation):
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setRelayLight(!relayLight)}
                  className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                    relayLight
                      ? 'bg-amber-400/20 border-amber-400 text-amber-900 dark:text-amber-300'
                      : 'bg-white dark:bg-[#1A1E29] border-[#D8D5DB]/70 dark:border-[#2D3142] text-[#2D3142] dark:text-[#D8D5DB]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className={`w-4 h-4 ${relayLight ? 'text-amber-500' : 'text-slate-400'}`} />
                    <span>رله ۱: روشنایی محوطه</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    {relayLight ? 'روشن (ON)' : 'خاموش (OFF)'}
                  </span>
                </button>

                <button
                  onClick={() => setRelayPump(!relayPump)}
                  className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                    relayPump
                      ? 'bg-sky-400/20 border-sky-400 text-sky-900 dark:text-sky-300'
                      : 'bg-white dark:bg-[#1A1E29] border-[#D8D5DB]/70 dark:border-[#2D3142] text-[#2D3142] dark:text-[#D8D5DB]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Power className={`w-4 h-4 ${relayPump ? 'text-sky-500' : 'text-slate-400'}`} />
                    <span>رله ۲: پمپ آب ویلا</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    {relayPump ? 'فعال (ON)' : 'خاموش (OFF)'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Virtual Mobile Screen Receiving SMS */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-3xl bg-[#0C0F0A] text-white p-5 border-4 border-[#2D3142] shadow-2xl flex flex-col justify-between">
              {/* Virtual Phone Header */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-slate-200">پیامک‌های دریافتی دزدگیر</span>
                  </div>
                  <span className="font-mono text-[10px]">SIM: همراه اول ۴G</span>
                </div>

                {/* SMS Message Stream */}
                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {smsLogs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs leading-relaxed"
                    >
                      <div className="flex items-center justify-between text-[10px] text-indigo-400 font-mono mb-1">
                        <span>فرستنده: ELFify ioMax Hub</span>
                        <span>وضعیت: تحویل شده</span>
                      </div>
                      <p className="text-slate-200">{log}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Test Tip */}
              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>تأخیر ارسال پیامک سیم‌کارتی:</span>
                <span className="font-mono text-emerald-400 font-bold">۱.۲ ثانیه</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
