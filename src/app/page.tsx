import EventHomePage from "@/layouts/Event/EventHomePage";
import Hero from "@/components/Association/AssociationHero";
import Container from "@/layouts/Container";
import MemberGrid from "@/components/Association/Member/MemberGrid";
import Typography from "@/components/Typography/Typography";
import Board from "@/components/Association/Board/Board";

export default function Home() {
  return (
    <>
      <EventHomePage />
      <Hero />
      <div className="p-12 bg-gradient-to-bl from-red-900 to-indigo-900">
        <Container size="large">
          <Typography
            variant="h3"
            color="primary"
            weight="semibold"
            underlineColor="primary"
            className="mb-12"
          >
            Nos membres donateurs
          </Typography>
          <MemberGrid />
        </Container>
      </div>
      Quelques Chiffres (nb projets, nb events, membres...)<br/>
      <div className="p-12 bg-gradient-to-bl from-violet-900 to-pink-900">
        <Container size="large">
          <Typography
            variant="h3"
            color="primary"
            weight="semibold"
            underlineColor="primary"
            className="mb-12"
          >
            Le bureau à votre service !
          </Typography>
        </Container>
        <Container size="small" className="bg-neutral rounded-lg">
          <Board />
        </Container>
      </div>
    </>
  );
}
