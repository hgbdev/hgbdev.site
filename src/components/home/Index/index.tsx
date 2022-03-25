import AboutMe from "../AboutMe";

interface IProps {}

const Home: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <AboutMe />
    </>
  );
};

export default Home;
