import type { Metadata } from 'next';

import { env } from '@/env.mjs';

/**
 * Template metadata for app links
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 * @returns {Metadata}
 */

export default async function meta(): Promise<Metadata> {
  const host = env.NEXT_PUBLIC_APP_URL;

  // Template metadata for open graph
  const openGraph = {
    title: 'Bala - Portfolio - Visual Studio Code',
    description: "Bala's portfolio themed to mimic Visual Studio Code's appearance",
    url: 'https://bala.dev/',
    siteName: 'balasubramaniantbr',
    images: [
      {
        url: `${host}/images/og.png`,
        width: 1200,
        height: 600,
        alt: 'Bala',
      },
    ],
    locale: 'en-US',
    type: 'website',
  };

  // Template metadata for robot.txt
  const robots = {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  };

  // Template metadata for Twitter
  const twitter = {
    card: 'summary_large_image',
    title: "Bala's Portfolio",
    description: "Bala's Portfolio themed to mimic Visual Studio Code's appearance",
    siteId: '123456789',
    creator: '@username',
    creatorId: '123456789',
    images: [`${host}/images/og.png`],
  };

  // Template metadata for language alternates
  const alternates = {
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'nl-NL': '/-NL',
      },
    },
    media: {
      'only screen and (max-width: 600px)': 'https://bala.dev/',
    },
  };

  return {
    metadataBase: new URL(host),
    title: "Bala's Portfolio",
    description: "Bala's Portfolio themed to mimic Visual Studio Code's appearance",
    generator: 'Next.js',
    applicationName: 'BalaPortfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Portfolio','Balasubramanian','TBR','TBR Balasubramanian','Balasubramanian TBR','Visual Studio Code', 'Next.js', 'React', 'JavaScript'],
    authors: [
      {
        name: 'Bala',
        url: 'https://bala.dev',
      },
    ],
    themeColor: 'black',
    colorScheme: 'dark',
    creator: 'TBR Balasubramanian',
    publisher: 'TBR Balasubramanian',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      custom: 'meta',
    },
    openGraph,
    robots,
    twitter,
    alternates,
  };
}
