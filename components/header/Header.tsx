'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { PHONE_NUMBER, STORE_NAME, CATEGORIES } from '@/lib/data';
import AuthModal from '@/components/auth/AuthModal';
import {
  Phone,
  Search,
  Store,
  User,
  LayoutGrid,
  Sun,
  Moon,
  Laptop,
  Globe,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ShieldAlert,
  Radio,
  SlidersHorizontal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const {
    lang,
    setLang,
    theme,
    setTheme,
    effectiveTheme,
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    setActiveCategory,
    t,
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [headerSearchQuery, setHeaderSearchQuery] = useState('');

  const categoryMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(event.target as Node)) {
        setIsCategoryMenuOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('shop'), href: '#shop' },
    { name: t('aboutUs'), href: '#about' },
    { name: t('contactUs'), href: '#contact' },
    { name: t('articles'), href: '#articles' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    setIsCategoryMenuOpen(false);
    // Smooth scroll to shop section
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-3 sm:top-4 z-40 w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP HEADER ROW (Matching header_desktop.png)                */}
      {/* ------------------------------------------------------------- */}
      <nav
        aria-label="منوی اصلی فروشگاه الفیفای"
        className="w-full relative z-30 bg-gradient-to-r from-white via-[#FAFBFD] to-[#DDE2FB]/60 dark:from-[#131722] dark:via-[#191D2B] dark:to-[#210B2C]/90 backdrop-blur-md rounded-full border border-[#D8D5DB]/80 dark:border-[#2D3142]/80 shadow-md shadow-black/5 dark:shadow-purple-950/20 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-3 lg:gap-8">
          {/* Logo Section (Left in RTL layout) */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2"
              title={STORE_NAME}
            >
              <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#210B2C] dark:text-[#E8E6F0] transition-colors group-hover:opacity-90">
                ELFify
              </span>
            </Link>
          </div>

          {/* Center Navigation Links (Hidden on small mobile) */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-sm font-semibold text-[#2D3142] dark:text-[#D8D5DB]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative py-1 px-1.5 hover:text-[#210B2C] dark:hover:text-white transition-colors group flex items-center"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#210B2C] dark:bg-[#ADACB5] rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Hotline & Quick Utility Toggles (Matching header_desktop.png) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Phone & Support Hours Container */}
            <div className="hidden sm:flex items-center gap-2.5 text-xs text-[#2D3142] dark:text-[#ADACB5] bg-white/70 dark:bg-[#210B2C]/40 px-3.5 py-1.5 rounded-full border border-[#D8D5DB]/60 dark:border-[#2D3142]/60 shadow-sm">
              <span className="font-medium text-[11px] text-[#657688] dark:text-[#ADACB5] whitespace-nowrap">
                {t('support247')}
              </span>
              <span className="text-[#ADACB5] dark:text-[#2D3142]">|</span>
              <a
                href="tel:09928681254"
                className="font-bold text-xs text-[#0C0F0A] dark:text-[#D8D5DB] tracking-wide hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 dir-ltr"
                dir="ltr"
              >
                <span>{PHONE_NUMBER}</span>
                <Phone className="w-3.5 h-3.5 text-[#2D3142] dark:text-[#ADACB5]" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="relative z-50" ref={langMenuRef}>
              <button
                onClick={() => {
                  setIsLangMenuOpen(!isLangMenuOpen);
                  setIsThemeMenuOpen(false);
                }}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB] text-xs font-bold transition-colors flex items-center gap-1"
                title="تغییر زبان / Language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold">{lang}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute left-0 rtl:left-0 ltr:right-0 mt-2 w-32 bg-white dark:bg-[#1A1E29] rounded-2xl shadow-2xl border border-[#D8D5DB] dark:border-[#2D3142] p-1.5 z-[100] overflow-hidden text-xs"
                  >
                    <button
                      onClick={() => {
                        setLang('fa');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-right transition-colors ${
                        lang === 'fa'
                          ? 'bg-[#DDE2FB] dark:bg-[#210B2C] text-[#210B2C] dark:text-white font-bold'
                          : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>فارسی (FA)</span>
                      {lang === 'fa' && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                    </button>
                    <button
                      onClick={() => {
                        setLang('en');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors ${
                        lang === 'en'
                          ? 'bg-[#DDE2FB] dark:bg-[#210B2C] text-[#210B2C] dark:text-white font-bold'
                          : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>English (EN)</span>
                      {lang === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle (Light / Dark / System Auto) */}
            <div className="relative z-50" ref={themeMenuRef}>
              <button
                onClick={() => {
                  setIsThemeMenuOpen(!isThemeMenuOpen);
                  setIsLangMenuOpen(false);
                }}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB] transition-colors"
                title="تغییر حالت تم / Theme Mode"
                aria-label="Theme mode toggle"
              >
                {theme === 'system' ? (
                  <Laptop className="w-4 h-4 text-[#657688] dark:text-[#ADACB5]" />
                ) : effectiveTheme === 'dark' ? (
                  <Moon className="w-4 h-4 text-purple-300" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
              </button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute left-0 rtl:left-0 ltr:right-0 mt-2 w-36 bg-white dark:bg-[#1A1E29] rounded-2xl shadow-2xl border border-[#D8D5DB] dark:border-[#2D3142] p-1.5 z-[100] overflow-hidden text-xs"
                  >
                    <button
                      onClick={() => {
                        setTheme('light');
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                        theme === 'light'
                          ? 'bg-[#DDE2FB] dark:bg-[#210B2C] text-[#210B2C] dark:text-white font-bold'
                          : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>{t('light')}</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme('dark');
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                        theme === 'dark'
                          ? 'bg-[#DDE2FB] dark:bg-[#210B2C] text-[#210B2C] dark:text-white font-bold'
                          : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5 text-purple-400" />
                      <span>{t('dark')}</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme('system');
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                        theme === 'system'
                          ? 'bg-[#DDE2FB] dark:bg-[#210B2C] text-[#210B2C] dark:text-white font-bold'
                          : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5 text-blue-500" />
                      <span>{t('system')}</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB]"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-3 pb-2 border-t border-[#D8D5DB]/40 dark:border-[#2D3142]/40 mt-3"
            >
              <ul className="flex flex-col gap-2 text-sm text-[#2D3142] dark:text-[#D8D5DB]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs px-3 text-[#657688]">
                  <span>{t('support247')}</span>
                  <a href="tel:09928681254" className="font-bold dir-ltr" dir="ltr">
                    {PHONE_NUMBER}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ------------------------------------------------------------- */}
      {/* 2. SECOND HEADER BAR (Matching Frame 7.png)                    */}
      {/* ------------------------------------------------------------- */}
      <div className="mt-2.5 sm:mt-3 w-full relative z-10 flex items-center justify-between gap-2 sm:gap-3">
        {/* Right Button (RTL): Category Selector (دسته بندی) */}
        <div className="relative shrink-0 z-20" ref={categoryMenuRef}>
          <button
            onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            className="h-11 sm:h-12 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-[#2D3142] hover:bg-[#210B2C] dark:bg-[#1E2330] dark:hover:bg-[#262C3D] text-white flex items-center gap-2 sm:gap-2.5 shadow-sm transition-all duration-200"
            title="انتخاب دسته‌بندی محصولات"
          >
            <LayoutGrid className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-tight">
              {lang === 'fa' ? 'دسته بندی' : 'Categories'}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${
                isCategoryMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Category Dropdown List */}
          <AnimatePresence>
            {isCategoryMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                className="absolute right-0 rtl:right-0 ltr:left-0 mt-2 w-56 sm:w-64 bg-white dark:bg-[#181C28] rounded-2xl shadow-2xl border border-[#D8D5DB] dark:border-[#2D3142] p-2 z-[90] overflow-hidden"
              >
                <div className="text-[11px] font-bold text-[#657688] dark:text-[#ADACB5] px-3 py-1.5 border-b border-slate-100 dark:border-slate-800">
                  {lang === 'fa' ? 'دسته‌بندی‌های دزدگیر و حفاظتی' : 'Security Categories'}
                </div>
                <div className="mt-1 space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className="w-full text-right rtl:text-right ltr:text-left px-3 py-2.5 rounded-xl text-xs font-bold text-[#2D3142] dark:text-[#D8D5DB] hover:bg-[#DDE2FB]/50 dark:hover:bg-[#210B2C]/60 hover:text-[#210B2C] dark:hover:text-white transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate">{lang === 'fa' ? cat.name : cat.nameEn}</span>
                      <span className="text-[10px] text-[#657688] opacity-0 group-hover:opacity-100 transition-opacity">
                        ←
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center: Wide Search Input (Matching Platinum Bar in Frame 7.png) */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex-1 relative flex items-center h-11 sm:h-12 bg-[#D8D5DB] dark:bg-[#222736] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#2D3142] dark:focus-within:ring-indigo-500/60"
        >
          {/* Search Icon on Right (RTL) */}
          <Search
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#2D3142] dark:text-[#ADACB5] shrink-0 ml-2.5 rtl:ml-2.5 ltr:mr-2.5 pointer-events-none"
          />

          <input
            type="text"
            value={headerSearchQuery}
            onChange={(e) => setHeaderSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            placeholder={
              lang === 'fa'
                ? '...هرچیزی که میخواهید جستجو کنید'
                : 'Search anything you want...'
            }
            className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#0C0F0A] dark:text-[#EAE8F0] placeholder-[#657688] dark:placeholder-[#8C93A4] focus:outline-none"
          />

          {/* Quick trigger search modal shortcut indicator on desktop */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="hidden lg:flex items-center text-[10px] font-bold text-[#657688] dark:text-[#ADACB5] bg-white/60 dark:bg-black/30 px-2 py-0.5 rounded-md border border-[#ADACB5]/40"
          >
            ⌘K
          </button>
        </form>

        {/* Left Elements (RTL): Store Cart Button + Register/Profile Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Store / Shop Icon Button (Gunmetal square) */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative h-11 sm:h-12 w-11 sm:w-12 rounded-xl sm:rounded-2xl bg-[#2D3142] hover:bg-[#210B2C] dark:bg-[#1E2330] dark:hover:bg-[#262C3D] flex items-center justify-center text-[#FBE3DD] dark:text-white shadow-sm transition-transform active:scale-95"
            title="مشاهده سبد خرید و فروشگاه"
            aria-label="Open Store Cart"
          >
            <Store className="w-5 h-5 text-[#FBE3DD] dark:text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow-md animate-bounce">
                {lang === 'fa' ? cartCount.toLocaleString('fa-IR') : cartCount}
              </span>
            )}
          </button>

          {/* Register / Sign In Button (Pill with User Badge & Border) */}
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="h-11 sm:h-12 px-3 sm:px-4 rounded-xl sm:rounded-2xl border border-[#2D3142] dark:border-[#ADACB5]/60 hover:bg-[#2D3142]/5 dark:hover:bg-white/5 flex items-center gap-2 transition-all duration-200"
            title="ورود یا ثبت‌نام کاربر"
          >
            {/* User Icon Badge */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#D8D5DB] dark:bg-[#2D3142] flex items-center justify-center text-[#2D3142] dark:text-white shrink-0">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#2D3142] dark:text-[#D8D5DB] whitespace-nowrap">
              {lang === 'fa' ? 'ثبت نام' : 'Sign In'}
            </span>
          </button>
        </div>
      </div>

      {/* User Registration & Login Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}
