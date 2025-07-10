import React, { useEffect } from "react";
// import { allProducts } from "./assets/data";
import CartItem from "./components/CartItem";
import { UseCartContext } from "./Context/cartContext";
const App = () => {
  const { allItems, setItems } = UseCartContext();
  useEffect(() => {
    setItems();
  }, []);
  return (
    <div className="grid place-items-center py-20">
      <div className="grid grid-cols-3 place-itmes-start gap-10">
        {allItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
