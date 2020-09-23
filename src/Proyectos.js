import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import CardComponent from "./components/CardComponent";
import CardDeck from "react-bootstrap/CardDeck";
import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Proyectos() {
  const [projects, setProjects] = useState([
    {
      title: "10K Challenge",
      description: "10K Description",
      route: "#10KChallenge",
    },
    {
      title: "Universities for Founders MTY",
      description: "Universities for Founders Description",
      route: "#UniversitiesForFounders",
    }
  ]);
  return (
    <div>
      <Container fluid className="px-5">
        <h1>Proyectos</h1>
        <Row>
          <Col>
            <Row className={projects.length < 5 ? "pl-3 mb-3" : "justify-content-center mb-3"}>
              <CardDeck className={projects.length < 5 ? "" : "w-100"}>
                {projects.map((project, i) => (
                  <CardComponent
                    title={project.title}
                    description={project.description}
                    route={project.route}
                    key={`project_${i}`}
                  />
                ))}
              </CardDeck>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Proyectos;
