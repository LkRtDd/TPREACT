import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from "firebase/firestore";
import '../Productos/ProductDetail.css';
import { useCart } from '../CartWidget/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const loadProductFromFirebase = async () => {
      const productDoc = doc(db, 'ProductosFire', id);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct({ ...productSnapshot.data(), id: productSnapshot.id });
      }
    };

    loadProductFromFirebase();
  }, [id]);

  const addToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      alert('Producto agregado al carro de compras');
    }
  };

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div className="product-details-container">
      <h2>{product.nombre}</h2>
      <img src={product.imagenURL} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>Precio: $USD {product.precio}</p>
      <p>Características: {product.caracteristicas}</p>
      <p>Colores disponibles: {product.colores}</p>
      <button onClick={addToCart}>Agregar al carro de compras</button>
    </div>
  );
};

export default ProductDetail;