import React, { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    alert(`Añadiste ${count} producto(s) al carro de compras.`);
  };

  return (
    <div>
      <p>Items en el carro de compras: {count}</p>
      <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      <button onClick={addToCart}>Añadir al Carro</button>
    </div>
  );
};

export default CounterButton;