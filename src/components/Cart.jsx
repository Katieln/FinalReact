import { useContext, useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValue = {
  name: "",
  phone: "",
  email: "",
  address: "",
}

export const Cart = () => {

    const navigate = useNavigate ();
    const { clear, items, onRemove} = useContext(CartContext);
    const [buyer, setBuyer] = useState (initialValue);

   /*  if (!items.length) {
      return (
        <Container>
          <h2>Volver al home y agregar algo a la compra</h2>
          <button onClick={() => Navigate("/")}>Volver al home</button>
        </Container>
      )
    } */

    const handleChange = (event) => {
      console.log(event.target)
      setBuyer (buyer => {
        return {
          ...buyer,
          [event.target.name]: event.target.value,
        };
      });
    };

    const sendOrder = () => {
      const order = {
        buyer,
        items,
      };

      const db = getFirestore();
      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order).then(({id}) => {
        if (id) {
          alert("Su orden" + id + "ha sido completada!" );
          setBuyer(initialValue);
          clear();
        }
      });

    };
   
    return (
    <Container className="mt-4">
        <h1> Productos seleccionados en el carrito para comprar </h1>

    <Table striped bordered hover>
    <thead>
    <tr>
      <th >Producto</th>
      <th >Precio</th>
      <th >Imagen</th>
      <th >Cantidad</th>
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
      <td>{item.stock}</td>
      <td > <button onClick={()=> onRemove(item.id) }>x</button>  </td>
    </tr>
  ))}
  </tbody>
    </Table>
    
        <button onClick = {clear}>Vaciar Carrito</button>

<br/>
<br/>

    <Form>


    <Form.Group className="mb-3" >
        <Form.Label>Full Name & Last Name</Form.Label>
        <Form.Control 
        type="text" 
        value= {buyer.name} 
        onChange={handleChange} 
        name="name"
        placeholder="Write your Name and Last Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        type="number" 
        value= {buyer.phone}  
        onChange={handleChange} 
        name="phone"
        placeholder="Phone" />
        <Form.Text className="text-muted">
          We'll never share your Phone number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        value= {buyer.email} 
        onChange={handleChange} 
        name="email"
        placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

     
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control 
        type="text" 
        value= {buyer.address} 
        onChange={handleChange} 
        name="address"
        placeholder="Address" />
        <Form.Text className="text-muted">
          We'll never share your address with anyone else.
        </Form.Text>
      </Form.Group>

    

      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={sendOrder}>
        Submit
      </Button>
    </Form>
  



    </Container>);

};

