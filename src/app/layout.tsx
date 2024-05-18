import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Launder Link | App",
  description: "Launder & Dry Clean",
  icons: {
    icon: "/images/launder-favicon.webp"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <footer className="bg-zinc-900 text-gray-200 p-4 text-center">
          <p className="text-sm">&copy; 2024 Launder Link. All rights reserved.</p>
        </footer> */}
      </body>
    </html>
  );
}
