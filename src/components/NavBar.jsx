import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
           <NavLink to="/">Home</NavLink> 
           
           </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/OrienteMedio">Medio Oriente</NavLink>
            <NavLink to="category/Cruceros">Cruceros</NavLink>
            <NavLink to="category/Caribe">Caribe</NavLink>
          </Nav>
          <CartWidget/>
        </Container>
        
      </Navbar>
    
    
     );
};