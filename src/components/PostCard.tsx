import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export const PostCard = (post: Post) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
        >
          {post.title}
        </Link>
      </h2>
      <time
        dateTime={post.date}
        className="mb-2 block text-xs text-gray-600 dark:text-gray-400"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
};
