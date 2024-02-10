/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "react-tooltip/dist/react-tooltip.css";
import "@smastrom/react-rating/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Products = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  const { _id, image, productName, price, rating } = product;
  return (
    <div>
      <div className="rounded-lg shadow-xl">
        <figure className="p-3 rounded-lg flex justify-center">
          <img
            data-aos="zoom-in-up"
            src={image}
            data-aos-delay="50"
            data-aos-duration="3000"
            className="h-[200px] w-full rounded-lg"
            alt="img"
          />
        </figure>
        <div className="p-3 space-y-3 text-center">
          <span>
            <Rating
              style={{ maxWidth: 100 }}
              className="ml-28"
              readOnly
              halfFillMode="svg"
              value={rating < 4.5 ? Math.floor(rating) : rating}
            />
          </span>
          <h2 className=" text-2xl font-bold text-[#444]">{productName}</h2>
          <div className="flex justify-between items-center">
          <p className="text-lg font-serif text-[#FF3811] my-4">
            Price: ${price}
          </p>
            <Link
              to={`/productDetails/${_id}`}
              data-aos="flip-left"
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

export default Products;
