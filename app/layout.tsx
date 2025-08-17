import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemstone Identifier - AI-Powered Gemstone Recognition App",
  description:
    "Identify, catalog, and learn about gemstones with AI-powered recognition. Get instant identification, value estimates, and detailed information about your precious stones. Download now for free!",
  icons: {
    icon: [
      { url: "/app-icon.jpg", sizes: "any" },
      { url: "/app-icon.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [
      { url: "/app-icon.jpg", sizes: "180x180", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "152x152", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "144x144", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "120x120", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "114x114", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "76x76", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "72x72", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "60x60", type: "image/jpeg" },
      { url: "/app-icon.jpg", sizes: "57x57", type: "image/jpeg" },
    ],
    shortcut: "/app-icon.jpg",
  },
  keywords: [
    "gemstone identifier app",
    "gemstone identifier",
    "gemstone",
    "gemstone recognition",
    "AI gemstone identification",
    "gemstone app",
    "jewelry identification",
    "precious stones",
    "gemstone catalog",
    "gemstone value",
    "gemstone collection",
    "jewelry app",
    "gemstone scanner",
    "gemstone analyzer",
    "gemstone expert",
  ],
  authors: [{ name: "Gemstone Identifier Team" }],
  creator: "Gemstone Identifier",
  publisher: "Gemstone Identifier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gemstoneidentifier.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gemstone Identifier - AI-Powered Gemstone Recognition",
    description:
      "Identify, catalog, and learn about gemstones with AI-powered recognition. Get instant identification, value estimates, and detailed information about your precious stones. Download now for free!",
    url: "https://gemstoneidentifier.app",
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
      {
        url: "/app-icon.jpg",
        width: 512,
        height: 512,
        alt: "Gemstone Identifier App Icon",
        type: "image/jpeg",
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
      {
        url: "/app-icon.jpg",
        alt: "Gemstone Identifier App Icon",
        width: 512,
        height: 512,
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
      "https://gemstoneidentifier.app/social-preview-1200x630.png",
    "og:video": "https://gemstoneidentifier.app/app-preview.mp4",
    "og:video:width": "1200",
    "og:video:height": "630",
    "og:video:type": "video/mp4",
    "og:video:secure_url": "https://gemstoneidentifier.app/app-preview.mp4",
    "og:video:duration": "30",
    "og:video:tag": "gemstone, identification, AI, app, jewelry",
    "og:audio": "https://gemstoneidentifier.app/app-audio.mp3",
    "og:audio:type": "audio/mpeg",
    "og:audio:secure_url": "https://gemstoneidentifier.app/app-audio.mp3",
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
      url: "https://gemstoneidentifier.app",
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
        {/* Standard favicon */}
        <link rel="icon" href="/app-icon.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/app-icon.jpg" type="image/jpeg" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="152x152" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="144x144" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="120x120" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="114x114" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="76x76" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="72x72" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="60x60" href="/app-icon.jpg" />
        <link rel="apple-touch-icon" sizes="57x57" href="/app-icon.jpg" />

        {/* Android Icons */}
        <link
          rel="icon"
          type="image/jpeg"
          sizes="192x192"
          href="/app-icon.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="512x512"
          href="/app-icon.jpg"
        />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#007aff" />
        <meta name="msapplication-TileImage" content="/app-icon.jpg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#007aff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gemstone Identifier" />
        <meta name="application-name" content="Gemstone Identifier" />

        {/* Social Media Icons */}
        <meta
          property="og:image"
          content="https://gemstoneidentifier.app/app-icon.jpg"
        />
        <meta
          property="twitter:image"
          content="https://gemstoneidentifier.app/app-icon.jpg"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:secure_url"
          content="https://gemstoneidentifier.app/app-icon.jpg"
        />
        <meta name="apple-itunes-app" content="app-id=6627335358" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
