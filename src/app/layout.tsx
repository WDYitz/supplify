import { GlobalProviders } from "@/providers/global-providers";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

export const metadata: Metadata = {
  title: {
    default: "Supplify",
    template: "%s | Supplify",
  },
  description: "A Supplify é uma plataforma de gestão de estoque que oferece insights, facilitando o controle do seus produtos.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.className} dark antialiased h-[100vh]`}>
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
