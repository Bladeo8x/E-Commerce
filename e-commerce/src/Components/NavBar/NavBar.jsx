import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TeaCup from '/assets/TeaCup.png';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <NavLink to="/" className="text-decoration-none text-reset">
          <Navbar.Brand className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={TeaCup}
                width="40"
                height="40"
                className="d-inline-block align-center"
                style={{ marginBottom: '10px', marginRight: '20px' }}
                alt="Tea Cup Logo"
              />
              <span>eco-Fi</span>
            </div>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact="true">
              Home
            </Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Drinks" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/cold-drinks">
                Cold Drinks
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hot-drinks">
                Hot Drinks
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/signature">
                Signature
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Merchandise</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
