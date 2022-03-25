import { ReactNode } from "react";
import Navbar from "../Navbar";

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps): JSX.Element => {
  const { children } = props;

  return (
    <>
      <div className="container mx-auto sm:max-w-3xl lg:max-w-4xl">
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
