import { CollectionEntry } from "astro:content";

export function compareByDate(aDate: date, bDate: date) {
  return new Date(bDate).getTime() - new Date(aDate).getTime();
}
