import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MenuProvider } from "@/context/MenuCtx";
import { NavProvider } from "@/context/NavCtx";
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
                <NavProvider>
                    <body className={`${poppins.className} antialiased`}>
                        {children}
                    </body>
                </NavProvider>
            </MenuProvider>
            <GoogleAnalytics gaId="G-C2VWGZBK20" />
        </html>
    );
};

export default RootLayout;
