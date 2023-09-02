import * as Contentful from "contentful";

import { flattenResponseEntriesToFields, getContentfulClient } from "../services/contentful";

export type EducationItemResponse = {
  id: Contentful.BaseSys["id"];
  universityName: Contentful.EntryFields.Text;
  url?: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.RichText;
  startDate: Contentful.EntryFields.Date;
  endDate?: Contentful.EntryFields.Date;
  location: Contentful.EntryFields.Text;
  degree: Contentful.EntryFields.Text;
  isCertificate: Contentful.EntryFields.Boolean;
};

export type EducationItem = {
  universities: EducationItemResponse[];
  certificates: EducationItemResponse[];
};

const sortEducationItemsByStartDate = (items: EducationItemResponse[]): EducationItemResponse[] => {
  // @ts-ignore
  return items.sort(
    (firstItem, secondItem) =>
      // @ts-ignore
      new Date(secondItem.startDate) - new Date(firstItem.startDate),
  );
};

const separateUniversitiesFromCertificates = (response: EducationItemResponse[]): EducationItem => {
  const educationItem: EducationItem = {
    certificates: [],
    universities: [],
  };

  response.forEach((item: EducationItemResponse) => {
    if (item.isCertificate) {
      educationItem.certificates.push(item);
    } else {
      educationItem.universities.push(item);
    }
  });

  return educationItem;
};

export const getEducation = async (): Promise<EducationItem> => {
  const client = getContentfulClient();

  const flattenedResponse = flattenResponseEntriesToFields<EducationItemResponse>(
    await client.getEntries({
      content_type: "education",
    }),
  );

  return separateUniversitiesFromCertificates(sortEducationItemsByStartDate(flattenedResponse));
};
