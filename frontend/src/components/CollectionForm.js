import "../App.css";
import "./css/CustomInputs.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import placeholder from "../assets/placeholder.png";
import React, { useState } from "react";
import RoundedButton from "./RoundedButton";
import Row from "react-bootstrap/Row";
import { Subbutton } from "./Subbutton";

function CollectionForm({
  title,
  abstract,
  description,
  imgUrl,
  setTitle,
  setAbstract,
  setDescription,
  _handleChange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  status,
  setStatus,
  partners,
  setPartners,
  variant,
}) {
  const options = [
    "",
    "Microsoft",
    "Saphana",
    "Intel",
    "Amazon Web Services",
    "Dell EMC",
    "Oracle",
    "IBM Watson",
    "Cisco",
    "Tableau",
    "Cemex",
    "Heineken",
    "Chevron",
    "Arca Continental",
  ];

  const partnerSelect = (
    <Form.Control
      as="select"
      className="my-2 custom-input"
      onChange={(e) => {
        setPartners(e);
      }}
    >
      {options.map((option, i) => (
        <option key={`option_${i}`}>{option}</option>
      ))}
    </Form.Control>
  );

  const [partnerList, setPartnerList] = useState([partnerSelect]);

  const _handleClick = (e) => {
    e.preventDefault();
    let newPartners = [...partnerList, partnerSelect];
    setPartnerList(newPartners);
  };

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
                <Form.Label className="font-weight-bold">Title</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  className="custom-input"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
                <Form.Label className="font-weight-bold mt-4">
                  Descripción Corta
                </Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  className="custom-input"
                  maxLength={280}
                  onChange={(e) => {
                    setAbstract(e.target.value);
                  }}
                  value={abstract}
                />
                <Form.Text className={counterClass(abstract.length, 140, 280)}>
                  Characters: {abstract.length}/280
                </Form.Text>
                <Form.Label className="font-weight-bold mt-4">
                  Descripción Detallada
                </Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={5}
                  className="custom-input"
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
                <Form.Label className="font-weight-bold">{`Encargado del ${variant}`}</Form.Label>
                <Form.Control type="text" className="custom-input" size="lg" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="pt-3 mr-4 font-weight-bold">
                  Estatus del {variant}:
                </Form.Label>
                <div onChange={(e) => {setStatus(e.target.value)}}>
                  <Form.Check
                    inline
                    label="Activo"
                    type="radio"
                    className="pr-5"
                    size="lg"
                    name="status"
                    value="activo"
                  />
                  <Form.Check
                    inline
                    label="Finalizado"
                    type="radio"
                    className="pl-5"
                    size="lg"
                    name="status"
                    value="finalizado"
                  />
                </div>
              </Form.Group>
              <Form.Row className="pt-2">
                <Form.Group as={Col}>
                  <Form.Label className="font-weight-bold">
                    {variant === "Proyecto"
                      ? `Inicio del ${variant}`
                      : `Fecha del ${variant}`}
                  </Form.Label>
                  <Form.Control
                    type="date"
                    className="custom-input"
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className="font-weight-bold">
                    Fin del Proyecto
                  </Form.Label>
                  <Form.Control
                    type="date"
                    className="custom-input"
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                  />
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
          <div className="card-shadow p-4 mb-3">
            <h3 className="mb-2">Partners</h3>
            <Form.Group>
              {partnerList.map((partner, i) => (
                <div key={i}>{partner}</div>
              ))}
            </Form.Group>
            <Subbutton onClick={_handleClick}>Agregar Partner</Subbutton>
          </div>
          <div className="card-shadow p-3 d-flex justify-content-center">
            <RoundedButton type="blackBtn">Editar</RoundedButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionForm;
