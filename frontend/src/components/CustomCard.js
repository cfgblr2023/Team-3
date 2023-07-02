import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button variant="warning" href={props.link}>{props.button}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;