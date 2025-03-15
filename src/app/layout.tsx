import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MenuProvider } from "@/context/MenuCtx";
import { poppins } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Interior Design",
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ab, eveniet dolorum libero enim eligendi cum nisi rerum omnis, quasi soluta quaerat.",
    authors: [
        {
            name: "Gabriel Cavalcante de Jesus Oliveira",
            url: "https://github.com/zolppy",
        },
    ],
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="pt-br">
            <MenuProvider>
                <body className={`${poppins.className} antialiased`}>
                    {children}
                </body>
            </MenuProvider>
            <GoogleAnalytics gaId="G-BL0G7C98H9" />
        </html>
    );
};

export default RootLayout;
