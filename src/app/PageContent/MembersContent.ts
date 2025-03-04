const currentExecPath = "/executives/current";

const MembersContent = {
  en: {
    currentExecsTitle: "Current Club Leaders",
    oldExecsTitle: "Former Club Leaders",
    teamIntro: "Here is our amazing team!",
    close: "Close",
    clubFounders: [
      {
        name: "Aurora Miller",
        role: "Vice-President & co-founder",
        bio: "Aurora, the Vice-President and Co-Founder of the Langara French Club, played a key role in standardizing procedures and driving innovative initiatives. Always multitasking with ease, you’ll often find her sipping coffee, engrossed in a book, checking in with members, and crafting the next to-do list—all at the same time! ",
        imageUrl: `${currentExecPath}/aurora.webp`,
      },
      {
        name: "Amar Ulziisaikhan",
        role: "President & co-founder",
        bio: "As President of the club, Amar is our dynamic guiding force who helped lay the very foundation of our club. With his disciplined passion for jujutsu and his innovative mindset, Amar effortlessly blends strategic leadership with a spirit of adventure. Whether he’s spearheading new initiatives or energizing members with his unique flair, Amar ensures our club remains as spirited and forward-thinking as ever.",
        imageUrl: `${currentExecPath}/amar.webp`,
      },
      {
        name: "Joseph Farrage",
        role: "Head of events & co-founder",
        bio: "As Head of Events and Co-founder, Joseph is the beating heart of our workshops and outings at Langara French Club. He oversees our entire events team and makes sure that each of our events are enjoyable and educational. Always ready to plan our next event and quick to crack a joke, Joseph is on the job.",
        imageUrl: `${currentExecPath}/joseph.webp`,
      },
    ],
    currentExecs: [
      {
        name: "Axel Velasquez",
        role: "Head of IT",
        bio: "As Head of IT, Axel ensures that all technological aspects of the French Club run smoothly, including building this very website! A passionate and driven Computer Science student, he brings energy, expertise, and a can-do attitude to every project he takes on. ",
        imageUrl: `${currentExecPath}/axel.webp`,
      },
      {
        name: "Kareena Mistry",
        role: "Activity Planner",
        bio: "As our Activity Planner, Kareena ensures every event runs seamlessly for our members. With her cheerful spirit, dedication, and keen eye for detail, she works tirelessly to create well-organized and engaging activities for everyone to enjoy. ",
        imageUrl: `${currentExecPath}/kareena.webp`,
      },
      {
        name: "Yannis Stefanyan ",
        role: "Marketing Assistant",
        bio: "Yannis, our hardworking and friendly marketing assistant, brings dedication and warmth to our team. With a keen eye for detail and a positive attitude, he plays a key role in making our marketing efforts a success.  ",
        imageUrl: `${currentExecPath}/yanis.webp`,
      },
      {
        name: "Lisa Maura",
        role: "Events Assistant",
        bio: "Lisa is a vibrant and energetic computer science student who is one of our event assistants. A true social butterfly, you can find her coding at one moment and then making her latest batch of baked goods the next. ",
        imageUrl: `${currentExecPath}/lisa.webp`,
      },
      {
        name: "Emujin Gantulga",
        role: "Events Assistant",
        bio: "Emma, our social and outgoing event assistant, is always on top of things. She is a free spirit whose responsibility and enthusiasm make her a key player in ensuring every event runs smoothly.",
        imageUrl: `${currentExecPath}/ema.webp`,
      },
      {
        name: "Duncan",
        role: "Events Assistant",
        bio: "Duncan brings enthusiasm and energy to the events team. Always ready to lend a hand, he ensures that every event is engaging and well-organized. With his problem-solving skills and friendly attitude, he is a key part of our events crew.",
        imageUrl: `${currentExecPath}/duncan.webp`,
      },
      {
        name: "Hamed Pourkerman",
        role: "Events Assistant",
        bio: "Hamed Pourkerman, one of the earliest members of our team, is a fun and inquisitive event assistant who brings curiosity and enthusiasm to every task. Always eager to learn and engage, he adds a liveliness to our events.",
        imageUrl: `${currentExecPath}/hamed.webp`
      },
      {
        name: "Scarlett Abagi",
        role: "Marketing Assistant",
        bio: "As the Marketing Assistant of the Langara French Club, Scarlett Abagi is the creative spark behind our captivating campaigns. With an eye for innovative design and a passion for French culture, she crafts engaging materials that draw new members and energize our community. Her fresh perspective and strategic approach ensure that every initiative resonates with our vibrant spirit.",
        imageUrl: `${currentExecPath}/scarlett.webp`,
      },
      {
        name: "Chiheb Ben Arbia",
        role: "Treasurer",
        bio: "As the Treasurer of the Langara French Club, Chiheb Ben Arbia is the cornerstone of our financial stability, ensuring every resource is managed with precision and care. Beyond his role in balancing our books, his passion for language shines through as he serves as a dedicated French tutor, inspiring our members with his expertise and enthusiasm. His blend of fiscal responsibility and linguistic insight makes him an invaluable pillar of our community.",
        imageUrl: `${currentExecPath}/chiheb.webp`,
      },
    ],
    oldExecs: [],
  },
  fr: {
    currentExecsTitle: "Dirigeants Actuels du Club",
    oldExecsTitle: "Anciens Dirigeants du Club",
    teamIntro: "Voici notre équipe incroyable !",
    close: "Fermer",
    clubFounders: [
      {
        name: "Aurora Miller",
        role: "Vice-présidente & cofondatrice",
        bio: "Aurora, vice-présidente et cofondatrice du Langara French Club, a joué un rôle clé dans la normalisation des procédures et la mise en place d'initiatives innovantes. Toujours multitâches, vous la trouverez souvent en train de siroter un café, de lire un livre, de prendre des nouvelles des membres et de dresser la prochaine liste de choses à faire - tout cela en même temps !",
        imageUrl: `${currentExecPath}/aurora.webp`,
      },
      {
        name: "Amar Ulziisaikhan",
        role: "Président & cofondateur",
        bio: "En tant que président du club, Amar est notre force motrice dynamique qui a joué un rôle clé dans la création du club. Avec sa passion disciplinée pour le jujutsu et son esprit innovant, Amar allie avec aisance leadership stratégique et esprit d'aventure. Qu'il soit à l'initiative de nouvelles propositions ou qu'il insuffle son énergie unique aux membres, Amar veille à ce que notre club reste toujours aussi passionné et tourné vers l'avenir.",
        imageUrl: `${currentExecPath}/amar.webp`,
      },
      {
        name: "Joseph Farrage",
        role: "Responsable des événements & cofondateur",
        bio: " En tant que responsable des événements et cofondateur, Joseph est le cœur battant de nos ateliers et sorties au Club de Français de Langara. Il supervise l'ensemble de notre équipe événementielle et s'assure que chacun de nos événements est agréable et éducatif. Toujours prêt à planifier notre prochain événement et prompt à faire des blagues, Joseph est au travail. ",
        imageUrl: `${currentExecPath}/joseph.webp`,
      },
    ],
    currentExecs: [
      {
        name: "Axel Velasquez",
        role: "Responsable informatique",
        bio: " En tant que responsable informatique, Axel s'assure que tous les aspects technologiques du Club de français fonctionnent bien, y compris la construction de ce site web ! Etudiant en informatique passionné et motivé, il apporte son énergie, son expertise et une attitude positive à chaque projet qu'il entreprend.",
        imageUrl: `${currentExecPath}/axel.webp`,
      },
      {
        name: "Kareena Mistry",
        role: "Planificatrice d'activités",
        bio: "En tant que planificatrice d'activités, Kareena veille à ce que chaque événement se déroule sans accroc pour nos membres. Avec son esprit joyeux, son dévouement et son sens aigu du détail, elle travaille sans relâche pour créer des activités bien organisées et attrayantes dont tout le monde peut profiter. ",
        imageUrl: `${currentExecPath}/kareena.webp`,
      },
      {
        name: "Yannis Stefanyan",
        role: "Assistant marketing",
        bio: "Yannis, notre assistant marketing, travailleur et sympathique, apporte dévouement et chaleur à notre équipe. Avec un sens aigu du détail et une attitude positive, il joue un rôle clé dans la réussite de nos efforts de marketing. ",
        imageUrl: `${currentExecPath}/yanis.webp`,
      },
      {
        name: "Lisa Maura",
        role: "Assistante événements",
        bio: "Lisa est une étudiante en informatique dynamique et énergique qui est l'une de nos assistantes événementielles. Véritable papillon social, vous pouvez la trouver en train de coder à un moment donné, puis en train de préparer sa dernière fournée de pâtisseries le lendemain. ",
        imageUrl: `${currentExecPath}/lisa.webp`,
      },
      {
        name: "Emujin Gantulga",
        role: "Assistante événements",
        bio: "Emma, notre assistante événementielle, sociable et extravertie, est toujours à la pointe de l'actualité. C'est un esprit libre dont la responsabilité et l'enthousiasme font d'elle un acteur clé du bon déroulement de chaque événement. ",
        imageUrl: `${currentExecPath}/ema.webp`,
      },
      {
        name: "Duncan",
        role: "Assistant événements",
        bio: "Duncan apporte son enthousiasme et son énergie à l’équipe événementielle. Toujours prêt à donner un coup de main, il veille à ce que chaque événement soit captivant et bien organisé. Grâce à son sens de la résolution des problèmes et à son attitude amicale, il joue un rôle essentiel dans notre équipe.",
        imageUrl: `${currentExecPath}/duncan.webp`,
      },
      {
        name: "Hamed Pourkerman",
        role: "Assistant événements",
        bio: "Hamed Pourkerman, l'un des premiers membres de notre équipe, est un assistant événementiel amusant et curieux qui apporte de la curiosité et de l'enthousiasme à chaque tâche. Toujours désireux d'apprendre et de s'impliquer, il ajoute de la vivacité à nos événements.",
        imageUrl: `${currentExecPath}/hamed.webp`
      },
      {
        name: "Scarlett Abagi",
        role: "Assistante marketing ",
        bio: "En tant qu'assistante marketing du Langara French Club, Scarlett Abagi est l'étincelle créative derrière nos campagnes captivantes. Dotée d'un œil pour le design innovant et d'une passion pour la culture française, elle conçoit des supports engageants qui attirent de nouveaux membres et dynamisent notre communauté. Sa perspective novatrice et son approche stratégique garantissent que chaque initiative reflète l'esprit vibrant du club.",
        imageUrl: `${currentExecPath}/scarlett.webp`,
      },
      {
        name: "Chiheb Ben Arbia",
        role: "Trésorier",
        bio: "En tant que trésorier du Langara French Club, Chiheb Ben Arbia est le garant de notre stabilité financière, veillant à ce que chaque ressource soit utilisée avec précision et discernement. En plus de ses compétences en gestion, Chiheb partage sa passion pour la langue en tant que tuteur de français, guidant et inspirant nos membres à travers son expertise linguistique. Sa rigueur et son engagement font de lui un pilier essentiel de notre communauté.",
        imageUrl: `${currentExecPath}/chiheb.webp`,
      },
    ],
    oldExecs: [],
  },
};

export default MembersContent;
