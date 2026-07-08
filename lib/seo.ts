import { Metadata } from 'next';

const defaultUrl = process.env.APP_URL || 'http://localhost:3000';
// Ensure the URL has a protocol
const baseUrl = defaultUrl.startsWith('http') ? defaultUrl : `https://${defaultUrl}`;

export function constructMetadata({
  title = "BKP Developers | Innovate. Develop. Deliver.",
  description = "BKP Developers is a premium software development company delivering innovative, reliable and high-quality digital solutions. We transform ideas into powerful digital products.",
  image = "/images/seo-banner.webp",
  icons = "/favicon.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-commerce Solutions",
      "AI Solutions",
      "BKP Developers",
      "Software Company India"
    ],
    authors: [{ name: "BKP Developers" }],
    creator: "BKP Developers",
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      title,
      description,
      siteName: "BKP Developers",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@bkpdevelopers",
    },
    icons,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
