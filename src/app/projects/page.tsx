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
        <p>
          magento2-makegento-cli
          magento2-on-fly-3d-generator
          on-fly-3d-generator-service
          magento2-varnish-flush-controller
          magento2-better-bo
          magento2-minimal-price
          magento2-snowflake Upgrade!
          magento2-admin-assistant
          magento2-frankengento
          magento2-openai-connector
          magento2-sample-ai-data
          magento2-store-path-url
        </p>
        <Typography color="dark" className="whitespace-pre-wrap">
          To Be Soon!
        </Typography>
      </Article>
    </Container>
  );
}
