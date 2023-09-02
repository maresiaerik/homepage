import * as Contentful from "contentful";

import { flattenResponseEntriesToFields, getContentfulClient } from "../services/contentful";

export type WorkType = "Full-time" | "Part-time" | "Contract" | "Internship";

export type WorkExperience = {
  id: Contentful.BaseSys["id"];
  workType: Contentful.EntryFields.Symbol<WorkType>;
  companyName: Contentful.EntryFields.Text;
  companyUrl?: Contentful.EntryFields.Text;
  role: Contentful.EntryFields.Text;
  roleDescription: Contentful.EntryFields.RichText;
  companyImage?: Contentful.EntryFields.AssetLink;
  startDate: Contentful.EntryFields.Date;
  endDate?: Contentful.EntryFields.Date;
  location: Contentful.EntryFields.Text;
};

const sortWorkExperienceItemsByStartDate = (items: WorkExperience[]): WorkExperience[] => {
  // @ts-ignore
  return items.sort(
    (firstItem, secondItem) =>
      // @ts-ignore
      new Date(secondItem.startDate) - new Date(firstItem.startDate),
  );
};

export const getWorkExperience = async (): Promise<WorkExperience[]> => {
  const client = getContentfulClient();

  const flattenedResponse = flattenResponseEntriesToFields<WorkExperience>(
    await client.getEntries({
      content_type: "company",
    }),
  );

  return sortWorkExperienceItemsByStartDate(flattenedResponse);
};
