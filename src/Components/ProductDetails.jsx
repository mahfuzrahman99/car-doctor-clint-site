import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const ProductDetails = () => {
  const products = useLoaderData();
  const { _id, productName, image, price, productDetails } = products;
  // console.log(products)
  const { user } = useContext(AuthContext);
  const admin = user?.email === "mahfuzurrahmanshabbir@gmail.com";
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="md:grid grid-cols-2 gap-3 my-2 md:my-5">
        <div className="col-span-2 md:h-[400px] w-full rounded-t-lg md:rounded-l-lg">
          <img
            src={image}
            className="w-full h-full rounded-t-lg md:rounded-l-lg"
            alt="image"
          />
        </div>
        <div className="p-4 flex flex-col justify-between col-span-2 space-y-3">
          <div className="flex justify-between items-center">
            <p className="">
              <span className="font-medium text-lg">Service Name:</span>{" "}
              {productName}
            </p>
            <p>
              <span className="font-medium text-lg">Price:</span> ${price}
            </p>
          </div>
          <p className="text-justify">
            <span className="font-medium text-lg ">Service Summary:</span>{" "}
            {productDetails}
          </p>
          <div className="flex justify-end">
            {admin ? (
              <button className="btn btn-ghost bg-[#ff3811] rounded-md hover:bg-[#ff3811] text-white font-bold">
                Manage product
              </button>
            ) : (
              <Link to={`/productAppointment/${_id}`}>
                <button className="btn btn-ghost bg-[#ff3811] rounded-md hover:bg-[#ff3811] text-white font-bold">
                  Apply for purchase product
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
