import { EntryCollection, createClient, EntryFields, Entry } from "contentful";

export const getContentfulClient = () =>
  createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  });

const transformContentfulResponseEntryToStandardFormat = <TData>(entry: Entry): TData => {
  return {
    ...(entry.fields as TData),
    id: entry.sys.id,
  };
};

export const flattenResponseEntriesToFields = <TData>(response: EntryCollection<any>): TData[] => {
  const data: TData[] = [];

  response.items.forEach((entry: Entry) =>
    data.push(transformContentfulResponseEntryToStandardFormat<TData>(entry)),
  );

  return data;
};

export const flattenResponseEntryToFields = <TData>(response: Entry) => {
  return transformContentfulResponseEntryToStandardFormat<TData>(response);
};

export const getFormattedContentfulDate = (date: EntryFields.Date): string => {
  const asDateObject = new Date(date);

  const month = asDateObject.getMonth() + 1;
  const monthWithLeadingZeron = month < 10 ? `0${month}` : month;

  return `${monthWithLeadingZeron}/${asDateObject.getFullYear()}`;
};
