import React from 'react';
import { useParams } from 'react-router-dom';
import productos from './productos';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = productos.find(producto => producto.id === productId);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <h2>Detalles del producto</h2>
      <p>Nombre: {product.nombre}</p>
      <p>Descripción: {product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Características: {product.caracteristicas}</p>
      <p>Colores disponibles: {product.colores}</p>
    </div>
  );
};

export default ProductDetail;