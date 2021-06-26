import { Client } from "@notionhq/client";
import {
  Block,
  Filter,
  Page,
  Sort,
} from "@notionhq/client/build/src/api-types";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export const getPagesFromDatabase = async (
  databaseId: string,
  options?: {
    sorts: Sort[];
    filter: Filter;
  }
): Promise<Page[]> => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: options?.sorts,
    filter: options?.filter,
  });
  return response.results;
};

export const getPage = async (
  databaseId: string,
  slug: string
): Promise<Page | undefined> => {
  const { results } = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "slug",
      text: {
        equals: slug,
      },
    },
  });
  if (results.length === 0) return;
  const response = await notion.pages.retrieve({ page_id: results[0].id });
  return response;
};

export const getBlocks = async (blockId: string): Promise<Block[]> => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
