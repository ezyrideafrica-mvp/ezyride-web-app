import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Load Ezyride brand fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ----- Site Metadata -----
export const metadata: Metadata = {
  title: "Ezyride – Premium Mobility in Africa",
  description:
    "Experience reliable airport pickups, executive rides, and luxury tours with Ezyride Africa. Move like royalty — comfort, class, and convenience in every ride.",
  keywords: [
    "Ezyride",
    "Ride hailing Africa",
    "Airport pickup Lagos",
    "Luxury rides Nigeria",
    "Executive transport Africa",
    "Ezyride Africa",
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Ezyride – Premium Mobility in Africa",
    description:
      "Book airport pickups, executive rides, and luxury tours with Ezyride Africa.",
    url: "https://ezyride.africa",
    siteName: "Ezyride Africa",
    images: [
      {
        url: "/images/logo.png", // or you can use /images/og-image.jpg if you have one
        width: 1200,
        height: 630,
        alt: "Ezyride – Premium Mobility in Africa",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezyride – Premium Mobility in Africa",
    description:
      "Book airport pickups, executive rides, and luxury tours with Ezyride Africa.",
    images: ["/images/logo.png"],
  },
  themeColor: "#014d40",
};

// ----- Root Layout -----
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
        {children}
      </body>
    </html>
  );
}
