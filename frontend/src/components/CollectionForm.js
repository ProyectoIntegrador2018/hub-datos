import "../App.css";
import "./css/CustomInputs.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import placeholder from "../assets/placeholder.png";
import React from "react";
import RoundedButton from "./RoundedButton";
import Row from "react-bootstrap/Row";

function CollectionForm({
  title,
  abstract,
  description,
  imgUrl,
  setTitle,
  setAbstract,
  setDescription,
  _handleChange,
  variant,
}) {
  const counterClass = (count, middle, limit) => {
    if (count < middle) {
      return "text-muted";
    } else if (count > middle && count < limit) {
      return "warning";
    }
    return "text-danger";
  };

  return (
    <Container fluid className="mt-3 mb-3">
      <h1 className="mb-3"> Editar {variant} </h1>
      <Row className="mb-5">
        <Col className="mb-4">
          <div className="card-shadow p-5">
            <Form className="ml-auto mr-auto">
              <Form.Group>
                <h3 className="mb-3">Datos del {variant}</h3>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Title"
                  className="custom-input"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
                <Form.Control
                  size="lg"
                  as="textarea"
                  placeholder="Descripción Corta"
                  className="mt-4 custom-input"
                  maxLength={280}
                  onChange={(e) => {
                    setAbstract(e.target.value);
                  }}
                  value={abstract}
                />
                <Form.Text className={counterClass(abstract.length, 140, 280)}>
                  Characters: {abstract.length}/280
                </Form.Text>
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={5}
                  placeholder="Descripción Detallada"
                  className="mt-4 custom-input"
                  maxLength={560}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                />
                <Form.Text
                  className={counterClass(description.length, 460, 560)}
                >
                  Characters: {description.length}/560
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder={`Encargado del ${variant}`}
                  className="custom-input"
                  size="lg"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="pt-3 mr-4">
                  Estatus del {variant}:
                </Form.Label>
                <Form.Check
                  inline
                  label="Activo"
                  type="radio"
                  className="pr-5"
                  size="lg"
                  name="status"
                />
                <Form.Check
                  inline
                  label="Finalizado"
                  type="radio"
                  className="pl-5"
                  size="lg"
                  name="status"
                />
              </Form.Group>
              <Form.Row className="pt-2">
                <Form.Group as={Col}>
                  <Form.Label>
                    {variant === "Proyecto"
                      ? `Inicio del ${variant}`
                      : `Fecha del ${variant}`}
                  </Form.Label>
                  <Form.Control type="date" className="custom-input" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Fin del Proyecto</Form.Label>
                  <Form.Control type="date" className="custom-input" />
                </Form.Group>
              </Form.Row>
            </Form>
          </div>
        </Col>
        <Col className="mb-4">
          <div className="card-shadow p-5 mb-4">
            <Form.Group>
              <h3 className="mb-3">
                Sube una imágen para tu {variant.toLowerCase()}
              </h3>
              <Form.File
                accept="image/jpeg, imgage/jpg, image/png"
                className="mt-5"
                id="fileItem"
                onChange={(e) => _handleChange(e)}
              />
              <Image
                src={imgUrl === "" ? placeholder : imgUrl}
                fluid
                className="mt-3"
              />
            </Form.Group>
          </div>
          <div className="card-shadow p-4 d-flex justify-content-center">
            <RoundedButton type="blackBtn">Editar</RoundedButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionForm;
