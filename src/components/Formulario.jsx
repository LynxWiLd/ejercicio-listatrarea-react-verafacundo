import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Listatareas from "./Listatareas";
import { useState } from "react";

const Formulario = () => {
  const [arrayTareas, setArrayTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Verificar que la tarea no exista ya en el array
    const tareaExiste = arrayTareas.find(todo => todo.toLowerCase() === tarea.toLowerCase().trim());
    if (tareaExiste) {
      alert("La tarea ya existe");
      return;
    }
    setArrayTareas([...arrayTareas, tarea.trim()]); //Agregar la nueva tarea sin espacios al array
    setTarea("");
  };

  const borrarTarea = (tareaABorrar) => {
    const nuevasTareas = arrayTareas.filter(todo => todo !== tareaABorrar);
    //actualizar el estado con las nuevas tareas
    setArrayTareas(nuevasTareas);
  }

  return (
    <section className="container mt-4 p-4 border rounded shadow bg-dark text-white ">
      <h1 className="text-center">Bienvenidos</h1>
      <Form className="w-75 mx-auto mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="textoTarea">
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <Form.Control
              type="text"
              placeholder="Ingrese la tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form.Group>
      </Form>
      <Listatareas arrayTareas={arrayTareas} borrarTarea={borrarTarea}></Listatareas>
    </section>
  );
};

export default Formulario;
