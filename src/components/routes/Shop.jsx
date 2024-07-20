import { useProducts } from "../useProducts";
import { ProductCard } from "../ProductCard";

export function Shop() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="text-center my-5 p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <div role="alert">
          <h1>Sorry, there was a problem fetching data</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="row row-cols-md-4 g-3 container my-5 mx-auto p-5">
      {products.map((product) => (
        <div key={product.id} className="col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
