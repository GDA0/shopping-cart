import PropTypes from "prop-types";
import "../assets/styles/ProductCard.css";
import { useState } from "react";

export function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  }

  return (
    <div className="card h-100 product-card">
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {product.title} (${product.price.toFixed(2)})
        </h5>
        <div className="mt-auto">
          <div className="d-flex gap-3 my-3">
            <button className="btn btn-secondary" onClick={decrement}>
              -
            </button>
            <input
              className="form-control text-center"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
            <button className="btn btn-secondary" onClick={increment}>
              +
            </button>
          </div>
          <div className="text-center">
            <button
              className="btn btn-light text-center"
              onClick={() => addToCart(product, quantity)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
