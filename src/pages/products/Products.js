import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productcard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container my-5 text-center">Loading products...</div>;
  if (error) return <div className="container my-5 text-danger">Error: {error}</div>;

  return (
   
    <div className="container " style={{background: "linear-gradient(135deg, #cdbfb0ff 100%) ", marginTop:"82px"}}
>
      <h2 className="mb-4" style={{color:"white"}}>Product</h2>
      <div className="row">
        {products.map(p => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;