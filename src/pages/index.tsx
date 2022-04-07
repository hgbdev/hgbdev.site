import axios from "axios";
import Home from "components/home";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface IProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const HomePage = (props: IProps): JSX.Element => {
  const { source } = props;
  return <Home source={source} />;
};

export async function getServerSideProps() {
  const result = await axios.get(
    "https://raw.githubusercontent.com/hgbdev/notes/main/leetcode/03.21.2022%20-%20763.%20Partition%20Labels.md?v=1"
  );
  const { data } = result;
  const mdxSource = await serialize(data);

  return {
    props: { source: mdxSource },
  };
}

export default HomePage;
