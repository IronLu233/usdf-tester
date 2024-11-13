'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import localFont from "next/font/local";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <TonConnectUIProvider manifestUrl="https://app.fafafa.io/tonconnect-manifest.json">
          {children}
          </TonConnectUIProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
