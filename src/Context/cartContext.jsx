import { createContext, useState, useContext } from "react";
import { allProducts } from "../assets/data";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([]);
  const setItems = () => {
    setAllItems(allProducts);
  };
  const addToCart = (item) => {
    setAllItems((prevItem) => {
      return prevItem.map((prevItem) => {
        if (prevItem.inCart) {
          return prevItem;
        }
        return prevItem.id === item.id
          ? { ...prevItem, inCart: true }
          : prevItem;
      });
    });
  };
  return (
    <CartContext.Provider value={{ allItems, setItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
