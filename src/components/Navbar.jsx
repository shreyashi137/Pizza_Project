import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";



function BasicExample() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">Food Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/"  className={({ isActive }) => isActive ? "active" : ""}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/menu" className={({isActive})=> isActive ? "active" : ""}>Menu</Nav.Link>
             <Nav.Link as={NavLink} to="/RecipeDetails" className={({isActive})=>isActive ? "active" : ""}>RecipeDetails</Nav.Link>
            <Nav.Link  as={NavLink} to="/About" className={({isActive})=>isActive ? "active":""}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" className={({isActive})=>isActive ?"active":""}>Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

