import React from "react";
import hljs from "highlight.js";
import parse from "html-react-parser";
import "highlight.js/styles/github-dark.css";

interface IProps {
  language: string;
  code: string;
}

const HighlightCode = (props: IProps) => {
  const { language, code } = props;

  const highlight = hljs.highlight(code, { language: "typescript" }).value;

  return <div>{parse(highlight)}</div>;
};

export default HighlightCode;
