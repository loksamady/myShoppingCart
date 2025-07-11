import React, { useEffect } from "react";
// import { allProducts } from "./assets/data";
import CartItem from "./components/CartItem";
import { UseCartContext } from "./Context/cartContext";
import ShoppingCart from "./components/ShoppingCart";
const App = () => {
  const { allItems, setItems } = UseCartContext();
  useEffect(() => {
    setItems();
  });
  // useEffect(() => {
  //   console.log(allItems);
  // });
  return (
    <div className="grid place-items-center py-20">
      <h1 className="mb-10 font-bold text-4xl bg-pink-200 p-4 px-10 text-white rounded-2xl">
        Shopping-Cart
      </h1>
      {/* <ShoppingCart /> */}
      <div className="grid grid-cols-3 place-itmes-start gap-10">
        {allItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
