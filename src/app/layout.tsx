import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import Trust from "@/components/Push/Trust";
import Container from "@/layouts/Container";

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
        <TranslationsProvider>
          <Header />
          <main>{children}</main>
          <Container size="large" className="py-8 md:py-16">
            <Trust />
          </Container>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
