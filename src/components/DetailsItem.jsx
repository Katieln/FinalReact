
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { ItemCounter } from './ItemCounter';
import { CartContext } from '../contexts/CartContext';
import { Container } from 'react-bootstrap';

export const DetailsItem = ({ item }) => {

  const {onAdd} = useContext(CartContext);
  const add = () => {
    onAdd(item);
  };

    return (<Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={item.pictureURL} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.description}
        {item.details}
       
      </Card.Text>
      <Container>
      Quedan {item.stock} cupos !!
      </Container>
      <br/>

      <ItemCounter onAdd = {add} stock={item.stock} initial={1}/>
    </Card.Body>
  </Card>);
};

