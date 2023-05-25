import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TeaCup from '../NavBar/assets/TeaCup.png';

function NavBar() {
  return (
      
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src={TeaCup}
              width="40"
              height="40"
              className="d-inline-block align-center"
            />{' '}
          eco-Fi
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav ms-4" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-4 align-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Drinks" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cold Drinks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hot Drinks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Signature</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Merchandise
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;