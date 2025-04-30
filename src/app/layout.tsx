import { PlanoProvider } from "@/common/PlanoContext";
import "animate.css/animate.compat.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSA",
  description: "Provedora de internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlanoProvider>{children}</PlanoProvider>
      </body>
    </html>
  );
}
