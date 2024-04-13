import { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import { Link } from "react-router-dom";
const Product = ({ id, title, price, image }) => {
  const { addToCart, currentProducts, incrementProductCount, removeFromCart } =
    useContext(Context);
  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    const newArray = [...currentProducts];
    const currentProduct = newArray.find((product) => product.id === id);
    setCurrentProduct(currentProduct);
  }, [currentProducts, id]);
  const hundleAddToCart = async () => {
    const newArray = [...currentProducts];
    if (currentProduct?.added) {
      incrementProductCount(newArray.indexOf(currentProduct));
    } else {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
      const newProduct = await res.json();
      addToCart({
        ...newProduct,
        count: 1,
        added: true,
      });
    }
  };
  const hundleRemoveFromCart = () => {
    const newArray = [...currentProducts];
    removeFromCart(newArray.indexOf(currentProduct));
  };
  return (
    <div className="rounded-5 bg-white w-25 p-5">
      <Link to={`products/${id}`}>
        <img
          src={image}
          alt={title}
          width={300}
          height={300}
        />
      </Link>
      <h3 className="mt-3 fs-4">{title}</h3>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <p className="lead bg-secondary rounded-3 text-white fw-semibold p-2">
          ${price}
        </p>
        <button
          className="btn btn-primary"
          onClick={hundleAddToCart}
        >
          {currentProduct?.added && currentProduct?.count > 0
            ? "Added"
            : "Add To Cart"}{" "}
          {currentProduct?.count > 0 && currentProduct?.count}
        </button>
        {currentProduct?.added && currentProduct?.count > 0 && (
          <button
            className="btn btn-danger"
            onClick={hundleRemoveFromCart}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
