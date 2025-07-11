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
  const removeFromCart = (item) => {
    setAllItems((prevItem) => {
      return prevItem.map((prevItem) => {
        return prevItem.id === item.id
          ? { ...prevItem, inCart: false, quantity: 1 }
          : prevItem;
      });
    });
  };
  const updateQty = (cartItem, amount) => {
    setAllItems((prevItem) => {
      return prevItem.map((item) => {
        return item.id === cartItem.id
          ? { ...item, quantity: item.quantity + amount }
          : item;
      });
    });
  };
  return (
    <CartContext.Provider
      value={{ allItems, setItems, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
