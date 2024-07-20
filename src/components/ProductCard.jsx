import PropTypes from "prop-types";

export function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {/* <div className="card-text">{product.description}</div> */}
        <button className="btn">-</button>
        <input className="form-control" type="number" />
        <button className="btn">+</button>
        <button className="btn">Add To Cart</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
