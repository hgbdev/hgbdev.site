import Layout from "components/common/Layout";
import MDXComponents from "components/common/MDXComponents";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import React from "react";

interface IProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const HomeComponent = (props: IProps): JSX.Element => {
  const { source } = props;

  return (
    <>
      <Head>
        <title>HGB Dev</title>
      </Head>
      <Layout path="README.md">
        <MDXRemote {...source} components={MDXComponents} />
      </Layout>
    </>
  );
};

export default HomeComponent;
