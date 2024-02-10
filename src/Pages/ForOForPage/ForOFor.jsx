import { Link } from "react-router-dom";
import For0For from "../../assets/images/ForOFor/Screenshot 2023-10-27 104341.png";

const ForOFor = () => {
  return (
    <div>
      
      <div className="flex justify-center items-center max-w-6xl mx-auto">
        <img src={For0For} alt="" />
      </div>
      <div className=" max-w-6xl mx-auto flex justify-center items-center my-5">
      <Link to={`/`}>
      <button className="btn bg-gray-400 text-white font-semibold text-xl">
        Go Home
      </button>
      </Link>
      </div>
    </div>
  );
};

export default ForOFor;
