import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand>
           <NavLink to="/">Home</NavLink> 
           
           </Navbar.Brand >
           <Nav className="me-auto">
      <NavLink to="category/OrienteMedio" style={{ marginRight: '10px' }}>OrienteMedio</NavLink>
      <NavLink to="category/cruceros" style={{ marginRight: '10px' }}>Cruceros</NavLink>
      <NavLink to="category/Caribe" style={{ marginRight: '10px' }}>Caribe</NavLink>
      <NavLink to="category/NorthAmerica">NorthAmerica</NavLink>
    </Nav>
   
          <CartWidget/>
        </Container>
        
      </Navbar>
    
    
     );
};