import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ECOfi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Coffee</Nav.Link>
            <Nav.Link href="#pricing">Tea</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
  