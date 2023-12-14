import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {

    const { clear, items} = useContext(CartContext);

    return (
    <Container className="mt-4">
        <h1> Productos seleccionados en el carrito para comprar </h1>
<Table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Imagen</th>
      <th scope="col">Eliminar Producto</th>
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
      <td > x </td>
    </tr>
  ))}
  </tbody>
</Table>
    
        <button onClick = {clear}>Vaciar Carrito</button>
    </Container>);

};
