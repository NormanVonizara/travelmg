import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import NextTopLoader from 'nextjs-toploader'
import {
  ClerkProvider
} from '@clerk/nextjs'

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
          <html lang="en" data-theme="cupcake">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
              <NextTopLoader
                  color="#eeaf3a"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  showSpinner={false}
                  crawl={true}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px #eeaf3a,0 0 5px #eeaf3a"
                  zIndex={1600}
                  showAtBottom={false}
              />
              {children}
            </body>
          </html>
      </ClerkProvider>
  );
}