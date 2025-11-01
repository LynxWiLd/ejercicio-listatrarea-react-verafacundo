import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Listatareas from "./Listatareas";

function Formulario() {
  return (
    <section className="container mt-4 p-4 border rounded shadow bg-dark text-white ">
      <h1 className="text-center">Bienvenidos</h1>
      <Form className="w-75 mx-auto mt-3">
        <Form.Group className="mb-3" controlId="textoTarea">
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <Form.Control type="text" placeholder="Ingrese la tarea" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form.Group>
      </Form>
      <Listatareas></Listatareas>
    </section>
  );
}

export default Formulario;
