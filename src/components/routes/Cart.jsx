import { useOutletContext } from "react-router-dom";
import { CartItem } from "../CartItem";

export function Cart() {
  const [cartItems, , , cartItemCount] = useOutletContext();

  // Calculate total price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="text-center my-5 mx-auto p-5">
      <h1>Your Cart</h1>
      {cartItemCount > 0 ? (
        <div className="list-group list-group-flush mb-5">
          {cartItems.map((item) => (
            <div key={item.id} className="list-group-item">
              <CartItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="text-start">
        <div>
          <h5>
            Total Price: <b>${totalPrice}</b>
          </h5>
        </div>
        <div className="btn btn-primary rounded-pill">Checkout</div>
      </div>
    </div>
  );
}
