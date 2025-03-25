import type { Metadata } from "next";
import "./globals.css";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
import Container from "@/layouts/Container";
import Trust from "@/components/Push/Trust";
import Faq from "@/components/Push/Faq";
import Membership from "@/components/Push/Membership";

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
          <Container className="my-8 md:my-16">
            <Faq />
          </Container>
          <Container size="large" className="my-8 md:my-16">
            <Trust />
          </Container>
          <Container className="my-8 md:my-16">
            <Membership />
          </Container>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
