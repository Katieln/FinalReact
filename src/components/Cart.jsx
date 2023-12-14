import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {

    const { items, clear, onRemove} = useContext(CartContext);

    if (!items.length){
        return <Container> Carrito Vacio </Container>;
    }

    return 
    <Container className="mt-4">
        <h1> Productos seleccionados en el carrito para comprar </h1>
<Table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Imagen</th>
    </tr>
  </thead>
  <tbody>
  {items?.map ((item) => (
      <tr key={item.id}>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <img src={item.pictureURL}/>
      </td>
      <td > x </td>
    </tr>
  ))}
  </tbody>
</Table>
    
        <button onClick = {clear}>Vaciar Carrito</button>
    </Container>;
};
