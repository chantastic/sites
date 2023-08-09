// swiped from: https://stackoverflow.com/a/27728417
const rx =
  /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

export const getIdFromURL = (url: string): string => {
  return url.match(rx)?.[1] ?? "";
};

// function that determines if video is a short or not
export const isURLForShort = (url: string): boolean => {
  return url.match(/shorts/) !== null;
};
