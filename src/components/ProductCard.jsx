import PropTypes from "prop-types";
import "../assets/styles/ProductCard.css";

export function ProductCard({ product }) {
  return (
    <div className="card h-100 product-card">
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {product.title} (${product.price})
        </h5>
        <div className="mt-auto">
          <div className="d-flex gap-1 my-3">
            <button className="btn btn-secondary">-</button>
            <input className="form-control" type="number" />
            <button className="btn btn-secondary">+</button>
          </div>
          <div className="text-center">
            <button className="btn btn-light text-center">Add To Cart</button>
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
};
