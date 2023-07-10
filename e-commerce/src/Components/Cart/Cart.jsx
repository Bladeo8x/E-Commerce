import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Cart = () => {
  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1>Cart Empty</h1>
        <Link to="/" className="Option">
          Products
        </Link>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <div className="d-grid gap-3 mt-3">
        <Button onClick={() => clearCart()} variant="danger">
          Empty Cart
        </Button>
        <Button as={Link} to="/checkout" variant="dark">
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
