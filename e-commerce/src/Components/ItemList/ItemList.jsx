import Col from 'react-bootstrap/Col';
import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {products.map((prod) => (
        <Col lg={4} key={prod.id} className="mb-4">
          <Item {...prod} />
        </Col>
      ))}
    </div>
  );
}

export default ItemList;