export const portfolio = [
  {
    name: "Collectable Moments",
    bio:
      "A simple daily memory app built with Typescript, React, with a Rails API. Hosted on Netlify and a DigitalOcean droplet. Has CI/CD workflow with Semantic versioning for release notes utilizing Github Actions while using Cypress for testing. Also, has an action to publish changes to Slack channel for collaboration.",
    website: "https://collectablemoments.com",
    frontend: "https://github.com/denvermullets/collectable-moments",
    backend: "https://github.com/denvermullets/collectable-moments-api",
    image: "/images/animations/collectable-moments.png",
  },
  {
    name: "99 Staples",
    bio:
      "A Magic: The Gathering collection app built with Typescript, React, Ruby on Rails API. Hosted on Render using Sidekiq, REDIS, and a Postgresql database. A worker keeps the current database of cards up to date and also adds basic current pricing info. Has CI/CD actions to handle merging and generating release notes.",
    website: "https://waxchromatics.com",
    frontend: "https://github.com/denvermullets/ninetynine-staples-front-end",
    backend: "https://github.com/denvermullets/ninetynine-staples",
    image: "/images/animations/99staples.png",
  },
  {
    name: "Mentumm (freelance)",
    bio:
      "Career coach booking service. Built using Typescript, React, and uses a Nodejs, Express, REST API on the backend. Admin dashboard was built with ReTool and also uses Mixpanel to track events for reporting.",
    website: "https://portal.mentumm.com/",
    image: "/images/animations/mentumm.png",
  },
  {
    name: "Joberino",
    bio:
      "A Ruby on Rails job scraper that pull from the last 24hrs while avoiding duplicates based on company and job title. Allows users to ignore job postings and mark as applied for followup later.",
    website: "",
    frontend: "https://github.com/denvermullets/joberino",
    buttonTitle: "Rails Repo",
    image: "/images/animations/joberino_updated.png",
  },

  {
    name: "Wax Chromatics",
    bio:
      "Vinyl record collection management app built with React.js while using a Ruby on Rails API backend. Users do not need to have an existing Discogs account, but you will be able to authenticate via OAuth 1.0. User login info is handled using JWT. Current frontend is using Semantic UI",
    website: "https://waxchromatics.com",
    frontend: "https://github.com/denvermullets/wax-chromatic-react",
    backend: "https://github.com/denvermullets/wax-chromatic-api",
    image: "/images/animations/waxchromatics.png",
  },
  {
    name: "Text-ray",
    bio:
      "A Javascript and CSS game based on the NY Times Spelling Bee. Uses Dictionary.com API to check validity of word on game creation.",
    website: "",
    frontend: "https://github.com/denvermullets/text-ray-front-end",
    backend: "https://github.com/denvermullets/text-ray-backend",
    image: "/images/animations/textray.png",
  },
];
