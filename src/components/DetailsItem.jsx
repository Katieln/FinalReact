import Card from 'react-bootstrap/Card';

export const DetailsItem = ({ item }) => {
    return (<Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={item.pictureURL} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.description}
        {item.details}
      </Card.Text>
    </Card.Body>
  </Card>);
};

