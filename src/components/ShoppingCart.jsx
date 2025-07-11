import React from "react";
import { ShoppingCartIcon, XIcon } from "lucide-react";
const ShoppingCart = () => {
  return (
    <>
      <div className="w-[300px] h-screen bg-gray-200 fixed right-0 top-0 z-30 border-l-1 rounded-tl-lg">
        <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border rounded-lg">
          <h1 className="text-xl text-gray-600">Shopping Cart</h1>
          <button
            className="w-9 h-9 bg-yellow-400 absolute right-3 z-20 grid place-items-center border-2 rounded-full
           hover:bg-yellow-500 transition-colors"
          >
            <XIcon className="text-white" />
          </button>
        </div>
        <button
          className="w-9 h-9 bg-yellow-400 absolute -left-14 top-3
        z-20 grid place-items-center border-1 rounded-full"
        >
          <ShoppingCartIcon className="text-xs text-white" />
          <span
            className="w-6 h-6 bg-pink-400 absolute -bottom-4
            -lefft-2 grid place-items-center border border-gray-300 rounded-full text-sm text-white"
          ></span>
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;
