'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types';
import { useApp } from '@/context/AppContext';
import { CATEGORIES, PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';
import { Filter, Layers, CheckCircle } from 'lucide-react';

export default function ProductGrid() {
  const { lang, t, activeCategory, setActiveCategory } = useApp();
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const brands = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => set.add(p.brand));
    return Array.from(set);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }

    if (selectedBrand !== 'all') {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (onlyInStock) {
      result = result.filter((p) => p.inStock);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.ratingValue - a.ratingValue);
    }

    return result;
  }, [activeCategory, selectedBrand, onlyInStock, sortBy]);

  return (
    <section id="shop" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1.5 uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>{lang === 'fa' ? 'کاتالوگ تخصصی محصولات' : 'Security Equipment Catalog'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0C0F0A] dark:text-[#D8D5DB]">
            {lang === 'fa' ? 'خرید و استعلام قیمت انواع دزدگیر اماکن و سنسورها' : 'Explore Alarm Panels, Sensors & IoT Modules'}
          </h2>
        </div>

        {/* Sorting selector */}
        <div className="flex items-center gap-2 self-start md:self-auto text-xs">
          <span className="text-[#657688] dark:text-[#ADACB5] font-medium">مرتب‌سازی:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white dark:bg-[#1A1E29] border border-[#D8D5DB] dark:border-[#2D3142] rounded-xl px-3 py-2 text-xs font-semibold text-[#2D3142] dark:text-[#D8D5DB] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="featured">پیش‌فرض (منتخب)</option>
            <option value="price-asc">ارزان‌ترین</option>
            <option value="price-desc">گران‌ترین</option>
            <option value="rating">بالاترین امتیاز خریداران</option>
          </select>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none no-scrollbar">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shadow-sm ${
            activeCategory === 'all'
              ? 'bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] shadow-md'
              : 'bg-white dark:bg-[#1A1E29] text-[#2D3142] dark:text-[#ADACB5] border border-[#D8D5DB]/80 dark:border-[#2D3142] hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {t('allCategories')} ({PRODUCTS.length})
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shadow-sm ${
              activeCategory === cat.slug
                ? 'bg-[#210B2C] dark:bg-[#D8D5DB] text-white dark:text-[#0C0F0A] shadow-md'
                : 'bg-white dark:bg-[#1A1E29] text-[#2D3142] dark:text-[#ADACB5] border border-[#D8D5DB]/80 dark:border-[#2D3142] hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {lang === 'fa' ? cat.name : cat.nameEn}
          </button>
        ))}
      </div>

      {/* Secondary Brand Filter & In-Stock Switch */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/70 dark:bg-[#141722]/70 border border-[#D8D5DB]/60 dark:border-[#2D3142]/60 mb-8 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#657688] dark:text-[#ADACB5] font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            {t('filterByBrand')}:
          </span>
          <button
            onClick={() => setSelectedBrand('all')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
              selectedBrand === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            همه برندها
          </button>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedBrand === b
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                  : 'text-[#2D3142] dark:text-[#ADACB5] hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* In-Stock only toggle */}
        <label className="flex items-center gap-2 cursor-pointer select-none font-semibold text-[#2D3142] dark:text-[#D8D5DB]">
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(e) => setOnlyInStock(e.target.checked)}
            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
          />
          <span>فقط کالاهای موجود در انبار</span>
        </label>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-[#161A24] rounded-3xl border border-[#D8D5DB]/60 dark:border-[#2D3142] p-8">
          <p className="text-base font-semibold text-[#2D3142] dark:text-[#ADACB5]">
            هیچ محصولی مطابق با فیلترهای انتخابی شما یافت نشد.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSelectedBrand('all');
              setOnlyInStock(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
          >
            حذف فیلترها و مشاهده همه
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
