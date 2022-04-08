import axios from "axios";
import { IGithubContentItem } from "./interfaces";

export default class GithubAPIRequest {
  repo: string = "";
  owner: string = "hgbdev";
  path: string = "";
  readme: string = "readme.md";
  dirs: IGithubContentItem[] = [];
  mdFiles: IGithubContentItem[] = [];

  constructor(repo: string, path?: string[], owner?: string) {
    this.repo = repo;
    this.path = path ? path.join("/") : "";
    this.owner = owner ? owner : this.owner;
  }

  endpointContents = (): string => {
    return `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.path}`;
  };

  async getContents(): Promise<IGithubContentItem[]> {
    const response = await axios.get(this.endpointContents());
    const data = response.data;

    const mdFiles = data.filter(
      (e: IGithubContentItem) =>
        e.type === "file" && e.name.substring(e.name.length - 3) === ".md"
    );
    this.mdFiles = mdFiles;

    const dirs = data.filter((e: IGithubContentItem) => e.type === "dir")
    this.dirs = dirs;

    return data;
  }

  async getReadme(contents: IGithubContentItem[]): Promise<string | null> {
    const readme = contents.find(
      (e) => e.name.toLocaleLowerCase() === this.readme
    );
    if (readme) {
      const response = await axios.get(readme.download_url);
      const data = response.data;
      return data;
    } else {
      return new Promise((resolver) => {
        resolver(null);
      });
    }
  }
}
