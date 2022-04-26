import Layout from "components/common/Layout";
import MDXComponent from "components/common/MDXComponent";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import React from "react";

interface IProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Error = (props: IProps): JSX.Element => {
  const { source } = props;

  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <Layout path={[""]} textPath={["NOT_FOUND.md"]}>
        <MDXComponent source={source} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const md = `
        # 404 - NOT FOUND

        Page does not exist
    `;
  const mdxSource = await serialize(md);

  return {
    props: { source: mdxSource },
  };
}

export default Error;
