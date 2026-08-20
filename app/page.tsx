import React from 'react';
import Header from '@/components/header/Header';
import HeroBanner from '@/components/hero/HeroBanner';
import CategoryShowcase from '@/components/sections/CategoryShowcase';
import AlarmSystemSimulator from '@/components/interactive/AlarmSystemSimulator';
import ProductGrid from '@/components/products/ProductGrid';
import BlogSection from '@/components/sections/BlogSection';
import SeoContentBlock from '@/components/sections/SeoContentBlock';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/footer/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchModal from '@/components/search/SearchModal';
import ContactModal from '@/components/contact/ContactModal';
import ProductDetailModal from '@/components/products/ProductDetailModal';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header matching header_desktop.png */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroBanner />
        <CategoryShowcase />
        <AlarmSystemSimulator />
        <ProductGrid />
        <BlogSection />
        <SeoContentBlock />
        <FaqSection />
      </main>

      {/* Footer with NAP and Organization Schema */}
      <Footer />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <SearchModal />
      <ContactModal />
      <ProductDetailModal />
    </div>
  );
}
