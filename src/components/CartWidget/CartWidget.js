import React from 'react';
import { Link } from 'react-router-dom';
import carrtt from '../assets/carrodc2.svg';

const CartWidget = () => {
    return (
        <div>
            <Link to="/carrito"> 
                <img src={carrtt} alt="cart-widget"/>
            </Link>
        </div>
    );
};

export default CartWidget;