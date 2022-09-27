export const groupPortfolioItems = [
  {
    heading: "Wellbeing Toolkit",
    description:
      "App to assist fellow bootcampers with managing their wellbeing.",
    text: `1 week mid-course team project created in React with a node.js/express backend serving as a RESTful API, querying a PostgreSQL database.`,
    more: "<p>Tasked with creating a <strong>fullstack app</strong> to assist fellow bootcampers. We created a 'Wellbeing Toolkit' with a carousel of mindset resources and a wellbeing feedback form. We utilisied a <strong>React frontend</strong> and an <strong>express backend</strong> serving as a <strong>RESTful API</strong>, querying a <strong>postgreSQL database</strong>.</p><br /><p>I worked across the stack but was <strong>instrumental</strong> in the setup of the <strong>backend routes and models</strong> and using <strong>Jest to unit test our API</strong> functionality.</p>",
    links: [
      { text: "demo", url: "https://soc-wellbeing-toolkit.netlify.app" },
      {
        text: "code",
        url: "https://github.com/AlphaPentagon/wellbeing_toolkit_frontend",
      },
    ],
    img_url: "/images/wellbeing_toolkit.png",
    alt_text: "",
  },
  {
    heading: "SkillEx",
    description: "Free skill sharing app which connects teachers and learners.",
    text: "4 week final course team project built in Next.js for both frontend and backend, using Auth0 for authentication and employing Prisma to query a PostgreSQL database.",
    more: "<p>Tasked with creating a <strong>solution</strong> to a <strong>real life problem</strong>, we addressed the issue of expensive and inaccessible education and created a free skill sharing app to connect teachers and learners. We used <strong>Next.js</strong> as our <strong>frontend and backend framework</strong>, taking advantage of inbuilt features such as <strong>dynamic page routing, serverside rendering and the inbuilt API</strong>.</p><br /><p>I worked across the stack but I am <strong>especially proud</strong> of my work with <strong>integrating and troubleshooting Prisma</strong>, which we used to overcome a blocker of connecting to our database.</p>",
    links: [
      { text: "demo", url: "https://skill-ex.vercel.app/" },
      {
        text: "code",
        url: "https://github.com/AlphaPentagon/skillEx-final-project",
      },
    ],
    img_url: "/images/skillEx.png",
    alt_text: "",
  },
];

export const soloPortfolioItems = [
  {
    heading: "Thought Diary",
    description:
      "A fullstack Thought Diary app for people to log and view their thoughts.",
    text: "A React frontend using Bootstrap for styling, with an Express backend and a MongoDB database.",
    more: "<p>I really enjoyed this challenge and the subject matter (mental health) is something I am <strong>passionate</strong> about.  I had never used <strong>Bootstrap</strong> or <strong>MongoDB</strong> before, so it pushed me out of my comfort zone and allowed me to explore new tech.</p><br /><p>Specific <strong>challenges</strong> I overcame were: creating a <strong>multistep form</strong> (achieved using the useState() hook), communicating with my DB from the <strong>deployed backend</strong> (solved by adding the apps IP addresses to the allowed list in MongoDB) and <strong>customising Bootstrap</strong> (achieved by using a custom <strong>SASS</strong> file and CSS classes).</p>",
    links: [
      { text: "demo", url: "https://thought-diary.netlify.app/" },
      { text: "code", url: "https://github.com/AlphaPentagon/thought_diary" },
    ],
    img_url: "/images/thought_diary.png",
    alt_text: "",
  },
  {
    heading: "Fantasy Memory Game",
    description:
      "A fantasy themed memory game built with React, Typescript and Styled Components.",
    text: "Built over a few days as a challenge to myself to learn Typescript and create a game from scratch without the use of tutorials.",
    more: "<p>I found the transition from <strong>Javascript to Typescript</strong> a bit challenging at first, but eventually found my feet after <strong>reading the docs</strong> and enjoyed the benefits of having to deal with less bugs in my code.</p><br/><p>It was also my first time using <strong>Styled Components</strong> and I really enjoyed using them. Inititally I thought having my styling located within my JS file would be messy, but actually I found it very <strong>readable and neat</strong>.  I especially liked being able to use <strong>props for dynamic styling</strong>.</p>  ",
    links: [
      {
        text: "demo",
        url: "https://fantasy-memory-game.netlify.app/",
      },
      {
        text: "code",
        url: "https://github.com/AlphaPentagon/memory_game",
      },
    ],
    img_url: "/images/memory_game.png",
    alt_text: "",
  },
  {
    heading: "Portfolio website",
    description:
      "This portfolio website, to showcase myself and my coding journey.",
    text: "Built using React components, styled using custom CSS modules, wireframes designed in figma - this was a great way to solidify my understanding of frontend development.",
    more: "",
    links: [
      { text: "code", url: "https://github.com/AlphaPentagon/portfolio" },
    ],
    img_url: "/images/portfolio_site.png",
    alt_text: "",
  },
];
