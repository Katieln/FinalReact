
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { ItemCounter } from './ItemCounter';
import { CartContext } from '../contexts/CartContext';

export const DetailsItem = ({ item }) => {

  const {onAdd} = useContext(CartContext);
  const add = () => {
    onAdd(item);
  };

    return (<Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={item.pictureURL} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.description}
        {item.details}
        
      </Card.Text>
      <ItemCounter onAdd = {add}/>
    </Card.Body>
  </Card>);
};

