import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {db} from "./components/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import Tablets from './components/NavBar/Tablets';
import Celulares from './components/NavBar/Celulares';
import Accesorios from './components/NavBar/Accesorios';
import ProductDetail from './components/Productos/ProductDetail';
import Footer from './Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="celulares" element={<ItemListContainer categoria="Celulares" />} />
          <Route path="tablets" element={<ItemListContainer categoria="Tablets" />} />
          <Route path="accesorios" element={<ItemListContainer categoria="Accesorios" />} />
          <Route path="productos/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
