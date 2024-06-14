import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Features Grid",
  description: "Marketing component that is a featured sections grid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`notoSans.className w-screen h-screen bg-gradient-to-b from-gray-50 to-[#D2D6DB]`}>{children}</body>
    </html>
  );
}
