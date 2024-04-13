import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import CartProduct from "../components/CartProduct";
import Navbar from "../components/Navbar";
const Cart = () => {
  const { currentProducts, total, deleteAll } = useContext(Context);
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column align-items-center gap-5">
        {currentProducts.map((product, index) => (
          <CartProduct
            key={product.id}
            {...product}
            index={index}
          />
        ))}
        <div className="bg-secondary text-capitalize fw-bold mt-5 text-white p-3 rounded-2">
          Total Price: ${total}
        </div>
        <button
          className="btn btn-danger fw-bold text-white"
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Cart;
