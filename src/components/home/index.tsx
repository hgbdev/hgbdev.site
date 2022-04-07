import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Particles from "react-tsparticles";
import { COLORS } from "utils/colors";

interface IProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const HomeComponent = (props: IProps): JSX.Element => {
  const { source } = props;
  return (
    <div>
      <Head>
        <title>HGB Dev</title>
      </Head>
      <Particles
        params={{
          fpsLimit: 30,
          particles: {
            color: {
              value: COLORS.BG_PARTICALES,
            },
            links: {
              enable: true,
              color: COLORS.BG_PARTICALES,
              distance: 150,
            },
            move: {
              enable: true,
              speed: 0.5
            },
            opacity: {
              value: 0.5,
            },
          },
        }}
      />
      <div className="mx-auto min-h-screen flex justify-center pt-16 px-4 lg:pt-24 relative z-10">
        <div
          className="prose lg:prose-xl px-8 pb-6 pt-4 mb-4 w-full backdrop-blur-[4px] rounded-lg border-solid border-[1px] border-slate-500 h-max"
          style={{ boxShadow: "5px 5px 0" }}
        >
          <div
            className="no-underline font-bold flex items-center pb-8"
            title="hgbdev"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/61721550"
              width={40}
              height={40}
              alt="hgbdev"
              className="rounded-full"
            />
            <p className="ml-3"> hgbdev / README.md</p>
            <span className="blink h-4 w-3 bg-slate-600 ml-1" />
          </div>
          <div>
            <MDXRemote {...source} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
