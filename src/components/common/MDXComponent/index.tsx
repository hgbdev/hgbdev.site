import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import HighlightCode from "../HighlightCode";

const components = {
  code: (elements: any) => {
    const { className, children } = elements;

    if (className) {
      return <HighlightCode language={className} code={children} />;
    } else {
      return (
        <span className="bg-gray-200 border-slate-300 border-[1px] rounded-md px-1">
          {children}
        </span>
      );
    }
  },
};

interface IProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const MDXComponent = (props: IProps): JSX.Element => {
  const { source } = props;
  return <MDXRemote {...source} components={components} />;
};

export default MDXComponent;
