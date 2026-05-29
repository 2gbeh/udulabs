import "./globals.css";

import type { Metadata } from "next";
import { METADATA } from "@/constants/META";
import { geistMono, geistSans, nunito } from "@/constants/FONT";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex-col-x bg-white">{children}</body>
    </html>
  );
}
