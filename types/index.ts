export type Language = 'fa' | 'en';
export type Theme = 'light' | 'dark' | 'system';

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  inStock: boolean;
  stockCount: number;
  sku: string;
  gtin?: string;
  brand: string;
  ratingValue: number;
  reviewCount: number;
  shortDescription: string;
  shortDescriptionEn: string;
  description: string;
  descriptionEn: string;
  images: string[];
  features: string[];
  featuresEn: string[];
  specs: { [key: string]: string };
  specsEn: { [key: string]: string };
  isFeatured?: boolean;
  isNew?: boolean;
  hasFreeShipping?: boolean;
  packageType?: 'Lite' | 'Pro' | 'Plus' | 'Standard';
  faqs?: { question: string; answer: string }[];
  faqsEn?: { question: string; answer: string }[];
  wiringDiagram?: string;
  catalogPdf?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  iconName: string;
  itemCount: number;
  featuredImage: string;
  seoText?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  readTime: string;
  readTimeEn: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: 'general' | 'installation' | 'iot' | 'warranty';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}
