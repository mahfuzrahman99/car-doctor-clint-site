import { Link } from "react-router-dom";
import Products from "../../Components/Products";
import useFetchProducts from "../../Hooks/useFetchProducts";
const OurProducts = () => {
  const [products] = useFetchProducts();

  return (
    <div className="my-6 md:my-32">
      <div className="mb-8 text-center space-y-2">
        <p className="text-[#FF3811] text-xl font-bold">Popular Products</p>
        <p className=" text-4xl font-bold">Browse Our Products</p>
        <p className="text-[#737373] text-base font-normal">
          the majority have suffered alteration in some form, by injected
          humour, or <br /> words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {products.slice(0, 6).map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link to={"/allProducts"}>
          <button className="btn btn-outline transform duration-1000 font-semibold text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
            More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
