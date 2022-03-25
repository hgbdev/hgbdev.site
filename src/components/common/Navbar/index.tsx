interface IProps {}

const Navbar = (props: IProps): JSX.Element => {
  return (
    <div className="flex prose-lg py-4">
      <div className="font-bold flex justify-center items-center">
        /home/hgb <span className="blink h-4 w-3 bg-slate-600 ml-1" />
      </div>
    </div>
  );
};

export default Navbar;
