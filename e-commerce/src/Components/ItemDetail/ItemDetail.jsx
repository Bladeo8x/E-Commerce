import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { cart, addItem } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);

    Swal.fire({
      icon: "success",
      title: "Item Added",
      text: "The item has been added to your cart",
    });
  };

  if (loading) {
    return (
      <Row className="justify-content-center">
        <Col xs="auto" className="mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Col>
      </Row>
    );
  }

  return (
    <Row className="justify-content-center">
      <Col xs={3} className="text-center mb-4">
        <header className="Header">
          <h2 className="ItemHeader square-image mt-2">{name}</h2>
        </header>
        <picture>
          <img
            src={img}
            alt={name}
            className="img-thumbnail square-image img-fluid"
          />
        </picture>
        <section>
          <p className="Info square-image">Category: {category}</p>
          <p className="Info square-image">Description: {description}</p>
          <p className="Info square-image">Price: ${price}</p>
        </section>

        <footer className="ItemFooter square-image">
          {quantityAdded > 0 ? (
            <>
              <Link to="/" className="btn btn-dark ml-2 me-2">
                Add Another Item
              </Link>
              <Link to="/cart" className="btn btn-dark">
                Finish Purchase
              </Link>
            </>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </Col>
    </Row>
  );
};

export default ItemDetail;
