import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "Typebot",
    tags: ["SaaS", "Forms", "Builder"],
    description:
      "Conversational form builder: collect 4x more results compared to Typeform",
    url: "https://www.typebot.io",
    thumbnailPath: "/projects/typebot.png",
  },
  {
    name: "Jamhouse",
    tags: ["Hybrid app", "Music"],
    description:
      "Create a room, share the link with friends, and start listening to the same music. No music streaming account is required. It's 100% free.",
    url: "https://jamhouse.app",
    thumbnailPath: "/projects/jamhouse.png",
  },
  {
    name: "Wiki.Fashion",
    tags: ["Fashion", "Search"],
    description:
      "Women models directory where they have control on their profile",
    url: "https://wiki.fashion",
    thumbnailPath: "/projects/wiki-fashion.png",
  },
];

export const openSourceProjects: Project[] = [
  {
    name: "Tinking",
    tags: ["Web extension", "Scrapping"],
    description:
      "Extract data from any website without code, just clicks. Tinking is a web extension that allows you to create a scraping recipe by directly selecting a page's elements with your mouse.",
    url: "https://github.com/baptisteArno/tinking",
    thumbnailPath: "/projects/tinking.png",
  },
  {
    name: "Node Youtube Music",
    tags: ["Library", "API"],
    description: " Unofficial YouTube Music API for Node.js ",
    url: "https://github.com/baptisteArno/node-youtube-music",
    thumbnailPath: "/projects/node-youtube-music.png",
  },
];
