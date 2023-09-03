import * as Contentful from "contentful";

import {
  flattenResponseEntriesToFields,
  flattenResponseEntryToFields,
  getContentfulClient,
} from "../services/contentful";

export type Blog = {
  id: Contentful.BaseSys["id"];
  title: Contentful.EntryFields.Text;
  content: Contentful.EntryFields.Text;
};

export const getBlogPosts = async (): Promise<Blog[]> => {
  const client = getContentfulClient();

  return flattenResponseEntriesToFields<Blog>(
    await client.getEntries({
      content_type: "blog",
    }),
  );
};

export const getBlogPostById = async (blogId: string): Promise<Blog> => {
  const client = getContentfulClient();

  return flattenResponseEntryToFields<Blog>(await client.getEntry(blogId));
};
