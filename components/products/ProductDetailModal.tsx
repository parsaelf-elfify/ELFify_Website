'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import TomanPrice from '@/components/ui/TomanPrice';
import ProductSchema from '@/components/seo/ProductSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { DOMAIN } from '@/lib/data';
import {
  X,
  ShoppingCart,
  Check,
  ShieldCheck,
  Zap,
  Star,
  Layers,
  FileText,
  HelpCircle,
  Package,
  Plus,
  Minus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductDetailModal() {
  const { quickViewProduct, setQuickViewProduct, lang, addToCart, t } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'faqs'>('specs');
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const displayName = lang === 'fa' ? product.name : product.nameEn;
  const displayDesc = lang === 'fa' ? product.description : product.descriptionEn;
  const displayFeatures = lang === 'fa' ? product.features : product.featuresEn;
  const displaySpecs = lang === 'fa' ? product.specs : product.specsEn;
  const displayFaqs = lang === 'fa' ? product.faqs : product.faqsEn;

  const breadcrumbItems = [
    { name: 'صفحه اصلی', url: DOMAIN },
    { name: 'فروشگاه دزدگیر اماکن', url: `${DOMAIN}/#shop` },
    { name: product.category, url: `${DOMAIN}/#shop` },
    { name: product.name, url: `${DOMAIN}/product/${product.slug}` },
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        {/* Dynamic SEO Schemas */}
        <ProductSchema
          id={product.id}
          name={product.name}
          description={product.shortDescription}
          image={product.images.map((img) => `${DOMAIN}${img}`)}
          sku={product.sku}
          gtin={product.gtin}
          brandName={product.brand}
          price={product.price}
          inStock={product.inStock}
          ratingValue={product.ratingValue}
          reviewCount={product.reviewCount}
          faqs={product.faqs}
          url={`${DOMAIN}/product/${product.slug}`}
        />
        <BreadcrumbSchema items={breadcrumbItems} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#161A24] rounded-3xl border border-[#D8D5DB] dark:border-[#2D3142] shadow-2xl p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
            aria-label="بستن پنجره"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            {/* Image Preview Column */}
            <div className="md:col-span-5 flex flex-col">
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[#F8F9FA] to-[#ECEEF8] dark:from-[#1C202E] dark:to-[#12151E] p-4 flex items-center justify-center border border-[#D8D5DB]/60 dark:border-[#2D3142]">
                <Image
                  src={product.images[0] || '/example_product.webp'}
                  alt={displayName}
                  fill
                  className="object-contain p-4 drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-[#2D3142] dark:text-[#ADACB5]">
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>۳۶ ماه ضمانت تعویض</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>ارسال سریع و رایگان</span>
                </div>
              </div>
            </div>

            {/* Info & Purchase Column */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-full">
                    {product.brand}
                  </span>
                  <span className="text-xs font-mono text-[#657688] dark:text-[#ADACB5] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    SKU: {product.sku}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 mr-auto">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.ratingValue}</span>
                    <span className="text-[#657688] font-normal text-[11px]">({product.reviewCount} نظر)</span>
                  </div>
                </div>

                {/* H1 Full Product Name */}
                <h1 className="text-xl sm:text-2xl font-black text-[#0C0F0A] dark:text-[#D8D5DB] leading-snug mb-3">
                  {displayName}
                </h1>

                {/* Price Section */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#DDE2FB]/30 via-transparent to-[#FBE3DD]/30 dark:from-[#210B2C]/40 dark:to-transparent border border-[#D8D5DB]/60 dark:border-[#2D3142] mb-4">
                  <TomanPrice
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discountPercent={product.discountPercent}
                    size="xl"
                  />
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#2D3142]/80 dark:text-[#ADACB5] leading-relaxed mb-4">
                  {displayDesc}
                </p>
              </div>

              {/* Quantity Stepper & Add to Cart */}
              <div className="pt-4 border-t border-[#D8D5DB]/60 dark:border-[#2D3142] flex items-center gap-3">
                <div className="flex items-center border border-[#D8D5DB] dark:border-[#2D3142] rounded-2xl p-1 bg-white dark:bg-[#1A1E29]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-[#0C0F0A] dark:text-[#D8D5DB]">
                    {lang === 'fa' ? quantity.toLocaleString('fa-IR') : quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2D3142] dark:text-[#D8D5DB]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-5 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] hover:opacity-90 active:scale-95'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>{t('addedToCart')}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>{t('addToCart')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section for Specs, Features, and FAQs */}
          <div className="mt-8 pt-6 border-t border-[#D8D5DB]/60 dark:border-[#2D3142]">
            <div className="flex items-center gap-2 border-b border-[#D8D5DB]/60 dark:border-[#2D3142] pb-3 mb-4 text-xs sm:text-sm font-bold">
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors ${
                  activeTab === 'specs'
                    ? 'bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A]'
                    : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>{t('specs')}</span>
              </button>

              <button
                onClick={() => setActiveTab('features')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors ${
                  activeTab === 'features'
                    ? 'bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A]'
                    : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{t('features')}</span>
              </button>

              {displayFaqs && displayFaqs.length > 0 && (
                <button
                  onClick={() => setActiveTab('faqs')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors ${
                    activeTab === 'faqs'
                      ? 'bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A]'
                      : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{t('faqTitle')}</span>
                </button>
              )}
            </div>

            {/* Tab Contents */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(displaySpecs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    <span className="text-[#657688] dark:text-[#ADACB5] font-medium">{key}:</span>
                    <span className="text-[#0C0F0A] dark:text-[#D8D5DB] font-bold">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="space-y-2 text-xs sm:text-sm text-[#2D3142] dark:text-[#D8D5DB]">
                {displayFeatures.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'faqs' && displayFaqs && (
              <div className="space-y-3">
                {displayFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs"
                  >
                    <h4 className="font-bold text-[#0C0F0A] dark:text-[#D8D5DB] mb-1">
                      {faq.question}
                    </h4>
                    <p className="text-[#657688] dark:text-[#ADACB5] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
