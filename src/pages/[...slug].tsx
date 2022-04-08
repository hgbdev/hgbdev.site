import Layout from "components/common/Layout";
import MDXComponent from "components/common/MDXComponent";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import React from "react";
import { IGithubContentItem } from "utils/interfaces";
import GithubAPIRequest from "utils/requests";

interface IProps {
  readme: MDXRemoteSerializeResult<Record<string, unknown>>;
  slug: string[];
  mdFiles: IGithubContentItem[];
  dirs: IGithubContentItem[];
}

const Post = (props: IProps): JSX.Element => {
  const { readme, slug, mdFiles, dirs } = props;

  return (
    <>
      <Head>
        <title>HGB Dev</title>
      </Head>
      <Layout path={slug.join(" / ")}>
        <>
          <MDXComponent source={readme} />
          {dirs.length !== 0 && (
            <ul>
              {dirs.map((item: IGithubContentItem) => (
                <li className="list-[disclosure-closed]" key={item.name}>
                  {item.name}
                </li>
              ))}{" "}
            </ul>
          )}

          {mdFiles.length !== 0 && (
            <ul>
              {mdFiles.map((item: IGithubContentItem) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          )}
        </>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const slug: string[] = context.params.slug;
    const [repo, ...path] = slug;

    const githubApiRequest = new GithubAPIRequest(repo, path);
    const contents = await githubApiRequest.getContents();

    const readme = await githubApiRequest.getReadme(contents);
    const mdxReadme = await serialize(readme || "");

    return {
      props: {
        readme: mdxReadme,
        slug: context.params.slug,
        mdFiles: githubApiRequest.mdFiles,
        dirs: githubApiRequest.dirs,
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
}

export default Post;
