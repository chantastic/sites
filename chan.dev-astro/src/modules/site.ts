export function url(path: string = "") {
  return new URL(path, import.meta.env.SITE).toString();
}
