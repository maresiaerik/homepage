import * as Contentful from "contentful";

import { flattenResponseEntriesToFields, getContentfulClient } from "../services/contentful";

export type Skill = {
  [skill: string]: number;
};

type SkillsResponse = {
  id: Contentful.EntrySys["id"];
  skills: Contentful.EntryFields.Object<Skill>;
};

export type Skills = SkillsResponse["skills"];

export const getSkills = async (): Promise<Skills> => {
  const client = getContentfulClient();

  return flattenResponseEntriesToFields<SkillsResponse>(
    await client.getEntries({
      content_type: "skillsList",
    }),
  )[0].skills;
};
