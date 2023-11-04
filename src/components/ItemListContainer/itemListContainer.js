import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import '../ItemListContainer/itemListContainer.css'

const ItemListContainer = ({ categoria }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      const loadProductosFromFirebase = async () => {
        const productosCollection = collection(db, 'ProductosFire');
        const productosQuery = query(productosCollection, where('categoria', '==', categoria));
        const productosSnapshot = await getDocs(productosQuery);
        const productosList = productosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));

        setProductos(productosList);
      };

      loadProductosFromFirebase();
    }, [categoria]);

    return (
      <div className="products-container">
        <h2>{categoria}</h2>
        <ul className="product-list">
          {productos.map(producto => (
            <li key={producto.id} className="product-item">
              <p>{producto.nombre}</p>
              <img src={producto.imagenURL} alt={producto.nombre} className="product-image" />
              <p>Precio: ${producto.precio}</p>
              <Link to={`/productos/${producto.id}`} className="ver-detalles-button">Ver detalles</Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ItemListContainer;