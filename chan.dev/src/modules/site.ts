import site from "#/metadata.json";

export function url(path: string = "") {
  return new URL(path, import.meta.env.SITE).toString();
}

export function appendSiteTitle(title: string) {
  return `${title} | ${site.title}`;
}
