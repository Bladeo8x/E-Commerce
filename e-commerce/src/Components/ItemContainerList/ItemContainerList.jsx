import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListHeader({ greeting }) {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col xs="auto" className="text-center">
          <h1>{greeting}</h1>
          <p xs="auto">visitors | 0</p>
          <h6 xs="auto" style={{ fontStyle: 'italic', fontSize: 'smaller' }}>"cup of coffee, code, repeat"</h6>
          </Col>
      </Row>
    </Container>
  );
}

export default ListHeader;
