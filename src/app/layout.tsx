import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Love_Ya_Like_A_Sister, } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-lexend-deca',
});

const loveYa = Love_Ya_Like_A_Sister({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-love-ya',
});

export const metadata: Metadata = {
  title: "LazyHacks",
  description: "Ottawa's Laziest Highschool Hackathon!",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0.9,
  // maximumScale: 1,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {/* <link rel="icon" href="/favicon.ico" /> */}
    <html lang="en" className={`${lexendDeca.variable} scroll-smooth ${loveYa.variable}`}>
      <body className="bg-background-yellow bg-[linear-gradient(to_right,#FEE0B6_1px,transparent_1px),linear-gradient(to_bottom,#FEE0B6_1px,transparent_1px)] bg-[size:32px_32px]">{children}</body>
    </html></>
  );
}
