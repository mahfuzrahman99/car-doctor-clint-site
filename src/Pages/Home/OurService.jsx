import { useEffect, useState } from "react";
import Servise from "../../Components/Servise";
import { Link } from "react-router-dom";

const OurService = () => {
  const [service, setService] = useState([]);
  const [acd, setAcd] = useState(false);
  const [search, setSearch] = useState("");
  // const [min, setMin] = useState(undefined);
  // const [max setMax] = useState(undefined);

  useEffect(() => {
    fetch(`https://car-doctor-server-site-khaki.vercel.app/services1?sort=${acd ? "acd" : "dcd"}&search=${search}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [acd, search]);

  const handleSearch = e => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText)
  };

  return (
    <div className="my-6 md:my-32" id="service">
      <div className="mb-8 text-center space-y-2">
        <p className="text-[#FF3811] text-xl font-bold">Service</p>
        <p className=" text-4xl font-bold">Our Service Area</p>
        <p className="text-[#737373] text-base font-normal">
          the majority have suffered alteration in some form, by injected
          humour, or <br /> words which do not look even slightly believable.{" "}
        </p>
        <form onSubmit={handleSearch} className="flex justify-center items-center">
          <input type="text" placeholder="Search hare..." className="text-white p-3 rounded-md bg-[#d2d4d7] rounded-r-none" name="search" />
          <button className="btn btn-ghost bg-[#d2d4d7] rounded-l-none border-l-2 border-l-[#1f2937]" type="submit">Search</button>
        </form>
        <button onClick={() => setAcd(!acd)} className="btn btn-primary">
          {acd ? "Price: High To Low" : "Price: Low To High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {service.slice(0,6).map((serv) => (
          <Servise key={serv._id} serv={serv} />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link to={"/allServices"}>
        <button className="btn btn-outline transform duration-1000 font-semibold text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
          More Services
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OurService;
