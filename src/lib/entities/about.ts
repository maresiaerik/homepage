import * as Contentful from "contentful";
import { flattenResponseEntriesToFields, getContentfulClient } from "../services/contentful";

export type About = {
  id: Contentful.BaseSys["id"];
  description: Contentful.EntryFields.RichText;
  profilePicture: Contentful.EntryFields.AssetLink;
  currentLocation: Contentful.EntryFields.Text;
};

export const getAbout = async (): Promise<About> => {
  const client = getContentfulClient();

  return flattenResponseEntriesToFields<About>(
    await client.getEntries({
      content_type: "about",
    }),
  )[0];
};
