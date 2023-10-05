import React from 'react';
import { useParams } from 'react-router-dom';
import productos from './productos';

const ProductoDetalle = () => {
  const { id } = useParams();
  const parsedId = parseInt(id, 10);
  const producto = productos.find((producto) => producto.id === parsedId);

  return (
    <div className="producto-detalle">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default ProductoDetalle;