import React from 'react';
import { Link } from 'react-router-dom'; 
import productos from '../Productos/productos';

const ItemListContainer = ({ categoria }) => {
    const filteredProducts = productos.filter(producto => producto.categoria === categoria);
  
    return (
      <div>
        <h2>{categoria}</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredProducts.map(producto => (
            <li key={producto.id} style={{ marginBottom: '1em' }}>
              <p>{producto.nombre}</p>
              <p>Precio: ${producto.precio}</p>
              <Link to={`/productos/${producto.id}`}>Ver más</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default ItemListContainer;