import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AllTheBooks from './AllTheBooks';







function MyNav() {

    

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EpiBooks!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey={"Fantasy"}>Fantasy</NavDropdown.Item>
              <NavDropdown.Item eventKey={"History"}>History</NavDropdown.Item>
              <NavDropdown.Item eventKey={"Horror"}>Horror</NavDropdown.Item>
              <NavDropdown.Item eventKey={"Romance"}>Romance</NavDropdown.Item>
              <NavDropdown.Item eventKey={"Scifi"}>Scifi</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
  );
}

export default MyNav;