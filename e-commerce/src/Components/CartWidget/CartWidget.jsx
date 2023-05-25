import React from 'react';
import Shopping_Cart01 from './assets/Shopping_Cart01.svg';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-link p-0">
        <img
          src={Shopping_Cart01}
          width="40"
          height="40"
        />
      </button>
      <span style={{ color: '#adb5bd', marginLeft: "10px" }}>{0}</span>
    </div>
  );
};

export default CartWidget;
