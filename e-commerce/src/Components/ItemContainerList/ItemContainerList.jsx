import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'


function ItemContainerList({ greeting }) {

const [products, setProducts] = useState([])

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

return (
  <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <Row className="justify-content-center mb-4">
      <Col xs="auto" className="text-center">
        <h1>{greeting}</h1>
        {/* Mi intencion es poder activar el contador para los visitantes de la pagina en un futuro, por el momento lo dejo hardcodeado */}
        <p>visitors | 0</p>
        <h6 style={{ fontStyle: 'italic', fontSize: 'smaller' }}>"cup of coffee, code, repeat"</h6>
      </Col>
    </Row>
    {/* Cree este row para ver si podia alinear los contadores de alguna forma, sin que se desalineen por over-text, no succeed*/}
    <Row className="justify-content-center">
    <Col lg={12} className="mb-4">
    <ItemList products={products} />
          </Col>
    </Row>
  </Container>
);
}

export default ItemContainerList;