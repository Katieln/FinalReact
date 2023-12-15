import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
  return (
    <Card style={{  display: "flex", flexWrap: "wrap", width: '13rem', margin: '8px' }}>
      <Card.Img variant="top" src={item.pictureURL}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Link to={`/items/${item.id}`}>
        <Button variant="primary">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};