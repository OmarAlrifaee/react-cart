import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
const Products = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const {
    currentProducts,
    addToCart,
    removeFromCart,
    incrementProductCount,
    decrementProductCount,
  } = useContext(Context);
  useEffect(() => {
    const currentProduct = currentProducts.find(
      (currentProduct) => currentProduct.id == id
    );
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      (async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
        const newProduct = await res.json();
        setProduct({ ...newProduct, count: 0, added: false });
      })();
    }
  }, [id, currentProducts]);
  const hundleAddToCart = () => {
    if (product.added && product.count > 0) {
      incrementProductCount(currentProducts.indexOf(product));
    } else {
      addToCart({ ...product, count: 1, added: true });
    }
  };
  const hundleRemoveFromCart = () => {
    removeFromCart(currentProducts.indexOf(product));
  };
  const hundleIncrementCount = () => {
    incrementProductCount(currentProducts.indexOf(product));
  };
  const hundleDecrementCount = () => {
    decrementProductCount(currentProducts.indexOf(product));
  };

  return product.title ? (
    <div>
      <Navbar />
      <div className="py-5 w-100 d-flex flex-column align-items-center bg-white">
        <img
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
        />
        <h3 className="text-black mt-3 fw-bold">{product.title}</h3>
        <p className="lead mx-auto text-center px-5 mt-2 fw-semibold">
          {product.description}
        </p>
        <div className="text-white fw-bold p-2 rounded-2 bg-dark text-start me-auto ms-3">
          ${product.price}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary btn-lg fw-bold"
            onClick={hundleAddToCart}
          >
            {product.count > 0 && product.added ? "Added" : "Add To Cart"}{" "}
            {product.count > 0 && product.count}
          </button>
          {product.count > 0 && product.added && (
            <button
              className="btn btn-danger btn-lg fw-bold ms-3"
              onClick={hundleRemoveFromCart}
            >
              Remove
            </button>
          )}
        </div>
        {product.count > 0 && product.added && (
          <div className="mx-auto d-flex align-items-center justify-content-center gap-3 mt-3">
            <button
              className="btn btn-success rounded-2 text-white fw-bold"
              onClick={hundleIncrementCount}
            >
              +
            </button>
            <span className="text-black fw-bold">{product.count}</span>
            <button
              className="btn btn-danger rounded-2 text-white fw-bold"
              onClick={hundleDecrementCount}
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center py-5">
      <Loader />
    </div>
  );
};

export default Products;
