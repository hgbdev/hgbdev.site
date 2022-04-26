/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { COLORS } from "utils/colors";

interface IProps {
  children: JSX.Element;
  path?: string[];
  textPath?: string[];
}

const Layout = (props: IProps): JSX.Element => {
  const { children, path, textPath } = props;

  return (
    <div>
      <div className="mx-auto min-h-screen flex justify-center pt-16 px-4 lg:pt-24 relative z-10">
        <div className="prose lg:prose-xl mb-4 w-ful h-max">
          <div className="px-8 pb-6 pt-4">
            <div
              className="no-underline font-bold flex pb-8 items-center"
              title="hgbdev"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/61721550"
                width={40}
                height={40}
                alt="hgbdev"
                className="rounded-full"
              />
              <p className="ml-3">
                <a href="/">hgbdev</a>{" "}
                {textPath &&
                  path?.map((e, i) => (
                    <>
                      {" / "}
                      <a href={`${e}`} key={i.toString()}>
                        {textPath[i]}
                      </a>
                    </>
                  ))}
              </p>
              <span className="blink h-4 w-3 bg-slate-600 ml-1" />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
