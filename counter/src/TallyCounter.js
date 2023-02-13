import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TallyCounter(props) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        <Card.Body>
          <Card.Title>
            {`counter uuid: ${props.id}`}
          </Card.Title>
          <Card.Text>
            {props.count}
          </Card.Text>
          <Button variant="success" onClick={() => props.increaseCounter()}>Increase</Button>
          <Button variant="warning" onClick={() => props.decreaseCounter()}>Decrease</Button>
          <Button variant="danger" onClick={() => props.removeCounter()}>Remove</Button>
          <Button variant="dark" onClick={() => props.resetCounter()}>RESET</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default TallyCounter;