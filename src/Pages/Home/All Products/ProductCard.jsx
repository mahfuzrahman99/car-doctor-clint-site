/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const ProductCard = ({ product }) => {
  const { _id, productName, image, price, productDetails } = product || {};
  // console.log(product);
  const { user } = useContext(AuthContext);
  const admin = user?.email === "mahfuzurrahmanshabbir@gmail.com";
  return (
    <div className="shadow-lg shadow-[#ff3811] rounded-lg md:h-[390px] flex flex-col justify-between">
      <div className=" md:grid grid-cols-2">
        <div className="col-span-1 md:h-[170px]">
          <img src={image} className="rounded-l-lg h-full w-full" alt="image" />
        </div>
        <div className="p-2">
          <div className="">
            <p>
              <span className="font-semibold">Product Name: </span>
              {productName}
            </p>
          </div>
        </div>
      </div>
      <p className=" p-2 text-justify">
        <span className="font-semibold">Product Details: </span>
        {productDetails.slice(0, 500)}
      </p>
      <div className="flex justify-between items-center mb-2 mx-2">
        <p>
          <span className="font-semibold">Price: </span>${price}
        </p>
        {admin ? (
          <button className="btn btn-ghost hover:bg-[#FF3811] hover:text-white text-[#FF3811] transform duration-1000 font-semibold rounded">
            Manage product
          </button>
        ) : (
          <Link to={`/productAppointment/${_id}`}>
            <button className="btn btn-ghost hover:bg-[#FF3811] hover:text-white text-[#FF3811] transform duration-1000 font-semibold rounded">
              Purchase product
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
