import Typography from "@/components/Typography/Typography";
import Article from "@/layouts/Article";
import Container from "@/layouts/Container";
import Board from "@/components/Association/Board/Board";
import Link from "next/link";
import { getBoard } from "@/lib/association";
import EnrolSection from "@/components/Association/EnrolSection";
import Divider from "@/components/Divider/Divider";

export default function Page() {
  return (
    <>
      <Container size="large" className="flex flex-col gap-8 my-8">
        <Article>
          <Typography variant="h1" underlineColor="secondary" color="dark">
            Qui sommes nous ?
          </Typography>
          <Typography color="dark">
            Il s’agit d’une association loi 1901, dont l’objet est
            l’organisation d’événements Open-Source pour la communauté de
            développeurs francophones.
          </Typography>
          <Typography color="dark">
            Pour mieux comprendre, revenons en arrière et remontons en 2013,
            année de la première édition de la MageConf (.org, à ne pas
            confondre avec .com). Il s’agit alors d’une sorte de contre soirée
            de l’événement Bargento, organisée pour et par les développeurs.
          </Typography>
          <Typography color="dark">
            En 2014, l’association Opengento voit le jour lors de la MageConf.
            L’idée est simple : réunir la communauté de développeurs française
            pendant un weekend pour coder et faire des rencontres! Depuis le
            premier événement Opengento, qui a eu lieu en 2015 à Toulouse, 6
            autres week-ends ont été organisés !
          </Typography>
          <Typography color="dark">
            Pour la faire courte, nous sommes une association qui publie lors de
            ses hackathons (nos fameux weekends Opengento 😎🍹) des POC &
            modules afin de soutenir l’innovation au sein de la communauté de
            développeur e-commerce.
          </Typography>
          <Typography color="dark">
            Voir nos <Link href="/members" className="link">membres donateurs</Link>.
          </Typography>
          <Divider color="primary" position="horizontal" />
          <EnrolSection />
        </Article>
        <Article>
          <Typography variant="h2" underlineColor="secondary" color="dark">
            Le bureau
          </Typography>
          <Typography color="dark">
            Le bureau est composé d’un président, d’un secrétaire et d’un trésorier.
          </Typography>
          <Typography color="dark">
            Le bureau est renouvelé tous les ans, lors du Weekend Opengento.
          </Typography>
        </Article>
      </Container>
      <Container>
        <Board individuals={getBoard()} />
      </Container>
    </>
  );
}
