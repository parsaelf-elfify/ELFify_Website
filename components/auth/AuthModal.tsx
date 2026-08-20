'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { User, Phone, Lock, X, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { lang } = useApp();
  const [step, setStep] = useState<'login' | 'otp' | 'success'>('login');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('otp');
    }, 600);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 700);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const newOtp = [...otpCode];
    newOtp[index] = val;
    setOtpCode(newOtp);

    // Auto focus next input
    if (val && index < 4) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-white dark:bg-[#161A24] rounded-3xl border border-[#D8D5DB] dark:border-[#2D3142] shadow-2xl p-6 sm:p-8 overflow-hidden text-[#0C0F0A] dark:text-[#D8D5DB]"
        >
          {/* Header decorative background */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#210B2C] via-[#657688] to-[#DDE2FB]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 sm:top-5 sm:left-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-[#657688] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'login' && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#DDE2FB]/60 dark:bg-[#210B2C] flex items-center justify-center text-[#210B2C] dark:text-white border border-[#D8D5DB] dark:border-[#2D3142]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0C0F0A] dark:text-white">
                    {lang === 'fa' ? 'ورود یا ثبت‌نام در الفیفای' : 'Sign In or Register'}
                  </h3>
                  <p className="text-xs text-[#657688] dark:text-[#ADACB5] mt-0.5">
                    {lang === 'fa'
                      ? 'جهت پیگیری سفارشات و دسترسی به پنل کاربری'
                      : 'Track orders and access your security dashboard'}
                  </p>
                </div>
              </div>

              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2D3142] dark:text-[#D8D5DB] mb-1.5">
                    {lang === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={lang === 'fa' ? 'مثلاً: علی رضایی' : 'e.g. Ali Rezaei'}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-sm text-[#0C0F0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#210B2C] dark:focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3142] dark:text-[#D8D5DB] mb-1.5">
                    {lang === 'fa' ? 'شماره موبایل' : 'Mobile Number'}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="09123456789"
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-sm text-[#0C0F0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#210B2C] dark:focus:ring-indigo-500 tracking-wider text-left"
                    />
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#657688] pointer-events-none" />
                  </div>
                  <span className="text-[11px] text-[#657688] mt-1 block">
                    {lang === 'fa' ? 'کد تایید پیامکی به این شماره ارسال خواهد شد.' : 'A verification code will be sent via SMS.'}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#210B2C] hover:bg-[#2D3142] dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0C0F0A] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{lang === 'fa' ? 'دریافت کد ورود' : 'Send Verification Code'}</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t border-[#D8D5DB]/50 dark:border-[#2D3142] flex items-center justify-between text-xs text-[#657688]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  {lang === 'fa' ? 'امنیت و حفظ حریم خصوصی' : '100% Secure & Private'}
                </span>
                <span>ELFify Security</span>
              </div>
            </div>
          )}

          {step === 'otp' && (
            <div>
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#DDE2FB]/60 dark:bg-[#210B2C] flex items-center justify-center text-[#210B2C] dark:text-white border border-[#D8D5DB] dark:border-[#2D3142] mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0C0F0A] dark:text-white">
                  {lang === 'fa' ? 'کد تایید پیامک شد' : 'Enter Verification Code'}
                </h3>
                <p className="text-xs text-[#657688] dark:text-[#ADACB5] mt-1" dir="ltr">
                  {lang === 'fa' ? `کد ارسال‌شده به شماره ${phoneNumber} را وارد کنید:` : `Sent to ${phoneNumber}`}
                </p>
              </div>

              <form onSubmit={handleOtpSubmit} className="space-y-5">
                <div className="flex items-center justify-center gap-2.5 dir-ltr" dir="ltr">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <input
                      key={i}
                      id={`otp-input-${i}`}
                      type="text"
                      maxLength={1}
                      value={otpCode[i]}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-12 h-12 text-center text-lg font-black rounded-2xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB] dark:border-[#2D3142] text-[#0C0F0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#210B2C]"
                    />
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#210B2C] hover:bg-[#2D3142] dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0C0F0A] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>{lang === 'fa' ? 'تایید و ورود به حساب' : 'Verify & Continue'}</span>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setStep('login')}
                    className="text-xs text-[#657688] hover:text-[#210B2C] dark:hover:text-white underline"
                  >
                    {lang === 'fa' ? 'ویرایش شماره موبایل' : 'Edit Mobile Number'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-[#0C0F0A] dark:text-white">
                {lang === 'fa' ? `خوش آمدید، ${fullName || 'کاربر گرامی'}!` : `Welcome, ${fullName || 'User'}!`}
              </h3>
              <p className="text-xs text-[#657688] dark:text-[#ADACB5] mt-2 leading-relaxed">
                {lang === 'fa'
                  ? 'حساب کاربری شما در الفیفای با موفقیت فعال گردید. اکنون می‌توانید سفارشات و وضعیت دستگاه‌های خود را مدیریت کنید.'
                  : 'Your ELFify security account has been activated successfully.'}
              </p>
              <div className="mt-6">
                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-2xl bg-[#210B2C] text-white font-bold text-sm shadow hover:bg-[#2D3142] transition-colors"
                >
                  {lang === 'fa' ? 'مشاهده و ادامه خرید' : 'Continue Shopping'}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
