import Layout from "components/common/Layout";
import MDXComponent from "components/common/MDXComponent";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
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
        <title>HGB Dev | Personal Site</title>
      </Head>
      <Layout path={[""]} textPath={["README.md"]}>
        <MDXComponent source={source} />
      </Layout>
    </>
  );
};

export default HomeComponent;
