import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/sonner';
import { DemoDataInitializer } from './components/DemoDataInitializer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "AutoBiz - #1 Business Automation Platform in Pakistan | CRM, Invoicing & WhatsApp",
  description: "Automate your trading business with AI-powered CRM, invoicing, inventory management & WhatsApp automation. Trusted by 500+ Pakistani businesses. Start free 14-day trial!",
  keywords: "business automation pakistan, crm software pakistan, inventory management, whatsapp automation, invoice software pakistan, trading software, distribution management",
  authors: [{ name: "AutoBiz" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  themeColor: "#3b82f6",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://autobiz.vercel.app",
    title: "AutoBiz - Business Automation for Pakistani Traders & Distributors",
    description: "Complete business management solution with CRM, invoicing, inventory & WhatsApp automation. Made for Pakistan.",
    siteName: "AutoBiz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoBiz Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoBiz - Business Automation Platform Pakistan",
    description: "Automate your business with AI-powered tools. CRM, Invoicing, Inventory & WhatsApp automation.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <DemoDataInitializer />
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
