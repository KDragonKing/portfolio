interface Project {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  demoUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Liza Balizka's Portfolio",
    description:
      "The website was implemented and designed for the stylist Liza Balizka, who has more than 800 clients all over the world with pages such as About Me, My Values, Services, Products, and Reviews pages. Also, a localization was created in English and Ukrainian languages. Implemented by React, SCSS, and TypeScript. The data was parsed from JSON files. The website has a responsive design.",
    imageSrc: "/images/Stylist.jpeg",
    demoUrl: "https://stylist-lizabalizka.vercel.app/",
    codeUrl: "https://github.com/tinatripak/stylist_liza",
  },
  {
    id: 3,
    name: "KsiGallery",
    description:
      "This website is designed for a photographer as a personal portfolio. There you can view photo shoots made by this photographer and book a session right on the site. Check out the available types of photo shoots and transparent prices. Contact the photographer to ask any question you are interested in. The website was built using the MERN stack, and for storing photos in the database, I utilized Cloudinary.",
    imageSrc: "/images/Ksigallery.png",
    demoUrl: "https://ksigallery.vercel.app/",
    codeUrl: "https://github.com/tinatripak/photograph-portfolio-client",
  },
  {
    id: 4,
    name: "Liza Balizka's Business Card",
    description:
      "It's a small portfolio of a fashion stylist, as a personal business card with several projects. The web pages are built using React, TypeSript and SCSS for component styling.",
    imageSrc: "/images/BusinessCard.jpeg",
    demoUrl: "https://lizabalizka.vercel.app/",
    codeUrl: "https://github.com/tinatripak/personal_stylist",
  },
  {
    id: 5,
    name: "The Blog",
    description:
      "Poise web pages using a Wix template for inspiration with a responsive design using React, TypeScript, and SCSS. It has a Blog, About, and Contact pages. I extract the data from the created JSON file.",
    imageSrc: "/images/Blog.jpeg",
    demoUrl: "https://blog-tsx.vercel.app/",
    codeUrl: "https://github.com/tinatripak/blog_tsx",
  },
  {
    id: 6,
    name: "Auth Page",
    description:
      "A simple authorization form - sign in and sign up functions with a reponsive design using React, TypeScript, and SCSS.",
    imageSrc: "/images/Auth.jpeg",
    demoUrl: "https://auth-tsx.vercel.app/",
    codeUrl: "https://github.com/tinatripak/auth-tsx",
  },
  {
    id: 7,
    name: "BookStore Redux",
    description:
      "This project was creating using Redux and React libraries to store books with id, name, price, category and description values in json and manipulate data like add, update and delete using reducers.",
    imageSrc: "/images/BookStore.png",
    demoUrl: "https://bookstore-redux.vercel.app/",
    codeUrl: "https://github.com/tinatripak/BookStoreRedux",
  },
  {
    id: 8,
    name: "Harmony",
    description:
      "Discover and enjoy Ukrainian music on our convenient platform. Find artists, filter music and create personalized playlists. Discover your favorite songs and edit your profile. Immerse yourself in the bright world of Ukrainian melody! The site was built using the MERN stack, and I also used Firebase to authorize and store photos and music.",
    imageSrc: "/images/Harmony.png",
    demoUrl: "https://harmony-music-client.vercel.app/login",
    codeUrl: "https://github.com/tinatripak/HarmonyMusicClient",
  },
  {
    id: 9,
    name: "Bose App Design",
    description:
      "This is a one-page website with responsive design, navigation, a header consisting of a photo, menu, and text, a main block in the form of recommended products with prices, product categories, and a footer in the form of a photo. It was a project from the course. The web page was built using React.js library.",
    imageSrc: "/images/BoseApp.png",
    demoUrl: "https://bose-react.vercel.app/",
    codeUrl: "https://github.com/tinatripak/bose-react",
  },
];

export default projects;
