import ItemCount from '../ItemCount/ItemCount';
import { Row, Col } from 'react-bootstrap';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')} />
        </footer>
      </Col>
    </Row>
  );
};

export default ItemDetail;
