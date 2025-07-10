import React, { useEffect } from "react";
import { UseCartContext } from "../Context/cartContext";
const CartButton = ({ item }) => {
  const { allItems, addToCart } = UseCartContext();
  useEffect(() => {
    console.log(allItems);
  }, [allItems]);
  return (
    <div className="w-max absolute right-5 top-5">
      <div className="space-x-3">
        <button
          type="button"
          className="cursor-pointer bg-zinc-400 border rounded-md px-2 py-1 text-sm text-white hover:bg-zinc-500 transition-colors"
          onClick={() => addToCart(item)}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CartButton;
