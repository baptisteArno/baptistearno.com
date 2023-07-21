import { TwitterIcon, GithubIcon, LinkedInIcon } from "./icons";

export const SocialLinks = () => (
  <div className="flex gap-2">
    <a
      href="https://twitter.com/baptistearno"
      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
    >
      <TwitterIcon />
    </a>
    <a
      href="https://github.com/baptistearno"
      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
    >
      <GithubIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/baptistearno/"
      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
    >
      <LinkedInIcon />
    </a>
  </div>
);
