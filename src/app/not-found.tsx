import Container from "@/layouts/Container";
import Typography from "@/components/Typography/Typography";
import Article from "@/layouts/Article";

export default function Home() {
  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Article>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-6 md:mb-12"
        >
          404: Vous êtes perdus !
        </Typography>
      </Article>
    </Container>
  );
}
