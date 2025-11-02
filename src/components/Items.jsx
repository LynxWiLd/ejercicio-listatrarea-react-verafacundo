import { ListGroup, Button } from "react-bootstrap";

const Items = ({item}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center w-75 mx-auto mt-3">
      {item} <Button variant="danger">🗑️</Button>
    </ListGroup.Item>
  );
}

export default Items;
