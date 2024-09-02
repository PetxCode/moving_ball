import Build from "../data/Build";
import Display from "../data/Display";

const BallScreen = () => {
  return (
    <div className="h-screen w-full bg-slate-50 flex justify-center items-center gap-2">
      <div className="w-[800px] border m-2 rounded-md h-[90vh] bg-green-100 p-2 relative">
        <Display />
      </div>
      <div className="w-[500px] border m-2 rounded-md h-[90vh] bg-red-100">
        ll
      </div>
    </div>
  );
};

export default BallScreen;
