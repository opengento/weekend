import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import ProjectList from "@/components/Project/ProjectList";
import { ProjectProps } from "@/components/Project/project.types";

export default function Page() {
  const projects: ProjectProps[] = [
    {
      title: "Magento 2 – GDPR module",
      description: "Magento 2 GDPR module is a must have extension for the largest e-commerce CMS used in the world. The module helps to be GDPR compliant. Actually it allows the customers to erase, or export their personal data. As a merchant you have powerful tools to customize the extension capabilities and apply the finest privacy rules.",
      url: "https://github.com/opengento/magento2-gdpr",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Migration Tool from Adobe Commerce to Magento Open Source",
      description: "This migrating tool allows to sidegrade the database schema without altering the data. The major difference between the two editions are the staging definitions that enable draft and scheduled publication. Beside that the scripts provided by the tool will remove some specific tables and attributes of the Adobe Commerce Edition. It will also keep the latest version available for product and categories in staging mode.",
      url: "https://github.com/opengento/magento2-downgrade-ee-ce",
      tags: ["magento", "tool"]
    },
    {
      title: "Magento 2 – Hoodoor module",
      description: "This module provides a top-notch security for your customers' accounts by adopting a passwordless approach, effectively removing the vulnerability of weak passwords from your database. This instills a sense of confidence and reliability in your platform among your customers.",
      url: "https://github.com/opengento/magento2-hoodoor",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Make but for Magento",
      description: "This extension allows to automatically generate boilerplate code through the command line interface.",
      url: "https://github.com/opengento/magento2-makegento-cli",
      tags: ["magento", "module", "cli"]
    },
    {
      title: "Magento 2 – Don't worry",
      description: "With this Magento 2 module, your shop will turn into a awesome cash-machine, but also an unstress software. Indeed, everything will turn green, errors will disapear (backend and frontend), your sales will increased.",
      url: "https://github.com/opengento/dontworry",
      tags: ["magento", "module", "troll", "experimental"]
    },
    {
      title: "Magento 2 – Saleable module",
      description: "This extension allows to set if a product is saleable and can show its price by scope and customer group.",
      url: "https://github.com/opengento/magento2-saleable",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Frankengento",
      description: "This module provides a top-notch security for your customers' accounts by adopting a passwordless approach, effectively removing the vulnerability of weak passwords from your database. This instills a sense of confidence and reliability in your platform among your customers.",
      url: "https://github.com/opengento/magento2-frankengento",
      tags: ["magento", "experimental"]
    },
    {
      title: "Magento 2 – Category Import Export module",
      description: "This module allows to import and export categories data from/to CSV file.",
      url: "https://github.com/opengento/magento2-category-import-export",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Registration Plugin",
      description: "This module add a global registration.php that replace the default glob search performed for each request to discover the components not installed from composer.",
      url: "https://github.com/opengento/magento2-registration-plugin",
      tags: ["magento", "composer-plugin", "optimisation", "experimental"]
    },
    {
      title: "Magento 2 – Snowflake module",
      description: "This fun module adds ❄️️ on your website all the time or based on your visitor outside weather.",
      url: "https://github.com/opengento/magento2-snowflake",
      tags: ["magento", "module", "fun"]
    },
    {
      title: "Magento 2 – Webapi Logger module",
      description: "This module allows you to analyze all the webapi rest done call toward your Magento.",
      url: "https://github.com/opengento/magento2-webapi-logger",
      tags: ["magento", "module", "monitoring"]
    },
    {
      title: "Magento 2 – Product Breadcrumbs module",
      description: "This module allows to toggle server side rendering for your product pages breadcrumbs.",
      url: "https://github.com/opengento/magento2-product-breadcrumbs",
      tags: ["magento", "module", "seo"]
    },
    {
      title: "Magento 2 – FrankenPHP Base module",
      description: "Magento 2 Base for FrankenPHP",
      url: "https://github.com/opengento/magento2-frankenphp-base",
      tags: ["magento", "component", "experiment"]
    },
    {
      title: "Magento 2 – Store Base Url module",
      description: "This module allows to override the store code in url with an other path value and automatically resolve the current store based on current url without custom additions.",
      url: "https://github.com/opengento/magento2-store-path-url",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Logger module",
      description: "This extension sets new logger handlers for Magento2, such as Gelf or Slack and many others.",
      url: "https://github.com/opengento/logger",
      tags: ["magento", "module", "monitoring"]
    },
    {
      title: "Magento 2 – Country Store Switcher module",
      description: "This module will allows the customers to switch of store by country instead of name/language.",
      url: "https://github.com/opengento/magento2-country-store-switcher",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Document module",
      description: "This module aims to help merchants to manage easily their documents in Magento 2.",
      url: "https://github.com/opengento/magento2-document",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Early Hints HTTP 103",
      description: "POC for adding preloading content headers / Early hints approach in Magento 2",
      url: "https://github.com/opengento/magento2-early-hints-103",
      tags: ["magento", "module", "optimisation", "experimental"]
    },
    {
      title: "Magento 2 – Sales Sequence module",
      description: "This extension allows to setup with ease the prefix, format and suffix of sales sequences directly from the configuration.",
      url: "https://github.com/opengento/magento2-sales-sequence",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Country Store Redirect module",
      description: "This module will redirect the customers regarding their country of origin, on their first visit session.",
      url: "https://github.com/opengento/magento2-country-store-redirect",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Country Store module",
      description: "This module add the many countries to many stores relation and make it available to the storefront.",
      url: "https://github.com/opengento/magento2-country-store",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Better BO",
      description: "This extension enhance Magento back-office.",
      url: "https://github.com/opengento/magento2-better-bo",
      tags: ["magento", "module", "experimental"]
    },
    {
      title: "Magento 2 – Open AI connector",
      description: "Open AI connector SDK for Magento 2.",
      url: "https://github.com/opengento/magento2-openai-connector",
      tags: ["magento", "module", "ai"]
    },
    {
      title: "Magento 2 – Feature Toggle module",
      description: "This module allows you to use the Feature Flags, or sometimes called \"Feature Toggle\" functionality.",
      url: "https://github.com/opengento/feature-toggle2",
      tags: ["magento", "module", "ab-testing"]
    },
    {
      title: "Magento 2 – 3D Generator",
      description: "This module generate 3D rendered model to the customer based on the product images provided by the merchant.",
      url: "https://github.com/opengento/magento2-on-fly-3d-generator",
      tags: ["magento", "module", "ai", "experimental"]
    },
    {
      title: "Magento 2 – Catalog Sort Order module",
      description: "This module allows to setup the sort direction options in the storefront catalog view.",
      url: "https://github.com/opengento/magento2-catalog-sort-order",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Minimal Price module",
      description: "This module allows the merchants to set a minimal price for products.",
      url: "https://github.com/opengento/magento2-minimal-price",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Document Search module",
      description: "This module aims to make documents searchable for customers in Magento 2.",
      url: "https://github.com/opengento/magento2-document-search",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Country Store Phone module",
      description: "This module add the phone number field to the country data object.",
      url: "https://github.com/opengento/magento2-country-store-phone",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Document Product Link module",
      description: "This module aims to help merchants to link their documents to products in Magento 2.",
      url: "https://github.com/opengento/magento2-document-product-link",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – AI Merchant Assistant module",
      description: "This module add an AI chatbot in the admin panel in order to assist the merchants in their daily tasks.",
      url: "https://github.com/opengento/magento2-admin-assistant",
      tags: ["magento", "module", "ai", "experimental"]
    },
    {
      title: "Magento 2 – Document Widget module",
      description: "This module aims to make documents searchable for customers in Magento 2.",
      url: "https://github.com/opengento/magento2-document-widget",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Document Product Search module",
      description: "This module aims to make documents searchable with product keywords in Magento 2.",
      url: "https://github.com/opengento/magento2-document-product-search",
      tags: ["magento", "module"]
    },
    {
      title: "Magento 2 – Sample Data",
      description: "This module allows the merchants to generate sample data directly from the admin panel and AI.",
      url: "https://github.com/opengento/magento2-sample-ai-data",
      tags: ["magento", "module", "ai", "experimental"]
    },
    {
      title: "Magento 2 – Document Restrict module",
      description: "This module aims to restrict documents by type in Magento 2.",
      url: "https://github.com/opengento/magento2-document-restrict",
      tags: ["magento", "module"]
    }
  ];

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark" underlineColor="primary">
          Nos réalisations
        </Typography>
        <ProjectList projects={projects}/>
      </Article>
    </Container>
  );
}
