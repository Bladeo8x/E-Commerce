import Shopping_Cart01 from "/assets/Shopping_Cart01.svg";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget" style={{ display: totalQuantity }}>
      <div className="d-flex align-items-center">
        <img src={Shopping_Cart01} width="40" height="40" alt="Shopping Cart" />
        <span className="ms-1">{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
