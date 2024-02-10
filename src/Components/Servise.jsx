/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Servise = ({ serv }) => {
  const { _id, image, serviceName, price } = serv;
  return (
    <div>
      <div className="rounded-lg shadow-xl">
        <figure className="p-3 rounded-lg flex justify-center">
          <img
            data-aos="zoom-in-down"
            src={image}
            data-aos-delay="50"
            data-aos-duration="3000"
            className="h-[200px] w-full rounded-lg"
            alt="image"
          />
        </figure>
        <div className="p-3">
          <h2 className=" text-2xl font-bold text-[#444]">{serviceName}</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-serif text-[#FF3811] my-4">
              Price: ${price}
            </p>
            <Link
              to={`/serviceDetails/${_id}`}
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="3000"
            >
              <p className="btn btn-sm btn-ghost hover:bg-[#FF3811] hover:text-white text-[#FF3811] transform duration-1000 font-semibold rounded">
                View details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servise;
