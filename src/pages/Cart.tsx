import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.allProducts);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return total + (product?.price || 0) * cartItem.quantity;
  }, 0);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart w-full flex justify-center">
      <div className="w-full md:w-3/5 flex flex-col items-center m-10 border p-5 rounded-lg shadow-lg">
        {cartItems.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <div className="cart-items w-full">
            {cartItems.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.id);
              if (!product) return null;

              return (
                <div
                  key={cartItem.id}
                  className="flex items-center justify-between border-b py-5"
                >
                  <div className="cart-image text-center">
                    <img
                      className="w-24 h-24 object-cover mx-auto"
                      src={product.image}
                      alt={product.name}
                    />
                    <button
                      onClick={() => handleRemove(cartItem.id)}
                      className="text-red-500 mt-2 hover:underline"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-info flex-1 ml-10">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p>Price: £{product.price.toFixed(2)}</p>
                    <div className="cart-item-quantity flex items-center mt-2">
                      <button
                        className="bg-gray-300 px-3 py-1 rounded-md"
                        onClick={() =>
                          handleQuantityChange(cartItem.id, cartItem.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-4">{cartItem.quantity}</span>
                      <button
                        className="bg-gray-300 px-3 py-1 rounded-md"
                        onClick={() =>
                          handleQuantityChange(cartItem.id, cartItem.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-summary w-full mt-5 text-right">
            <h2 className="text-lg">
              <span className="font-semibold">Basket Total:</span> £{totalPrice.toFixed(2)}
            </h2>
            <h2 className="text-xl font-bold mt-2">
              Total: £{totalPrice.toFixed(2)}
            </h2>
            <button className="bg-gray-800 text-white px-5 py-2 rounded-md mt-4 hover:bg-gray-900">
              Checkout Securely
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
