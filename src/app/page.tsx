import { SocialLinks } from "@/components/SocialLinks";
import { allPosts } from "contentlayer/generated";
import "cal-sans";
import { compareDesc } from "date-fns";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = allPosts
    .filter((post) => !post.isDraft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">Hey, I&apos;m Baptiste Arnaud 👋</h1>
      <p>
        I am a software engineer, founder of{" "}
        <a
          href={"https://typebot.io"}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 font-semibold"
        >
          Typebot
        </a>
        , an open source chatbot builder. This is my personal blog where I share
        what I learn along the way.
      </p>
      <div className="flex items-center gap-4">
        <span>Social links:</span>
        <SocialLinks />
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
