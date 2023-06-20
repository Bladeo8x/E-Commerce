import React from 'react';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter-container text-center">
      <div className="btn-group" role="group" aria-label="Counter Controls">
        <button className="btn btn-dark" onClick={decrement}>
          -
        </button>
        <input
          type="number"
          className="text-center"
          style={{ maxWidth: '42px' }}
          value={quantity}
          readOnly
        />
        <button className="btn btn-dark" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-dark mt-3"
          onClick={() => onAdd(quantity)}
          disabled={stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
