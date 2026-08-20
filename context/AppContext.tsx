'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, Product, CartItem } from '@/types';
import { PRODUCTS } from '@/lib/data';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark';
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isContactOpen: boolean;
  setIsContactOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  t: (key: string) => string;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const translations: Record<Language, Record<string, string>> = {
  fa: {
    home: 'خانه',
    shop: 'فروشگاه',
    aboutUs: 'درباره ما',
    contactUs: 'تماس با ما',
    articles: 'مقالات',
    support247: 'هر روز هفته 24 ساعته',
    phoneNumber: '+98 992 868 1254',
    searchPlaceholder: 'جستجوی دزدگیر، چشمی، سنسور وزنی، رله IOT...',
    search: 'جستجو',
    cart: 'سبد خرید',
    emptyCart: 'سبد خرید شما خالی است',
    checkout: 'تکمیل سفارش و تسویه حساب',
    total: 'مبلغ کل قابل پرداخت',
    toman: 'تومان',
    freeShipping: 'ارسال رایگان',
    addToCart: 'افزودن به سبد خرید',
    addedToCart: 'به سبد خرید اضافه شد',
    viewDetails: 'مشاهده مشخصات فنی',
    specs: 'مشخصات فنی',
    features: 'ویژگی‌های کلیدی',
    reviews: 'دیدگاه‌های خریداران',
    faqTitle: 'پرسش‌های متداول',
    warranty: 'گارانتی و اصالت',
    warrantyDesc: '۳۶ ماه ضمانت طلایی تعویض الفیفای + ۱۰ سال خدمات',
    guaranteeOriginal: 'ضمانت ۱۰۰٪ اصالت کالا',
    inStock: 'موجود در انبار',
    outOfStock: 'ناموجود',
    quantity: 'تعداد',
    remove: 'حذف',
    allCategories: 'همه دسته‌ها',
    filterByBrand: 'فیلتر بر اساس برند',
    quickView: 'نمایش سریع',
    close: 'بستن',
    light: 'روشن',
    dark: 'تاریک',
    system: 'خودکار سیستم',
    readMore: 'مطالعه مقاله',
    off: 'تخفیف',
    simulatorTitle: 'شبیه‌ساز هوشمند دزدگیر و زون‌های IoT',
    simulatorDesc: 'تست عملکرد زون‌ها، تشخیص حرکت چشمی و پیامک هشدار',
    armSystem: 'فعال‌سازی سیستم (مسلح)',
    disarmSystem: 'غیرفعال‌سازی (خاموش)',
    zone1: 'زون ۱: سالن اصلی',
    zone2: 'زون ۲: ورودی درب',
    zone3: 'زون ۳: انبار و گاوصندوق',
    zone4: 'زون ۴: محوطه بیرونی',
    triggerZone: 'تحریک سنسور زون',
    normalState: 'وضعیت عادی',
    alarmTriggered: 'هشدار امنیتی فعال شد!',
    smsReceived: 'پیامک هشدار به شماره مدیر ارسال شد.',
  },
  en: {
    home: 'Home',
    shop: 'Shop',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    articles: 'Articles',
    support247: '24/7 Every Day',
    phoneNumber: '+98 992 868 1254',
    searchPlaceholder: 'Search GSM alarms, PIR sensors, IoT relays...',
    search: 'Search',
    cart: 'Cart',
    emptyCart: 'Your cart is empty',
    checkout: 'Proceed to Checkout',
    total: 'Total Price',
    toman: 'Toman',
    freeShipping: 'Free Delivery',
    addToCart: 'Add to Cart',
    addedToCart: 'Added to Cart',
    viewDetails: 'Technical Specs',
    specs: 'Specifications',
    features: 'Key Features',
    reviews: 'Customer Reviews',
    faqTitle: 'Frequently Asked Questions',
    warranty: 'Warranty & Authenticity',
    warrantyDesc: '36 Months Official ELFify Replacement + 10Y Support',
    guaranteeOriginal: '100% Original Guarantee',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    quantity: 'Quantity',
    remove: 'Remove',
    allCategories: 'All Categories',
    filterByBrand: 'Filter by Brand',
    quickView: 'Quick View',
    close: 'Close',
    light: 'Light',
    dark: 'Dark',
    system: 'System Auto',
    readMore: 'Read Article',
    off: 'OFF',
    simulatorTitle: 'Smart IoT Alarm & Zone Simulator',
    simulatorDesc: 'Simulate zone triggers, motion detection, and SMS alerts',
    armSystem: 'Arm System',
    disarmSystem: 'Disarm System',
    zone1: 'Zone 1: Living Hall',
    zone2: 'Zone 2: Front Door',
    zone3: 'Zone 3: Vault / Safe',
    zone4: 'Zone 4: Outer Yard',
    triggerZone: 'Trigger Zone Sensor',
    normalState: 'Normal / Secured',
    alarmTriggered: 'Security Alarm Triggered!',
    smsReceived: 'Alert SMS sent to admin mobile number.',
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('fa');
  const [theme, setThemeState] = useState<Theme>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('elfify_cart');
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Sync saved language attributes on client mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('elfify_lang') as Language;
      if (savedLang === 'fa' || savedLang === 'en') {
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === 'fa' ? 'rtl' : 'ltr';
      }
    } catch {
      // localStorage not accessible
    }
  }, []);

  // Sync theme with system and html element
  useEffect(() => {
    const updateTheme = () => {
      let isDark = false;
      if (theme === 'dark') {
        isDark = true;
      } else if (theme === 'light') {
        isDark = false;
      } else {
        // System preference
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      setEffectiveTheme(isDark ? 'dark' : 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    updateTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);

  // Set Language with HTML dir and lang attributes
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('elfify_lang', newLang);
    } catch {}
    document.documentElement.setAttribute('lang', newLang);
    document.documentElement.setAttribute('dir', newLang === 'fa' ? 'rtl' : 'ltr');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('elfify_theme', newTheme);
    } catch {}
  };

  // Cart operations
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      let updated: CartItem[];
      if (existing) {
        updated = prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updated = [...prev, { product, quantity }];
      }
      try {
        localStorage.setItem('elfify_cart', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.product.id !== productId);
      try {
        localStorage.setItem('elfify_cart', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      try {
        localStorage.setItem('elfify_cart', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
    try {
      localStorage.removeItem('elfify_cart');
    } catch {}
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        theme,
        setTheme,
        effectiveTheme,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isContactOpen,
        setIsContactOpen,
        quickViewProduct,
        setQuickViewProduct,
        t,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
