import React from "react";

function ProductList({ products, dispatch }) {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} className="product">
          <span>
            {product.name} - ₹{product.price}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;