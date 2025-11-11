import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((s, i) => s + (i.price * (i.quantity || 1)), 0);

  return (
    <div className="container my-5 p-3">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty</div>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border rounded p-3 mb-2">
              <div style={{ maxWidth: 400 }}>
                <h6 className="mb-1">{item.title}</h6>
                <small className="text-muted">Qty: {item.quantity}</small>
              </div>
              <div className="text-end">
                <div className="fw-bold">₹{(item.price * item.quantity).toFixed(2)}</div>
                <button className="btn btn-sm btn-danger mt-2" onClick={() => removeFromCart(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h5>Total: ₹{total.toFixed(2)}</h5>
            <div>
              <button className="btn btn-secondary me-2" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;