import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
  return (
    <Card style={{  width: '13rem', margin: '5px', margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <Card.Img variant="top" src={item.pictureURL} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}/>
      <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Precio: $ {item.price}
        </Card.Text>
        <Link to={`/items/${item.id}`}>
        <Button variant="primary">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};