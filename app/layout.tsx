import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemstone Identifier - AI-Powered Gemstone Recognition App",
  description:
    "Identify, catalog, and learn about gemstones with AI-powered recognition. Get instant identification, value estimates, and detailed information about your precious stones. Download now for free!",
  keywords: [
    "gemstone identifier",
    "gemstone recognition",
    "AI gemstone identification",
    "gemstone app",
    "jewelry identification",
    "precious stones",
    "gemstone catalog",
    "gemstone value",
    "diamond identification",
    "sapphire recognition",
    "ruby identification",
    "emerald recognition",
    "gemstone collection",
    "jewelry app",
    "gemstone database",
    "gemstone scanner",
    "gemstone analyzer",
    "precious stone identifier",
    "gemstone expert",
    "jewelry valuation",
  ],
  authors: [{ name: "Gemstone Identifier Team" }],
  creator: "Gemstone Identifier",
  publisher: "Gemstone Identifier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gemstone-identifier.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gemstone Identifier - AI-Powered Gemstone Recognition",
    description:
      "Identify, catalog, and learn about gemstones with AI-powered recognition. Get instant identification, value estimates, and detailed information about your precious stones. Download now for free!",
    url: "https://gemstone-identifier.com",
    siteName: "Gemstone Identifier",
    images: [
      {
        url: "/social-preview-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Gemstone Identifier - AI-Powered Gemstone Recognition App",
        type: "image/png",
      },
      {
        url: "/social-preview-600x315.png",
        width: 600,
        height: 315,
        alt: "Gemstone Identifier - AI-Powered Gemstone Recognition App",
        type: "image/png",
      },
      {
        url: "/social-preview-1200x1200.png",
        width: 1200,
        height: 1200,
        alt: "Gemstone Identifier - AI-Powered Gemstone Recognition App",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemstone Identifier - AI-Powered Gemstone Recognition",
    description:
      "Identify, catalog, and learn about gemstones with AI-powered recognition. Get instant identification, value estimates, and detailed information about your precious stones. Download now for free!",
    images: [
      {
        url: "/social-preview-1200x630.png",
        alt: "Gemstone Identifier - AI-Powered Gemstone Recognition App",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@gemstoneidentifier",
    site: "@gemstoneidentifier",
  },
  other: {
    "twitter:image:alt":
      "Gemstone Identifier - AI-Powered Gemstone Recognition App",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:secure_url":
      "https://gemstone-identifier.com/social-preview-1200x630.png",
    "og:video": "https://gemstone-identifier.com/app-preview.mp4",
    "og:video:width": "1200",
    "og:video:height": "630",
    "og:video:type": "video/mp4",
    "og:video:secure_url": "https://gemstone-identifier.com/app-preview.mp4",
    "og:video:duration": "30",
    "og:video:tag": "gemstone, identification, AI, app, jewelry",
    "og:audio": "https://gemstone-identifier.com/app-audio.mp3",
    "og:audio:type": "audio/mpeg",
    "og:audio:secure_url": "https://gemstone-identifier.com/app-audio.mp3",
    "og:audio:duration": "30",
    "og:audio:tag": "gemstone, identification, AI, app, jewelry",
    "article:author": "Gemstone Identifier Team",
    "article:section": "Technology",
    "article:tag":
      "gemstone, identification, AI, app, jewelry, precious stones",
    "article:published_time": "2024-01-01T00:00:00.000Z",
    "article:modified_time": "2024-01-01T00:00:00.000Z",
    "article:expiration_time": "2025-01-01T00:00:00.000Z",
    "book:author": "Gemstone Identifier Team",
    "book:isbn": "978-0-000000-0-0",
    "book:release_date": "2024-01-01T00:00:00.000Z",
    "book:tag": "gemstone, identification, AI, app, jewelry, precious stones",
    "profile:first_name": "Gemstone",
    "profile:last_name": "Identifier",
    "profile:username": "gemstoneidentifier",
    "profile:gender": "neutral",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/app/gemstone-identifier",
      app_store_id: "your-app-store-id",
    },
    android: {
      package: "com.gemstoneidentifier.app",
    },
    web: {
      url: "https://gemstone-identifier.com",
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/app-icon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/app-icon.jpg" />
        <meta name="theme-color" content="#007aff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gemstone Identifier" />
        <meta name="application-name" content="Gemstone Identifier" />
        <meta name="msapplication-TileColor" content="#007aff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
