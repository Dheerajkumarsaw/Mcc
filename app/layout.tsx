import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Highly Targeted SEO Meta Data
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://marketingcc.com'),
  title: {
    default: "AI Marketing Campaign Generator | Marketing Command Center",
    template: "%s | Marketing Command Center",
  },
  description:
    "Instantly generate AI-powered marketing campaigns. Convert any product URL into top-tier email copy, Twitter threads, and Instagram captions optimized for affiliates and creators.",
  keywords: [
    "AI marketing",
    "campaign generator",
    "affiliate marketing automation",
    "marketing artificial intelligence",
    "generate social media posts from URL",
    "AI email copywriting",
    "Marketing Command Center",
  ],
  authors: [{ name: "Marketing Command Center Team" }],
  creator: "Marketing Command Center",
  publisher: "Marketing Command Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Marketing Campaign Generator | Marketing Command Center",
    description: "Generate complete marketing campaigns in seconds using AI. Perfect for affiliate marketers and content creators to drive sales effortlessly.",
    url: "/",
    siteName: "Marketing Command Center",
    images: [
      {
        url: "/og-image.png", // Recommended: add a real OG image to public/
        width: 1200,
        height: 630,
        alt: "Marketing Command Center Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Campaign Generator | Marketing Command Center",
    description: "Instantly convert any product URL into ready-to-use email copy and social media posts powered by AI.",
    images: ["/twitter-image.png"], // Recommended: add a real Twitter image to public/
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
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

// JSON-LD Structured Data for Rich Snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Marketing Command Center",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered marketing campaign generator that turns product URLs into ready-to-use marketing copy.",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
