export function rawFileMdName(slug: string[]): string {
  return slug[slug.length - 1].slice(0, -3);
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
