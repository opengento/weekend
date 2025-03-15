"use client";

import Typography from "@/components/Typography/Typography";
import Article from "@/layouts/Article";
import Container from "@/layouts/Container";
import Board from "@/components/Association/Board/Board";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Container size="large" className="flex flex-col gap-8 my-8">
        <Article>
          <Typography variant="h1" underlineColor="secondary" color="dark">
            Qui sommes nous ?
          </Typography>
          <Typography color="dark">
            Nous sommes une association qui publie lors de ses hackathons (nos
            fameux weekends Opengento 😎🍹) des POC & modules afin de soutenir
            l'innovation au sein de la communauté de développeur e-commerce.
          </Typography>
          <Typography color="dark">
            Voir nos <Link href="/members" className="link">membres donateurs</Link>.
          </Typography>
        </Article>
        <Article>
          <Typography variant="h2" underlineColor="secondary" color="dark">
            Le bureau
          </Typography>
          <Typography color="dark">
            Le bureau est composé d'un président, d'un secrétaire et d'un trésorier.
          </Typography>
          <Typography color="dark">
            Le bureau est renouvelé tous les ans, lors du Weekend Opengento.
          </Typography>
        </Article>
      </Container>
      <Container>
        <Board/>
      </Container>
    </>
  );
}
