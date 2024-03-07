import { DefaultSeo } from 'next-seo';
import '../styles/global.css';
import React from 'react';

export default function App({ Component, pageProps }) {
  const defaultConfig = {
    additionalLinkTags: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    openGraph: {
      type: 'website',
      locale: 'vi_VN',
      images: [
        {
          url: '/favicon',
          width: 800,
          height: 600,
          alt: 'favicon',
        },
      ],
    },
  };

  return (
    <>
      <DefaultSeo {...defaultConfig} />
      <Component {...pageProps} />
    </>
  );
}
