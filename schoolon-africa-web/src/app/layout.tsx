import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schoolon Africa — A Digital School Built for African Students",
  description:
    "We help JSS1–SS3 students continue their education no matter the circumstance with real mentors and physical assessments.",
  keywords: [
    "Schoolon Africa",
    "Edtech Africa",
    "NERDC curriculum",
    "WAEC NECO BECE prep",
    "African education",
    "AI dictionary",
    "STEM learning",
  ],
  authors: [{ name: "Schoolon Africa Team" }],
  openGraph: {
    title: "Schoolon Africa — A Digital Secondary School Built for African Students",
    description:
      "Join the waitlist for NERDC-aligned lessons, native-language AI explanations, and personalized mentor coaching.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F8FBFF] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
