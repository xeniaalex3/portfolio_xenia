export const isFocusPage = (pathname, page) => {
  if (!pathname || !page) {
    return false;
  }

  const pathParts = pathname.split("/");
  let lastPathPart = pathParts[pathParts.length - 1];

  if (lastPathPart === "") {
    lastPathPart = "/";
  }

  return lastPathPart === page;
};