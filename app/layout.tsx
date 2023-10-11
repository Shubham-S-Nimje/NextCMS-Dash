"use client";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import ReduxProvider from "@/redux/provider";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ReduxProvider>
            <Loader />
            {children}
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
