// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import "cal-sans";
import Link from "next/link";

export const generateStaticParams = async () =>
  allPosts
    .filter((post) => !post.isDraft)
    .map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  const { title, url, imageUrl, date, description } = post;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <main>
      <nav>
        <Link href={"/"}>{"<"} home</Link>
      </nav>
      <article className="mx-auto max-w-2xl py-8">
        <div className="mb-8">
          <time
            dateTime={post.date}
            className="mb-1 text-xs text-gray-600 dark:text-gray-400"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-3xl">{post.title}</h1>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </main>
  );
};

export default PostLayout;
