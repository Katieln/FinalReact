
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { ItemCounter } from './ItemCounter';
import { CartContext } from '../contexts/CartContext';
import { Container } from 'react-bootstrap';

export const DetailsItem = ({ item }) => {

  const {onAdd} = useContext(CartContext);
  const add = (cantidad) => {
    onAdd(item, cantidad);

  };

    return (<Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={item.pictureURL}  />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.description}
        {item.details}
        <br/>
        <br/>
        <>
      Precio: $ {item.price}
      </>
      </Card.Text>
      <>
      Quedan {item.stock} cupos !!
      </>
      <br/>
      <br/>

      <ItemCounter onAdd = {add} stock={item.stock} initial={1}/>
    </Card.Body>
  </Card>);
};

