import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Timeline from "@/components/Event/Program/Timeline/Timeline";
import Typography from "@/components/Typography/Typography";
import Program from "@/components/Event/Program/Program";

export default function Page() {
  return (
    <Container className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark">
          Programmation
        </Typography>
        <Typography color="dark">
          Lorem Ipsum.
        </Typography>
      </Article>
      <Article>
        <Program />
      </Article>
    </Container>
  );
}
