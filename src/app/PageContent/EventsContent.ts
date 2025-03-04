const eventsPath = '/events'

const EventsContent = {
  en: {
    title: "Our Past Events",
    categories: ["All", "Culture", "Cuisine", "Community"],
    events: [
      {
        id: 1,
        title: "Langara French Club Opening Event",
        date: "September 24, 2024",
        description: "Our first event featuring French learning games, culture quizzes, and pastries! Over 30 attendees joined us.",
        imageUrl: `${eventsPath}/first_event.webp`,
        category: "Culture",
      },
      {
        id: 2,
        title: "Movie Night - The Adventures of Tintin",
        date: "October 10, 2024",
        description: "A screening of one of the most classic French animated films.",
        imageUrl: `${eventsPath}/tintin_event.webp`,
        category: "Culture",
      },
      {
        id: 3,
        title: "Halloween Workshop",
        date: "October 24, 2024",
        description: "Spooky season fun with games and free food!",
        imageUrl: `${eventsPath}/halloween_event.webp`,
        category: "Community",
      },
      {
        id: 4,
        title: "Movie Night - Asterix and Obelix",
        date: "November 7, 2024",
        description: "A fun screening of Asterix and Obelix with food and drinks provided.",
        imageUrl: `${eventsPath}/Asterix_event.webp`,
        category: "Culture",
      },
      {
        id: 5,
        title: "Restaurant Workshop",
        date: "November 26, 2024",
        description: "Learn how to order food like a Parisian and practice your French!",
        imageUrl: `${eventsPath}/restaurantWorkshop_event.webp`,
        category: "Cuisine",
      },
      {
        id: 6,
        title: "Café Salade de Fruits",
        date: "November 27, 2024",
        description: "Our closing event featuring a full-course French dinner.",
        imageUrl: `${eventsPath}/restaurant_event.webp`,
        category: "Cuisine",
      },
      {
        id: 7,
        title: "First Spring Event",
        date: "January 15, 2025",
        description: "Meet fellow French learners, play games, and enjoy delicious food!",
        imageUrl: `${eventsPath}/firstspring_event.webp`,
        category: "Community",
      },
      {
        id: 8,
        title: "What the Weather? Workshop",
        date: "January 28, 2025",
        description: "Practice your French in a friendly environment with all levels welcome!",
        imageUrl: `${eventsPath}/whattheweather_event.webp`,
        category: "Community",
      },
      {
        id: 9,
        title: "Crepe Making Workshop/Valentines Fair",
        date: "February 14, 2025",
        description: "Enjoy making crêpes and celebrating Valentine's Day with fun games!",
        imageUrl: `${eventsPath}/valentinesday_event.webp`,
        category: "Cuisine",
      },
      {
        id: 10,
        title: "French History Workshop",
        date: "March 5, 2025",
        description: "Dive into French history and enjoy some cake!",
        imageUrl: `${eventsPath}/frenchHistory_event.webp`,
        category: "Culture",
      },
      {
        id: 11,
        title: "Festival Du Bois Outing",
        date: "March 7, 2025",
        description: "A social gathering at Festival du Bois to meet and chat in French!",
        imageUrl: `${eventsPath}/6franco8_event.webp`,
        category: "Community",
      }
    ]
  },
  fr: {
    title: "Nos Événements Passés",
    categories: ["Tous", "Culture", "Cuisine", "Communauté"],
    events: [
      {
        id: 1,
        title: "Ouverture du club français de Langara",
        date: "24 septembre 2024",
        description: "Notre premier événement avec des jeux d'apprentissage du français, des quiz culturels et des pâtisseries ! Plus de 30 participants ont assisté.",
        imageUrl: `${eventsPath}/first_event.webp`,
        category: "Culture",
      },
      {
        id: 2,
        title: "Soirée cinéma - Les Aventures de Tintin",
        date: "10 Octobre 2024",
        description: "Une projection de l'un des dessins animés français les plus classiques.",
        imageUrl: `${eventsPath}/tintin_event.webp`,
        category: "Culture",
      },
      {
        id: 3,
        title: "Atelier Halloween",
        date: "24 octobre 2024",
        description: "Une saison effrayante avec des jeux et de la nourriture gratuite !",
        imageUrl: `${eventsPath}/halloween_event.webp`,
        category: "Communauté",
      },
      {
        id: 4,
        title: "Soirée cinéma - Astérix et Obélix",
        date: "7 novembre 2024",
        description: "Une projection amusante d'Astérix et Obélix avec de la nourriture et des boissons fournies.",
        imageUrl: `${eventsPath}/Asterix_event.webp`,
        category: "Culture",
      },
      {
        id: 5,
        title: "Atelier de restauration",
        date: "26 novembre 2024",
        description: "Apprenez à commander comme un Parisien et pratiquez votre français !",
        imageUrl: `${eventsPath}/restaurantWorkshop_event.webp`,
        category: "Cuisine",
      },
      {
        id: 6,
        title: "Café Salade de Fruits",
        date: "27 novembre 2024",
        description: "Notre événement de clôture avec un dîner français complet.",
        imageUrl: `${eventsPath}/restaurant_event.webp`,
        category: "Cuisine",
      },
      {
        id: 7,
        title: "Premier événement de printemps",
        date: "15 janvier 2025",
        description: "Rencontrez des apprenants de français, jouez à des jeux et dégustez de la nourriture !",
        imageUrl: `${eventsPath}/firstspring_event.webp`,
        category: "Communauté",
      },
      {
        id: 8,
        title: "Quel temps fait-il ? Atelier",
        date: "28 janvier 2025",
        description: "Pratiquez votre français dans un environnement convivial, tous niveaux bienvenus !",
        imageUrl: `${eventsPath}/whattheweather_event.webp`,
        category: "Communauté",
      },
      {
        id: 9,
        title: "Atelier de fabrication de crêpes/Foire de la Saint-Valentin",
        date: "14 février 2025",
        description: "Participez à la fabrication de crêpes et à la fête de la Saint-Valentin !",
        imageUrl: `${eventsPath}/valentinesday_event.webp`,
        category: "Cuisine",
      },
      {
        id: 10,
        title: "Atelier d'histoire de France",
        date: "5 mars 2025",
        description: "Voyagez à travers l'histoire de France et dégustez du gâteau !",
        imageUrl: `${eventsPath}/frenchHistory_event.webp`,
        category: "Culture",
      },
      {
        id: 11,
        title: "Festival Du Bois",
        date: "7 mars 2025",
        description: "Un rassemblement social au Festival du Bois pour discuter en français !",
        imageUrl: `${eventsPath}/6franco8_event.webp`,
        category: "Communauté",
      }
    ]
  }
};

  
  export default EventsContent
  