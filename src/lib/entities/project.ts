import * as Contentful from "contentful";
import {
  flattenResponseEntriesToFields,
  flattenResponseEntryToFields,
  getContentfulClient,
} from "../services/contentful";

type LinkType = "Github" | string;
export type ProgrammingLanguage =
  | "typescript"
  | "python"
  | "nextjs"
  | "r"
  | "css"
  | "react"
  | "redux";

export type Project = {
  id: Contentful.BaseSys["id"];
  workName: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.RichText;
  linkType: Contentful.EntryFields.Symbol<LinkType>;
  link: Contentful.EntryFields.Text;
  summary: Contentful.EntryFields.Text;
  languagesUsed?: Contentful.EntryFields.Array<ProgrammingLanguage>;
  hostedUrl?: Contentful.EntryFields.Text;
};

export const getWork = async (): Promise<Project[]> => {
  const client = getContentfulClient();

  return flattenResponseEntriesToFields<Project>(
    await client.getEntries({
      content_type: "work",
    }),
  );
};

export const getWorkById = async (workId: string): Promise<Project> => {
  const client = getContentfulClient();

  return flattenResponseEntryToFields<Project>(await client.getEntry(workId));
};
