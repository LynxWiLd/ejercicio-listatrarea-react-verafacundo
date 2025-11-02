import ListGroup from "react-bootstrap/ListGroup";
import Items from "./Items";

const Listatareas = ({ arrayTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {arrayTareas.map((item, indice) => (
        <Items key={indice} item={item} borrarTarea={borrarTarea}></Items>
      ))}
    </ListGroup>
  );
};

export default Listatareas;
