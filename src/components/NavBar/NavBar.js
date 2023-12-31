import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import logo from "../assets/Apple_logo_black.svg (1).png";

const NavBar = () => {
    return (
        <nav className='NavBarCss'>
            <div className='logologo'>
                {}
                <Link to="/">
                    <img src={logo} alt="Logo" /></Link>Apple Argentina
          
            </div>
            <div>
                <button><Link to="Celulares">Celulares</Link></button>
                <button><Link to="Tablets">Tablets</Link></button>
                <button><Link to="Accesorios">Accesorios</Link></button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;