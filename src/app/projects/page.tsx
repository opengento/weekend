import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";

export default function Page() {
  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark" underlineColor="primary">
          Nos réalisations
        </Typography>
        <Typography variant="h2" color="dark" underlineColor="primary">
          🔥 Modules les plus utiles (production / forte valeur)
        </Typography>
        <ul>
          <li>
            <Link href="https://github.com/opengento/magento2-downgrade-ee-ce">
              <strong>magento2-downgrade-ee-ce</strong>
            </Link> – Migration Adobe Commerce → Open Source
          </li>
          <li>
            <Link href="https://github.com/opengento/logger">
              <strong>logger</strong>
            </Link> – Logging avancé (Slack, Gelf, etc.)
          </li>
          <li>
            <Link href="https://github.com/opengento/featuretoggle">
              <strong>featuretoggle</strong>
            </Link> – Feature flags Magento
          </li>
          <li>
            <Link href="https://github.com/opengento/feature-toggle2">
              <strong>feature-toggle2</strong>
            </Link> – Version avancée des feature flags
          </li>
          <li>
            <Link href="https://github.com/opengento/magento2-category-import-export">
              <strong>magento2-category-import-export</strong>
            </Link> – Import / export catégories CSV
          </li>
          <li>
            <Link href="https://github.com/opengento/magento2-document">
              <strong>module-document</strong>
            </Link> – Gestion documentaire dans Magento
          </li>
        </ul>
        <Typography variant="h2" color="dark" underlineColor="primary">
          🧰 Modules utiles (amélioration dev / back-office / tooling)
        </Typography>
        <ul>
          <li>
            <Link href="https://github.com/opengento/magento2-store-path-url">
              <strong>magento2-store-path-url</strong>
            </Link> – Gestion personnalisée des URLs store
          </li>
          <li>
            <Link href="https://github.com/opengento/module-magento2-hyva-admin">
              <strong>module-magento2-hyva-admin</strong>
            </Link> – Remplacement des grilles admin par Hyvä
          </li>
          <li>
            <Link href="https://github.com/opengento/module-admin-assistant">
              <strong>module-admin-assistant</strong>
            </Link> – Outils d’aide pour l’administration
          </li>
          <li>
            <Link href="https://github.com/opengento/magento2-better-bo">
              <strong>magento2-better-bo</strong>
            </Link> – Amélioration du back-office Magento
          </li>
          <li>
            <Link href="https://github.com/opengento/composer-registration-plugin">
              <strong>composer-registration-plugin</strong>
            </Link> – Optimisation du chargement Magento via Composer
          </li>
          <li>
            <Link href="https://github.com/opengento/magento-composer-installer">
              <strong>magento-composer-installer</strong>
            </Link> – Installer Composer pour modules Magento
          </li>
          <li>
            <Link href="https://github.com/opengento/magento2-makegento-cli">
              <strong>module-makegento-cli</strong>
            </Link> – CLI pour automatiser des tâches Magento
          </li>
        </ul>
        <Typography variant="h2" color="dark" underlineColor="primary">
          🧪 Projets techniques / base / expérimentaux
        </Typography>
        <ul>
          <li>
            <Link href="https://github.com/opengento/magento2-base-light">
              <strong>magento2-base-light</strong>
            </Link> – Base Magento allégée
          </li>
          <li>
            <Link href="https://github.com/opengento/magento2-frankenphp-base">
              <strong>magento2-frankenphp-base</strong>
            </Link> – Stack Magento avec FrankenPHP
          </li>
          <li>
            <Link href="https://github.com/opengento/dontworry">
              <strong>dontworry</strong>
            </Link>– Module utilitaire (debug / expérimentation)
          </li>
        </ul>
      </Article>
    </Container>
  );
}
