import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemstone Identifier - AI-Powered Gemstone Recognition App",
  description:
    "Identify, catalog, and learn about gemstones with AI-powered recognition. Get instant identification, value estimates, and detailed information about your precious stones.",
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
      "Identify, catalog, and learn about gemstones with AI-powered recognition. Get instant identification, value estimates, and detailed information about your precious stones.",
    url: "https://gemstone-identifier.com",
    siteName: "Gemstone Identifier",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Gemstone Identifier App Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemstone Identifier - AI-Powered Gemstone Recognition",
    description:
      "Identify, catalog, and learn about gemstones with AI-powered recognition.",
    images: ["/hero.png"],
    creator: "@gemstoneidentifier",
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
