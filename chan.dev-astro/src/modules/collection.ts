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
