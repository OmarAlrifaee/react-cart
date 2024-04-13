import { useState, useEffect } from "react";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(import.meta.env.VITE_API_URL);
      const data = await res.json();
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mt-5 d-flex flex-wrap justify-content-center gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.id}
              {...product}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
