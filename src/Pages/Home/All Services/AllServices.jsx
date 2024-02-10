import useFetchServices from "../../../Hooks/useFetchServices";
import Navbar from "../../Shared/Navbar/Navbar";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const [services] = useFetchServices();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="md:grid grid-cols-2 gap-6 my-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
