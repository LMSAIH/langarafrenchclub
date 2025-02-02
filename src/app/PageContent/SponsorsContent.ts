
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
      title: "Nos Généreux Sponsors",
      description:
        "Nous tenons à exprimer notre profonde gratitude envers nos sponsors pour leur soutien inestimable. Grâce à leur générosité, nous pouvons continuer à promouvoir la langue et la culture françaises au sein de notre communauté.",
      clickPrompt: "Cliquez sur un logo pour en savoir plus sur nos merveilleux sponsors.",
    },
    sponsors: [
      {
        id: 1,
        name: "Café Parisien",
        logo: "/CONSAR1.jpg",
        description:
          "Café Parisien est fier de soutenir le Club Français de Langara. Nous partageons la passion de la culture française et sommes ravis de contribuer à son rayonnement au sein de la communauté étudiante.",
        website: "https://www.cafeparisien.com",
      },
      {
        id: 2,
        name: "Librairie Française",
        logo: "/CONSAR1.jpg",
        description:
          "La Librairie Française est heureuse de participer à l'enrichissement culturel des étudiants du Club Français de Langara en fournissant des ressources littéraires en langue française.",
        website: "https://www.librairiefrancaise.com",
      },
      {
        id: 3,
        name: "Alliance Française",
        logo: "/CONSAR1.jpg",
        description:
          "L'Alliance Française soutient avec enthousiasme les initiatives du Club Français de Langara, contribuant ainsi à la promotion de la langue et de la culture françaises.",
        website: "https://www.alliancefrancaise.com",
      },
      {
        id: 4,
        name: "Pâtisserie Élégante",
        logo: "/CONSAR1.jpg",
        description:
          "Pâtisserie Élégante est ravie de partager la douceur de la gastronomie française avec les membres du Club Français de Langara à travers nos délicieuses pâtisseries.",
        website: "https://www.patisserieelegante.com",
      },
    ],
  },
  en: {
    pageContent: {
      title: "Our Generous Sponsors",
      description:
        "We would like to express our deep gratitude to our sponsors for their invaluable support. Thanks to their generosity, we can continue to promote the French language and culture within our community.",
      clickPrompt: "Click on a logo to learn more about our amazing sponsors.",
    },
    sponsors: [
      {
        id: 1,
        name: "Parisian Café",
        logo: "/CONSAR1.jpg",
        description:
          "Parisian Café is proud to support the Langara French Club. We share a passion for French culture and are delighted to contribute to its presence within the student community.",
        website: "https://www.cafeparisien.com",
      },
      {
        id: 2,
        name: "French Bookstore",
        logo: "/CONSAR1.jpg",
        description:
          "The French Bookstore is happy to contribute to the cultural enrichment of Langara French Club students by providing literary resources in the French language.",
        website: "https://www.librairiefrancaise.com",
      },
      {
        id: 3,
        name: "Alliance Française",
        logo: "/CONSAR1.jpg",
        description:
          "The Alliance Française enthusiastically supports the initiatives of the Langara French Club, contributing to the promotion of the French language and culture.",
        website: "https://www.alliancefrancaise.com",
      },
      {
        id: 4,
        name: "Elegant Pastry",
        logo: "/CONSAR1.jpg",
        description:
          "Elegant Pastry is delighted to share the sweetness of French gastronomy with Langara French Club members through our delicious pastries.",
        website: "https://www.patisserieelegante.com",
      },
    ],
  },
};

export default sponsorsContent;
