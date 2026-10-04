const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/vidnova" : "";

export function assetPath(path: string) {
  if (!path) return BASE_PATH;

  if (path.startsWith(BASE_PATH) && BASE_PATH !== "") {
    return path;
  }

  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }

  return `${BASE_PATH}/${path}`;
}