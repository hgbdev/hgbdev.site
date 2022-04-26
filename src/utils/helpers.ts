export function rawFileMdName(slug: string[]): string {
  return isMdFile(slug[slug.length - 1])
    ? slug[slug.length - 1].slice(0, -3)
    : slug[slug.length - 1];
}

export function mapUrlBreadcrumb(slug: string[]): string[] {
  return slug.map((e: string, i: number, a: string[]) => {
    if (i === 0) {
      return "/" + e;
    }
    let result = "";
    for (let j = 0; j <= i; j++) {
      result = result + "/" + slug[j];
    }
    return result;
  });
}

export function isMdFile(name: string): boolean {
  return name.substring(name.length - 3) === ".md";
}
