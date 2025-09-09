import type { Sponsor } from "../types/sponsor";

interface PageContent {
  title: string;
  description: string;
  clickPrompt: string;
  currentSponsorsTitle: string;
  previousSponsorsTitle: string;
}

interface TranslatedSponsors {
  pageContent: PageContent;
  currentSponsors: Sponsor[];
  previousSponsors: Sponsor[];
}

const sponsorsContent: Record<string, TranslatedSponsors> = {
  fr: {
    pageContent: {
      title: "Nos Généreux Sponsors et Partenaires",
      description:
        "Nous tenons à exprimer notre profonde gratitude envers nos sponsors et partenaires pour leur soutien inestimable. Grâce à leur générosité, nous pouvons continuer à promouvoir la langue et la culture françaises au sein de notre communauté.",
      clickPrompt:
        "Cliquez sur un logo pour en savoir plus sur nos merveilleux sponsors et partenaires.",
      currentSponsorsTitle: "Sponsors et Partenaires Actuels",
      previousSponsorsTitle: "Anciens Sponsors et Partenaires",
    },
    currentSponsors: [
      {
        id: 1,
        name: "Langara Modern Languages Department",
        logo: "/sponsors/langara_college.png",
        description:
          "Le Département des Langues Modernes de Langara College soutient activement notre club en fournissant des ressources et un espace pour nos activités. Ils jouent un rôle essentiel dans la promotion de l'apprentissage des langues sur le campus.",
        website:
          "https://students.langara.ca/departments/modern-languages/index.html",
      },
    ],
    previousSponsors: [
      {
        id: 2,
        name: "Alliance Française",
        logo: "/sponsors/alliancefrancaise_logo.jpeg",
        description:
          "L'Alliance Française est une organisation internationale dédiée à la promotion de la langue et de la culture françaises dans le monde. Ils ont soutenu notre mission de créer une communauté francophone dynamique.",
        website:
          "https://www.alliancefrancaise.ca/en/?gad_source=1&gad_campaignid=21202103474&gbraid=0AAAAADmuQtkTYJu1AKQk60yDtFdxjMfk5&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZsenkM6XSr187l5pRsJrlJmfp5v8C2QO2hjn_8-KHSWWsW_GCBwOuhoCIsMQAvD_BwE",
      },
      {
        id: 3,
        name: "Conseil de la Jeunesse Francophone de la C.-B.",
        logo: "/sponsors/cjfcb_logo.jpeg",
        description:
          "Le Conseil de la Jeunesse Francophone de la Colombie-Britannique représente et soutient les jeunes francophones de la province. Ils ont contribué au développement de notre communauté étudiante francophone.",
        website: "https://cjfcb.com/",
      },
    ],
  },
  en: {
    pageContent: {
      title: "Our Generous Sponsors & Partners",
      description:
        "We would like to express our deep gratitude to our sponsors and partners for their invaluable support. Thanks to their generosity, we can continue to promote the French language and culture within our community.",
      clickPrompt:
        "Click on a logo to learn more about our amazing sponsors and partners.",
      currentSponsorsTitle: "Current Sponsors & Partners",
      previousSponsorsTitle: "Previous Sponsors & Partners",
    },
    currentSponsors: [
      {
        id: 1,
        name: "Langara Modern Languages Department",
        logo: "/sponsors/langara_college.png",
        description:
          "The Langara College Modern Languages Department actively supports our club by providing resources and space for our activities. They play an essential role in promoting language learning on campus.",
        website:
          "https://students.langara.ca/departments/modern-languages/index.html",
      },
    ],
    previousSponsors: [
      {
        id: 2,
        name: "Alliance Française",
        logo: "/sponsors/alliancefrancaise_logo.jpeg",
        description:
          "Alliance Française is an international organization dedicated to promoting French language and culture worldwide. They supported our mission to create a vibrant francophone community.",
        website:
          "https://www.alliancefrancaise.ca/en/?gad_source=1&gad_campaignid=21202103474&gbraid=0AAAAADmuQtkTYJu1AKQk60yDtFdxjMfk5&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZsenkM6XSr187l5pRsJrlJmfp5v8C2QO2hjn_8-KHSWWsW_GCBwOuhoCIsMQAvD_BwE",
      },
      {
        id: 3,
        name: "Conseil de la Jeunesse Francophone de la C.-B.",
        logo: "/sponsors/cjfcb_logo.jpeg",
        description:
          "The Youth Council of Francophone British Columbia represents and supports young francophones in the province. They contributed to the development of our francophone student community.",
        website: "https://cjfcb.com/",
      },
    ],
  },
};

export default sponsorsContent;
