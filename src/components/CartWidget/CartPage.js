import React from 'react';
import { useCart } from '../CartWidget/CartContext';
import './Carts.css';

const CartPage = () => {
  const { cartState, dispatch } = useCart();

  const removeFromCart = productId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const calculateTotalPrice = () => {
    return cartState.products.reduce((total, product) => total + product.precio, 0);
  };

  return (
    <div>
      <h2>Carro de Compras</h2>
      <p>Productos en el carrito: {cartState.products.length}</p>
      <p>Precio Total: $USD {calculateTotalPrice()}</p>
      <div className="product-list">
        {cartState.products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imagenURL} alt={product.nombre} />
            <p>{product.nombre}</p>
            <p>Precio: $USD {product.precio}</p>
            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;