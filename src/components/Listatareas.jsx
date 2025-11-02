import ListGroup from "react-bootstrap/ListGroup";
import Items from "./Items";

const Listatareas = ({ arrayTareas }) => {
  return (
    <ListGroup>
      {arrayTareas.map((item, indice) => (
        <Items key={indice} item={item}></Items>
      ))}
    </ListGroup>
  );
};

export default Listatareas;
