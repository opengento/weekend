import type { Metadata } from "next";
import "./globals.css";
import {Montserrat, Roboto} from "next/dist/compiled/@next/font/dist/google";
import TranslationsProvider
  from "@/components/TranslationsProvider/TranslationsProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Weekend Opengento",
  description: "Organisation d’événements autour du logiciel open-source Magento.",
  robots: "index, follow",
  openGraph: {
    images: "https://weekend.opengento.fr/images/logo/opengento-150x150.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    <body className={`${roboto.variable} ${montserrat.variable} antialiased bg-camel`}>
      <TranslationsProvider>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </TranslationsProvider>
    </body>
    </html>
  );
}
