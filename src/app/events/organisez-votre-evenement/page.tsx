"use client";

import Typography from "@/components/Typography/Typography";
import Article from "@/layouts/Article";
import Container from "@/layouts/Container";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Container size="large" className="flex flex-col gap-8 my-8">
        <Article>
          <Typography variant="h1" underlineColor="secondary" color="dark">
            Organisez votre événement
          </Typography>
          <Typography color="dark">
            L’objet de l’association est essentiellement l’organisation
            d’événements Magento. Si vous souhaitez créer votre propre
            événement, nous serons ravis de pouvoir vous aider.
          </Typography>
          <Typography color="dark" weight="semibold">
            Nous mettons à votre disposition nos compétences en
            organisation, notre trésorerie pour avancer des frais et notre
            réseau humain pour trouver des participants, des orateurs voire
            des sponsors.
          </Typography>
          <Typography color="dark" weight="semibold">Quelques pré-requis :</Typography>
          <ul className="list-disc px-4">
            <li>L’événement est organisé par Opengento</li>
            <li>L’événement doit être uniquement organisé autour de
              l’eCommerce et la tech
            </li>
            <li>Son coût doit être entièrement auto-finançé, l’association ne
              participe pas au financement (elle peut néanmoins avancer les
              acomptes dans la limite du budget disponible et sous certains
              accords/engagements).
            </li>
            <li>Au contraire, une contribution minime pour l’association vous
              sera demandée en échange des services rendus.
            </li>
          </ul>
          <Typography color="dark">
            <Link href="mailto:opengento@gmail.com" className="link">Contactez-nous !</Link>
          </Typography>
        </Article>
      </Container>
    </>
  );
}
