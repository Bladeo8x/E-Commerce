import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Row, Col } from 'react-bootstrap';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { cart, addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <Row className="justify-content-center">
      <Col xs={3} className="text-center mb-4">
        <header className="Header">
          <h2 className="ItemHeader square-image mt-2">{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} className="img-thumbnail square-image img-fluid" />
        </picture>
        <section>
          <p className="Info square-image">Category: {category}</p>
          <p className="Info square-image">Description: {description}</p>
          <p className="Info square-image">Price: ${price}</p>
        </section>

        <footer className="ItemFooter square-image">
          {
            quantityAdded > 0 ? (
              <Link to= '/cart' className= 'Option'>Finish Purchase</Link>
            ) : (
              <ItemCount initial = {1} stock={stock} onAdd={handleOnAdd}/>
            )
          }
        </footer>
      </Col>
    </Row>
  );
};

export default ItemDetail;
