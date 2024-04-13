import { createContext, useEffect, useState } from "react";
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState(
    JSON.parse(localStorage.getItem("currentProducts")) || []
  );
  const [total, setTotal] = useState(0);
  useEffect(() => {
    localStorage.setItem("currentProducts", JSON.stringify(currentProducts));
    const price = currentProducts.map(
      (product) => product.price * product.count
    );
    const totalPrice = price.reduce((prev, current) => prev + current, 0);
    setTotal(Math.floor(totalPrice));
  }, [currentProducts, total]);

  const addToCart = (newProduct) => {
    setCurrentProducts([newProduct, ...currentProducts]); // to add the product in the first of the array
  };
  const removeFromCart = (ProductIndex) => {
    const newArray = [...currentProducts];
    newArray.splice(ProductIndex, 1);
    setCurrentProducts(newArray);
  };
  const incrementProductCount = (productIndex) => {
    const newArray = [...currentProducts];
    newArray[productIndex].count = newArray[productIndex].count + 1;
    setCurrentProducts(newArray);
  };
  const decrementProductCount = (productIndex) => {
    if (currentProducts[productIndex].count > 1) {
      const newArray = [...currentProducts];
      newArray[productIndex].count = newArray[productIndex].count - 1;
      setCurrentProducts(newArray);
    }
  };
  const deleteAll = () => setCurrentProducts([]);
  return (
    <Context.Provider
      value={{
        currentProducts,
        addToCart,
        removeFromCart,
        incrementProductCount,
        decrementProductCount,
        total,
        deleteAll,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
