import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNavBar() {
  return (
    <Navbar expand="lg" fixed='top' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="home">My Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="products">Products</NavDropdown.Item>
              <NavDropdown.Item href="contacts">
                Contacts
              </NavDropdown.Item>
              <NavDropdown.Item href="something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="separated-link">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
