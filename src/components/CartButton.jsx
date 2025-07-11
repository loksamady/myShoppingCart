import { UseCartContext } from "../Context/cartContext";
const CartButton = ({ item }) => {
  const { addToCart, removeFromCart, updateQty } = UseCartContext();
  return (
    <div className="w-max absolute right-5 top-5">
      <div className="space-x-3">
        {!item.inCart ? (
          <button
            type="button"
            className="cursor-pointer bg-zinc-400 border rounded-md px-2 py-1 text-sm text-white hover:bg-zinc-500 transition-colors"
            onClick={() => addToCart(item)}
          >
            + Add to Cart
          </button>
        ) : (
          <div>
            <div className="flex">
              <button
                onClick={() => {
                  if (item.quantity === 1) {
                    removeFromCart(item);
                  } else {
                    updateQty(item, -1);
                  }
                }}
                className="border rounded-lg px-3"
              >
                -
              </button>
              <p className="flex items-center gap-x1 mx-1">
                <span className="min-w-7 bg-green-100 grid place-items-center border rounded-full">
                  {item.quantity}
                </span>
              </p>
              <button
                onClick={() => updateQty(item, 1)}
                className="border rounded-lg px-3"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="bg-pink-300 mx-auto mt-2 block rounded-md px-2 py-1 text-xs text-white hover:bg-pink-600"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartButton;
