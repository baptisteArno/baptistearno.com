import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "image", required: true },
    description: { type: "string", required: true },
    isDraft: { type: "boolean", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    imageUrl: {
      type: "string",
      resolve: (post) => `/images/${post.image.filePath.split("/").at(-1)}`,
    },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
