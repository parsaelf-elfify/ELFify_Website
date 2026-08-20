import React from 'react';
import { DOMAIN, STORE_NAME, PHONE_NUMBER, EMAIL, ADDRESS_FA, POSTAL_CODE } from '@/lib/data';

export default function OrganizationSchema() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: STORE_NAME,
    url: DOMAIN,
    logo: `${DOMAIN}/logo.svg`,
    image: `${DOMAIN}/example_product.webp`,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    priceRange: 'IRR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_FA,
      addressLocality: 'تهران',
      addressRegion: 'استان تهران',
      postalCode: POSTAL_CODE,
      addressCountry: 'IR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [
      'https://www.instagram.com/elfify_security',
      'https://t.me/elfify_security',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: STORE_NAME,
    url: DOMAIN,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${DOMAIN}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
