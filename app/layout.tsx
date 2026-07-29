import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manyasoftsolutions.com"),
  title: {
    default: "MANYA Soft Solutions | Enterprise IT Consulting & Software Services",
    template: "%s | MANYA Soft Solutions",
  },
  description: "MANYA Soft Solutions delivers enterprise-grade software, cloud infrastructure, and AI-powered transformation.",
  alternates: {
    canonical: "https://www.manyasoftsolutions.com",
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "MANYA Soft Solutions | Enterprise IT Consulting & Software Services",
    description: "MANYA Soft Solutions delivers enterprise-grade software, cloud infrastructure, and AI-powered transformation.",
    url: "https://www.manyasoftsolutions.com",
    siteName: "MANYA Soft Solutions",
    images: [
      {
        url: "https://www.manyasoftsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "MANYA Soft Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MANYA Soft Solutions",
    description: "Enterprise IT Consulting & Software Services",
    images: ["https://www.manyasoftsolutions.com/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MANYA Soft Solutions",
    "url": "https://www.manyasoftsolutions.com",
    "logo": "https://www.manyasoftsolutions.com/logo.png",
    "description": "Enterprise IT Consulting & Software Services",
    "sameAs": [],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-surface-page text-text-primary font-body antialiased",
          montserrat.variable,
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
