import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListHeader({ greeting }) {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col xs="auto">
          <h1>{greeting}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ListHeader;
