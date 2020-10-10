import "../App.css";
import "./CustomInputs.css";
import "..";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import placeholder from "../assets/placeholder.png";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";

function EditarProyecto() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  const _handleChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
      setImgUrl(reader.result);
    };

    console.log(imgUrl);

    reader.readAsDataURL(file);
  };

  return (
    <Container fluid className="mt-3">
      <h1 className="mb-3"> Editar Proyecto </h1>
      <Row className="mb-5">
        <Col className="mb-4">
          <div className="card-shadow p-5">
            <Form className="ml-auto mr-auto">
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Title"
                  className="custom-input"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={3}
                  placeholder="Descripción Corta"
                  className="mt-4 custom-input"
                  onChange={(e) => {
                    setAbstract(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Characters: {abstract.length}/280
                </Form.Text>
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={5}
                  placeholder="Descripción Detallada"
                  className="mt-4 custom-input"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Characters: {description.length}/560
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col className="mb-4">
          <div className="card-shadow p-5">
            <Form.Group>
              <h3 className="mb-3">Sube una imágen para tu proyecto</h3>
              <Form.File id="fileItem" onChange={(e) => _handleChange(e)} />
              <Image
                src={imgUrl === "" ? placeholder : imgUrl}
                fluid
                className="mt-3"
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EditarProyecto;
