import React from 'react';

export interface ProductSchemaProps {
  id: string;
  name: string;
  description: string;
  image: string[];
  sku: string;
  gtin?: string;
  brandName: string;
  price: number;
  currency?: string; // e.g. "IRR" or "IRT"
  inStock: boolean;
  ratingValue?: number;
  reviewCount?: number;
  faqs?: { question: string; answer: string }[];
  url: string;
}

export default function ProductSchema({
  name,
  description,
  image,
  sku,
  gtin,
  brandName,
  price,
  currency = 'IRR',
  inStock,
  ratingValue = 4.8,
  reviewCount = 12,
  faqs,
  url,
}: ProductSchemaProps) {
  // Main Product JSON-LD
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    image: image,
    description: description,
    sku: sku,
    gtin13: gtin || undefined,
    brand: {
      '@type': 'Brand',
      name: brandName,
    },
    offers: {
      '@type': 'Offer',
      url: url,
      priceCurrency: currency,
      price: price,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'فروشگاه تخصصی دزدگیر اماکن و تجهیزات هوشمند ELFify',
      },
    },
    aggregateRating:
      ratingValue && reviewCount
        ? {
            '@type': 'AggregateRating',
            ratingValue: ratingValue,
            reviewCount: reviewCount,
            bestRating: '5',
            worstRating: '1',
          }
        : undefined,
  };

  // FAQ schema for product FAQs
  const faqJsonLd =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
