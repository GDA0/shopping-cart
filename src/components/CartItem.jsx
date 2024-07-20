import PropTypes from "prop-types";
import "../assets/styles/CartItem.css";

export function CartItem({ item }) {
  const subTotalPrice = item.price * item.quantity;

  return (
    <div className="cart-item d-flex gap-3">
      <img className="img-fluid" src={item.image} alt={item.title} />
      <div className="text-start">
        <h4>
          {item.title} (${item.price.toFixed(2)})
        </h4>
        <h6>Sub-total price: ${subTotalPrice.toFixed(2)}</h6>
        <h6>Quantity: {item.quantity}</h6>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
};
