type maybeDate = Date | undefined;

export function compareByDate(
  aDate: maybeDate,
  bDate: maybeDate
) {
  if (!aDate && !bDate) {
    return 0;
  }

  if (!aDate) {
    return -1;
  }

  if (!bDate) {
    return 1;
  }

  return new Date(bDate).getTime() - new Date(aDate).getTime();
}

export type maybeString = string | undefined;

export function constructPathFromSegments(
  ...segments: maybeString[]
) {
  return segments.filter(Boolean).join("/");
}

export function prefixCollectionTitle(collectionName: String) {
  return `chantastic ${collectionName}`;
}

export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions | undefined = {
    dateStyle: "medium",
  }
) {
  return date.toLocaleString("en-US", options);
}
