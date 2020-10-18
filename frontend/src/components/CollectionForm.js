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
  encargado,
  setEncargado,
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
  const [titleError, setTitleError] = useState("");
  const [abstractError, setAbstractError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [encargadoError, setEncargadoError] = useState("");
  const [imgError, setImgError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");

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

  const checkInputs = () => {
    !/\S/.test(title)
      ? setTitleError("Favor de escribir un título")
      : setTitleError("");
    !/\S/.test(abstract)
      ? setAbstractError("Favor de escribir descripción corta")
      : setAbstractError("");
    !/\S/.test(description)
      ? setDescriptionError("Favor de escribir la descripción detallada")
      : setDescriptionError("");
    !/\S/.test(encargado)
      ? setEncargadoError("Favor de escribir el nombre del encargado")
      : setEncargadoError("");
    !imgUrl
      ? setImgError("Favor de elegir una imágen para el proyecto")
      : setImgError("");
    !/\S/.test(startDate)
      ? setStartDateError("Favor de elegir una fecha de inicio")
      : setStartDateError("");
    !/\S/.test(endDate)
      ? setEndDateError("Favor de elegir una fecha de fin")
      : setEndDateError("");

    // necesario para comparar fechas
    const stDateObj = new Date(startDate);
    const edDateObj = new Date(endDate);
    edDateObj < stDateObj
      ? setEndDateError("La fecha de fin tiene que ser después del inicio")
      : setEndDateError("");
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
                <Form.Label className="font-weight-bold">Titulo</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  className="custom-input"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
                <Form.Text className="text-danger">{titleError}</Form.Text>
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
                <Form.Text
                  className={
                    abstractError === ""
                      ? counterClass(abstract.length, 140, 280)
                      : "text-danger"
                  }
                >
                  {abstractError === ""
                    ? `Characters: ${abstract.length}/280`
                    : abstractError}
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
                  className={
                    descriptionError === ""
                      ? counterClass(description.length, 460, 560)
                      : "text-danger"
                  }
                >
                  {descriptionError === ""
                    ? `Characters: ${description.length}/560`
                    : descriptionError}
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">{`Encargado del ${variant}`}</Form.Label>
                <Form.Control
                  type="text"
                  className="custom-input"
                  size="lg"
                  value={encargado}
                  onChange={(e) => {
                    setEncargado(e.target.value);
                  }}
                />
                <Form.Text className="text-danger">
                  {encargadoError === "" ? "" : encargadoError}
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="pt-3 mr-4 font-weight-bold">
                  Estatus del {variant}:
                </Form.Label>
                <div
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <Form.Check
                    inline
                    label="Activo"
                    type="radio"
                    className="pr-5"
                    size="lg"
                    name="status"
                    value="Activo"
                    defaultChecked={status === "Activo" ? true : false}
                  />
                  <Form.Check
                    inline
                    label="Finalizado"
                    type="radio"
                    className="pl-5"
                    size="lg"
                    name="status"
                    value="Finalizado"
                    defaultChecked={status === "Finalizado" ? true : false}
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
                    value={startDate}
                  />
                  <Form.Text className="text-danger">
                    {startDateError === "" ? "" : startDateError}
                  </Form.Text>
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
                    value={endDate}
                  />
                  <Form.Text className="text-danger">
                    {endDateError === "" ? "" : endDateError}
                  </Form.Text>
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
                multiple={false}
                onChange={(e) => _handleChange(e)}
              />
              <Image
                src={imgUrl === "" ? placeholder : imgUrl}
                fluid
                className="mt-3"
              />
              <Form.Text className="text-danger">
                {imgError === "" ? "" : imgError}
              </Form.Text>
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
            <RoundedButton type="blackBtn" onClick={checkInputs}>
              Editar
            </RoundedButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionForm;
