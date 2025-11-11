import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container my-5 mt-4 p-4">Loading product...</div>;
  if (error) return <div className="container my-5 text-danger">Error: {error}</div>;
  if (!product) return <div className="container my-5">No product</div>;

  const handleAdd = () => {
    addToCart(product);
    
  };

  return (
    <div className="container my-5 p-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="border p-3 d-flex align-items-center justify-content-center shadow-sm border rounded" style={{ minHeight: 320 }}>
            <img src={product.image} alt={product.title} style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }} />
          </div>
        </div>
        <div className="col-md-6 p-4">
          <h3>{product.title}</h3>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-success">₹{product.price}</h4>
          <p>{product.description}</p>
          <div className="d-flex gap-2">
            <button className="btn btn" onClick={handleAdd}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus-fill mb-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
</svg></button>
            <button className="btn btn-outline-secondary" onClick={() => navigate('/products')}>Back to products</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;