import { useContext } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {

    const { clear, items} = useContext(CartContext);

   
    return (
    <Container className="mt-4">
        <h1> Productos seleccionados en el carrito para comprar </h1>

    <Table striped bordered hover>
    <thead>
    <tr>
      <th >Producto</th>
      <th >Precio</th>
      <th >Imagen</th>
      <th >Eliminar Producto</th>
    </tr>
  </thead>
  <tbody>
  {items?.map ((item) => (
      <tr key={item.id}>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <img src={item.pictureURL} width={150}/>
      </td>
      <td > <button>x</button>  </td>
    </tr>
  ))}
  </tbody>
    </Table>
    
        <button onClick = {clear}>Vaciar Carrito</button>



    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  



    </Container>);

};

