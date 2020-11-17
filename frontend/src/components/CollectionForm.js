import "../App.css";
import "./css/CustomInputs.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import placeholder from "../assets/placeholder.png";
import PartnerSelect from "./PartnerSelect";
import React, { useState } from "react";
import RoundedButton from "./RoundedButton";
import Row from "react-bootstrap/Row";
import { Subbutton } from "./Subbutton";
import ReactMarkdown from "react-markdown";

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
  cupo,
  setCupo,
  variant,
  action,
  type,
}) {
  const [titleError, setTitleError] = useState("");
  const [abstractError, setAbstractError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [encargadoError, setEncargadoError] = useState("");
  const [imgError, setImgError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [mode, setMode] = useState("Editar");

  const counterClass = (count, min, middle, limit) => {
    if (count >= min && count < middle) {
      return "text-success";
    } else if (count >= middle && count < limit) {
      return "warning";
    } else if (count === limit) {
      return "text-danger";
    }
    return "text-muted";
  };

  const checkInputs = () => {
    !/\S/.test(title)
      ? setTitleError("Favor de escribir un título")
      : setTitleError("");
    !/\S/.test(abstract)
      ? setAbstractError("Favor de escribir descripción corta")
      : setAbstractError("");
    abstract.trim().length < 50
      ? setAbstractError("Favor de escribir minimo 50 chars")
      : setAbstractError("");
    !/\S/.test(description)
      ? setDescriptionError("Favor de escribir la descripción detallada")
      : setDescriptionError("");
    description.trim().length < 100
      ? setDescriptionError("Favor de escribir minimo 100 chars")
      : setDescriptionError("");
    !/\S/.test(encargado)
      ? setEncargadoError("Favor de escribir el nombre del encargado")
      : setEncargadoError("");
    !imgUrl
      ? setImgError("Favor de elegir una imagen para el proyecto")
      : setImgError("");
    !/\S/.test(startDate)
      ? setStartDateError("Favor de elegir una fecha de inicio")
      : setStartDateError("");

    let answers = [title, abstract, description, encargado, imgUrl, startDate];

    let flag = true;
    if (variant === "Proyecto") {
      !/\S/.test(endDate)
        ? setEndDateError("Favor de elegir una fecha de fin")
        : setEndDateError("");
      // necesario para comparar fechas
      const stDateObj = new Date(startDate);
      const edDateObj = new Date(endDate);

      if (edDateObj < stDateObj && edDateObj !== "Invalid Date") {
        setEndDateError("La fecha de fin tiene que ser después del inicio")
      } else if (edDateObj === "Invalid Date") {
        setEndDateError("Favor de elegir una fecha de fin")
      }
      flag = edDateObj > stDateObj;

      answers.push(endDate);
    }

    if (
      answers.every((answer) => /\S/.test(answer)) &&
      flag &&
      abstract.length >= 50 &&
      description.length >= 100
    ) {
      console.log("posting");
      return action();
    }
  };

  const _handlePartnerSelect = (e) => {
    e.preventDefault();
    let newPartners = [...partners, ""];
    setPartners(newPartners, -1, "add");
  };

  const _handlePartners = (e, index, option) => {
    e.preventDefault();
    setPartners(e.target.value, index, option);
  };

  const _handleMode = (e) => {
    if (mode === "Editar") {
      return setMode("Prever");
    }
    return setMode("Editar");
  };

  return (
    <Container fluid className="mt-3 mb-3">
      <h1 className="mb-3">
        {" "}
        {type} {variant}{" "}
      </h1>
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
                  Descripción Corta (min. 50 caracteres)
                </Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  className="custom-input"
                  maxLength={200}
                  onChange={(e) => {
                    setAbstract(e.target.value);
                  }}
                  value={abstract}
                />
                <Form.Text
                  className={
                    abstractError === ""
                      ? counterClass(abstract.length, 50, 130, 200)
                      : "text-danger"
                  }
                >
                  {abstractError === ""
                    ? `Characters: ${abstract.length}/200`
                    : abstractError}
                </Form.Text>
                <Form.Label className="font-weight-bold mt-4">
                  Descripción Detallada (min. 100 characeres){" "}
                  <a href="https://commonmark.org/help/" target="blank">
                    Guía markdown
                  </a>
                  <br />
                  <Form.Check
                    className="mt-2"
                    type="switch"
                    id="custom-switch"
                    label={mode}
                    onChange={(e) => {
                      _handleMode(e);
                    }}
                  />
                </Form.Label>
                {mode === "Editar" ? (
                  <Form.Control
                    size="lg"
                    as="textarea"
                    rows={5}
                    className="custom-input"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  />
                ) : (
                  <ReactMarkdown className="text-break">
                    {description}
                  </ReactMarkdown>
                )}
                <Form.Text
                  className={
                    descriptionError === ""
                      ? counterClass(description.length, 100, 460, 10000)
                      : "text-danger"
                  }
                >
                  {descriptionError === ""
                    ? `Characters: ${description.length}/10000`
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
                  {variant === "Proyecto" ? (
                    <>
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
                    </>
                  ) : (
                    <>
                      <Form.Label className="font-weight-bold">
                        Cupo del Evento
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className="custom-input"
                        onChange={(e) => {
                          setCupo(e.target.value);
                        }}
                        value={cupo}
                      />
                    </>
                  )}
                </Form.Group>
              </Form.Row>
            </Form>
          </div>
        </Col>
        <Col className="mb-4">
          <div className="card-shadow p-5 mb-4">
            <Form.Group>
              <h3 className="mb-3">
                Sube una imagen para tu {variant.toLowerCase()}
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
              {partners.map((partner, i) => (
                <PartnerSelect
                  value={partner}
                  key={`partner_${i}`}
                  setPartners={_handlePartners}
                  index={i}
                />
              ))}
            </Form.Group>
            <Subbutton onClick={_handlePartnerSelect}>
              Agregar Partner
            </Subbutton>
          </div>
          <div className="card-shadow p-3 d-flex justify-content-center">
            <RoundedButton type="blackBtn" onClick={checkInputs}>
              {type}
            </RoundedButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionForm;
