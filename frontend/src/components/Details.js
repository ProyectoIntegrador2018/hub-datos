import "../App.css";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProjectBanner from "./ProjectBanner";
import React from "react";
import ReactMarkdown from "react-markdown";
import RoundedButton from "./RoundedButton";
import Row from "react-bootstrap/Row";

const Details = ({ date, author, title, imgUrl, description }) => {
  let history = useHistory();

  const _enroll = (_) => {
    let token = localStorage.getItem("token");
    let role = localStorage.getItem("role");
    console.log("Hjejeje");
    if (token && role === "alumno") {
      history.push("/Inscrito");
    } else {
      history.push("/Error");
    }
  };

  return (
    <div className="pb-5">
      <ProjectBanner
        date={date}
        author={author}
        title={title}
        imgUrl={imgUrl}
      />
      <Container fluid className="pb-3" style={{ width: "90%" }}>
        <Row className="justify-content-center">
          <Col xs={9} className="card-shadow rounded mb-3 p-5">
            <h1 className="pb-4">Detalles</h1>
            <ReactMarkdown className="text-break">{description}</ReactMarkdown>
          </Col>
          <Col className="px-4">
            <div className="card-shadow p-3 rounded d-flex justify-content-center">
              <RoundedButton type="blackBtn" onClick={_enroll}>
                Inscribirse
              </RoundedButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
