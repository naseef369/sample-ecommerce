import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  return (
    <div className="card h-100 shadow-sm">
      <div className="d-flex align-items-center justify-content-center" style={{ height: 180 }}>
        <img src={product.image} alt={product.title} style={{ maxHeight: '60%', objectFit: 'contain' }} />
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title.length > 60 ? product.title.slice(0, 60) + '...' : product.title}</h6>
        <p className="card-text fw-bold">₹{product.price}</p>
        <div className="mt-auto d-flex gap-2">
          <Link to={`/product/${product.id}`} className="btn btn-outline-dark btn-sm flex-grow-1">Details</Link>
          <button className="btn btn-dark btn-sm" onClick={() => addToCart(product)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus-fill mb-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
</svg></button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;