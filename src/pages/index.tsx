import Home from "components/home";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import GithubAPIRequest from "utils/requests";

interface IProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const HomePage = (props: IProps): JSX.Element => {
  const { source } = props;
  return <Home source={source} />;
};

export async function getStaticProps() {
  const githubApiRequest = new GithubAPIRequest("hgbdev");
  const contents = await githubApiRequest.getContents();
  const readme = await githubApiRequest.getReadme(contents);

  const mdxSource = await serialize(readme || "");

  return {
    props: { source: mdxSource },
  };
}

export default HomePage;
