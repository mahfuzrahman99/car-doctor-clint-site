import DetailsNav from "../Shared/Navbar/DetailsNav";
import checkout from "../../assets/images/checkout/Rectangle 1548 (2).png";

const ManageInventory = () => {
    return (
        <div>
      <DetailsNav />
      <div>
        <div className="my-12">
          <div className="relative rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full">
            <img
              src={checkout}
              alt=""
              style={{ opacity: 0.8 }}  // Set opacity here
            />
            <h1 className="text-4xl font-bold text-white absolute top-1/2 left-10">
            Manage All Orders
              <br />
              <span className="text-base font-medium text-[#FF3811]">Home - Manage All Orders</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageInventory;