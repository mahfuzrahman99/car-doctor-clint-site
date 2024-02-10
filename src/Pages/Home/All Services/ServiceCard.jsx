/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, image, price, serviceDetails } = service || {};
  const { user } = useContext(AuthContext);
  const admin = user?.email === "mahfuzurrahmanshabbir@gmail.com";
  //   console.log(service);
  return (
    <div className="shadow-lg rounded-lg shadow-[#fc3811]">
      <div className="md:h-[270px]">
        <img src={image} className="h-full w-full rounded-t-lg" alt="image" />
      </div>
      <div className=" p-3">
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Service Name: </span>
            {serviceName}
          </p>
        </div>
        <p className="text-justify">
          <span className="font-semibold">Service Summary: </span>
          {serviceDetails?.slice(0, 450)}
        </p>
      </div>
      <div className="flex justify-between items-center mb-2 mx-2">
        <p>
          <span className="font-semibold">Price: </span>${price}
        </p>
        {admin ? (
          <button className="btn btn-ghost hover:bg-[#FF3811] hover:text-white text-[#FF3811] transform duration-1000 font-semibold rounded">
            Manage service
          </button>
        ) : (
          <Link to={`/serviceAppointment/${_id}`}>
            <button className="btn btn-ghost hover:bg-[#FF3811] hover:text-white text-[#FF3811] transform duration-1000 font-semibold rounded">
              Apply for servicing
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
