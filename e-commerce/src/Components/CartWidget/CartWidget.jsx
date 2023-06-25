import Shopping_Cart01 from '/assets/Shopping_Cart01.svg';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
    <div className="d-flex align-items-center">
      <button className="btn btn-link p-0">
        <img
          src={Shopping_Cart01}
          width="40"
          height="40"
        />
        {totalQuantity}
      </button>
      <span style={{ color: '#adb5bd', marginLeft: "10px" }}>{0}</span>
    </div>
    </Link>
  );
};

export default CartWidget;
