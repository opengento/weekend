import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";

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
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
    </html>
  );
}
