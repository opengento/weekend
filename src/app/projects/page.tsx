import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";

export default function Page() {
  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark" underlineColor="primary">
          Nos réalisations
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          To Be Soon!
        </Typography>
      </Article>
    </Container>
  );
}
