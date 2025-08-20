import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MenuProvider } from "@/context/MenuCtx";
import { NavProvider } from "@/context/NavCtx";
import { poppins } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Interior Design",
  description:
    "The best interior design projects, created by highly qualified professionals. Come and check out our success stories and place your order now.",
  authors: [
    {
      name: "Gabriel Cavalcante de Jesus Oliveira",
      url: "https://github.com/zolppy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MenuProvider>
        <NavProvider>
          <body className={`${poppins.className} antialiased`}>{children}</body>
        </NavProvider>
      </MenuProvider>
      <GoogleAnalytics gaId="G-C2VWGZBK20" />
    </html>
  );
}

RootLayout.displayName = "RootLayout";
