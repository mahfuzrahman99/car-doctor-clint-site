import { useEffect, useState } from "react";

const useFetchServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://car-doctor-server-site-khaki.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useFetchServices;
