import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://car-doctor-server-site-khaki.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useFetchProducts;
