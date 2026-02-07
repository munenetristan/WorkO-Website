import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WorkO | On-demand Workers for Every Job",
    template: "%s | WorkO",
  },
  description:
    "WorkO connects customers with trusted local providers for home, business, and digital services.",
  metadataBase: new URL("https://worko.com"),
  openGraph: {
    title: "WorkO | On-demand Workers for Every Job",
    description:
      "Book vetted workers fast or grow your business as a WorkO provider.",
    type: "website",
    url: "https://worko.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkO | On-demand Workers for Every Job",
    description:
      "Book vetted workers fast or grow your business as a WorkO provider.",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
