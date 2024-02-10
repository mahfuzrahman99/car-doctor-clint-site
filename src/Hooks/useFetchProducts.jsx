import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useFetchProducts;
