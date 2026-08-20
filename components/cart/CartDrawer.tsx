'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import TomanPrice from '@/components/ui/TomanPrice';
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    clearCart,
    lang,
    t,
  } = useApp();

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
        {/* Overlay dismiss */}
        <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

        <motion.div
          initial={{ x: lang === 'fa' ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: lang === 'fa' ? '-100%' : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-white dark:bg-[#161A24] h-full shadow-2xl flex flex-col justify-between z-10 border-r dark:border-slate-800"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#D8D5DB]/60 dark:border-[#2D3142]/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-bold text-base text-[#0C0F0A] dark:text-[#D8D5DB]">
                {t('cart')} ({lang === 'fa' ? cartCount.toLocaleString('fa-IR') : cartCount})
              </h3>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingCart className="w-12 h-12 text-[#ADACB5] mx-auto opacity-50" />
                <p className="text-sm font-semibold text-[#657688] dark:text-[#ADACB5]">
                  {t('emptyCart')}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
                >
                  مشاهده کاتالوگ دزدگیر اماکن
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const name = lang === 'fa' ? item.product.name : item.product.nameEn;
                return (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1E2230] border border-[#D8D5DB]/60 dark:border-[#2D3142] flex items-center gap-3"
                  >
                    <div className="relative w-16 h-16 rounded-xl bg-white dark:bg-[#161A24] p-1 shrink-0">
                      <Image
                        src={item.product.images[0] || '/example_product.webp'}
                        alt={name}
                        fill
                        className="object-contain p-1"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#0C0F0A] dark:text-[#D8D5DB] truncate mb-1">
                        {name}
                      </h4>
                      <TomanPrice price={item.product.price} size="sm" />

                      {/* Quantity Modifier */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#D8D5DB] dark:border-[#2D3142] rounded-lg bg-white dark:bg-[#161A24] px-1 py-0.5 text-xs">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:text-rose-500"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-bold">
                            {lang === 'fa' ? item.quantity.toLocaleString('fa-IR') : item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:text-emerald-500"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 text-slate-400 hover:text-rose-500 transition-colors mr-auto"
                          title="حذف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#D8D5DB]/60 dark:border-[#2D3142]/60 space-y-4 bg-slate-50/50 dark:bg-[#1A1E29]/50">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-[#657688] dark:text-[#ADACB5]">{t('total')}:</span>
                <TomanPrice price={cartTotal} size="lg" />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl">
                <Zap className="w-4 h-4 shrink-0" />
                <span>سفارش شما مشمول ارسال رایگان و بیمه اصالت کالا شد.</span>
              </div>

              <button
                onClick={() => {
                  alert(lang === 'fa' ? 'سفارش شما با موفقیت ثبت اولیه شد. کارشناسان الفیفای ظرف ۱۵ دقیقه جهت تأیید و ارسال با شما تماس می‌گیرند.' : 'Your order draft is recorded. Our team will contact you shortly.');
                  clearCart();
                  setIsCartOpen(false);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] font-bold text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{t('checkout')}</span>
                {lang === 'fa' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
