import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from "firebase/firestore";
import '../Productos/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducto] = useState(null);

  useEffect(() => {
    const loadProductoFromFirebase = async () => {
      const productoDoc = doc(db, 'ProductosFire', id);
      const productoSnapshot = await getDoc(productoDoc);
      if(productoSnapshot.exists){
        setProducto({ ...productoSnapshot.data(), id: productoSnapshot.id});
      }
    };

    loadProductoFromFirebase();
  }, [id]);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div className="product-details-container">
      <h2>{product.nombre}</h2>
      <img src={product.imagenURL} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>Precio: $USD{product.precio}</p>
      <p>Características: {product.caracteristicas}</p>
      <p>Colores disponibles: {product.colores}</p>
      <button>Agregar al carro de compras</button>
    </div>
  );
};

export default ProductDetail;