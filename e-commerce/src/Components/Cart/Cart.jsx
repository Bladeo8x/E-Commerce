import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center text-center vh-100">
        <h1>Cart Empty</h1>
        <Link to="/" className="btn btn-dark mt-4">
          Products
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Table responsive>
        <thead>
          <tr className="text-center">
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end me-5 align-items-center">
        <div>
          <h3>Total: ${total}</h3>
        </div>
      </div>
      <div className="d-flex gap-3 justify-content-center align-items-center">
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
