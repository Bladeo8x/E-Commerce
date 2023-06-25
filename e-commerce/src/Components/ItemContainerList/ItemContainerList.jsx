import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'


function ItemContainerList({ greeting }) {

const [products, setProducts] = useState([])
const [visitors, setVisitors] = useState(0);

const { categoryId } = useParams()

useEffect (() => {
  const asyncFunc = categoryId ? getProductsByCategory : getProducts

  asyncFunc(categoryId)
  .then(response => {
    setProducts(response)
  })
  .catch(error => {
    console.error(error)
  })
}, [categoryId])

useEffect(() => {
  setVisitors((prevVisitors) => prevVisitors + 1);
}, []);

return (
  <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <Row className="justify-content-center mb-4">
      <Col xs="auto" className="text-center">
        <h1 className='mt-4'>{greeting}</h1>
        <p>Visitors | {visitors}</p>
        <h6 style={{ fontStyle: 'italic', fontSize: 'smaller' }}>"cup of coffee, code, repeat"</h6>
      </Col>
    </Row>
    <Row className="justify-content-center" style={{width: "100%"}}>
    <Col lg={12} className="mb-4">
    <ItemList products={products} />
          </Col>
    </Row>
  </Container>
);
}

export default ItemContainerList;