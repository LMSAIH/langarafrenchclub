
import type { Sponsor } from "../types/sponsor";

interface PageContent {
  title: string;
  description: string;
  clickPrompt: string;
}

interface TranslatedSponsors {
  pageContent: PageContent;
  sponsors: Sponsor[];
}

const sponsorsContent: Record<string, TranslatedSponsors> = {
  fr: {
    pageContent: {
      title: "Nos Généreux Sponsors et partenaires",
      description:
        "Nous tenons à exprimer notre profonde gratitude envers nos sponsors pour leur soutien inestimable. Grâce à leur générosité, nous pouvons continuer à promouvoir la langue et la culture françaises au sein de notre communauté.",
      clickPrompt: "Cliquez sur un logo pour en savoir plus sur nos merveilleux sponsors.",
    },
    sponsors: [
      {
        id: 1,
        name: "Sponsors ",
        logo: "/LFC_LOGO.png",
        description:
          "Coming Soon...",
        website: "https://langarafr.com",
      },

    ],
  },
  en: {
    pageContent: {
      title: "Our Generous Sponsors & Partners",
      description:
        "We would like to express our deep gratitude to our sponsors for their invaluable support. Thanks to their generosity, we can continue to promote the French language and culture within our community.",
      clickPrompt: "Click on a logo to learn more about our amazing sponsors.",
    },
    sponsors: [
      {
        id: 1,
        name: "Sponsors",
        logo: "/LFC_LOGO.png",
        description:
          "Coming Soon...",
        website: "https://langarafr.ca",
      },
      
    ],
  },
};

export default sponsorsContent;
