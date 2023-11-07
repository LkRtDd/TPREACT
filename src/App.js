import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { db } from "./components/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import Tablets from './components/NavBar/Tablets';
import Celulares from './components/NavBar/Celulares';
import Accesorios from './components/NavBar/Accesorios';
import ProductDetail from './components/Productos/ProductDetail';
import CartPage from './components/CartWidget/CartPage'; 
import Footer from './Footer/footer';
import { CartProvider } from './components/CartWidget/CartContext'; 

function App() {
  return (
    <BrowserRouter>
      <CartProvider> {/* Envuelve tu aplicación con el proveedor del contexto del carrito */}
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="celulares" element={<ItemListContainer categoria="Celulares" />} />
            <Route path="tablets" element={<ItemListContainer categoria="Tablets" />} />
            <Route path="accesorios" element={<ItemListContainer categoria="Accesorios" />} />
            <Route path="productos/:id" element={<ProductDetail />} />
            <Route path="carrito" element={<CartPage />} /> {/* Agrega la ruta para la página del carrito */}
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;