import useFetchProducts from "../../../Hooks/useFetchProducts";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products] = useFetchProducts();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="md:grid grid-cols-2 gap-6 my-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
