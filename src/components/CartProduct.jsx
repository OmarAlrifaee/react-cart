import { useContext } from "react";
import { Context } from "../context/ContextProvider";
const CartProduct = ({ title, price, image, index, count }) => {
  const { removeFromCart, incrementProductCount, decrementProductCount } =
    useContext(Context);
  if (count > 0)
    return (
      <div className="w-50 text-white">
        <div className="d-flex align-items-center justify-content-between">
          <img
            src={image}
            alt={title}
            width={100}
            height={100}
            className="object-fit-cover"
          />
          <h3>{title}</h3>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary text-white"
            onClick={() => incrementProductCount(index)}
          >
            +
          </button>
          <span className="px-3">{count}</span>
          <button
            className="btn btn-primary text-white"
            onClick={() => decrementProductCount(index)}
          >
            -
          </button>
        </div>
        <div className="bg-secondary text-center mt-3">${price}</div>
        <button
          className="btn btn-danger mt-3"
          onClick={() => removeFromCart(index)}
        >
          Delete
        </button>
      </div>
    );
};

export default CartProduct;
