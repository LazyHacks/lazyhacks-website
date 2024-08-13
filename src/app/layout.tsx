import type { Metadata } from "next";
import { Courier_Prime, Pangolin, } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-courier-prime',
});

const pangolin = Pangolin({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-pangolin',
});

export const metadata: Metadata = {
  title: "LazyHacks",
  description: "Ottawa's Laziest Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${courierPrime.variable} scroll-smooth ${pangolin.variable}`}>
      <body className="bg-background-yellow bg-[linear-gradient(to_right,#FEE0B6_1px,transparent_1px),linear-gradient(to_bottom,#FEE0B6_1px,transparent_1px)] bg-[size:32px_32px]">{children}</body>
    </html>
  );
}
