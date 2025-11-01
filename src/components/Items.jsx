import { ListGroup, Button } from "react-bootstrap";

const Items = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center w-75 mx-auto mt-3">
      Tarea 1 <Button variant="danger">🗑️</Button>
    </ListGroup.Item>
  );
}

export default Items;
