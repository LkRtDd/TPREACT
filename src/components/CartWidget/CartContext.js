import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    products: JSON.parse(localStorage.getItem('cartProducts')) || [],
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const updatedProductsAdd = [...state.products, action.payload];
        localStorage.setItem('cartProducts', JSON.stringify(updatedProductsAdd));
        return {
          ...state,
          products: updatedProductsAdd,
        };
      case 'REMOVE_FROM_CART':
        const updatedProductsRemove = state.products.filter(product => product.id !== action.payload);
        localStorage.setItem('cartProducts', JSON.stringify(updatedProductsRemove));
        return {
          ...state,
          products: updatedProductsRemove,
        };
      default:
        return state;
    }
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartState.products));
  }, [cartState.products]);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};