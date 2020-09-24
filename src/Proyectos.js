import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import CardRow from "./components/CardRow";
import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Proyectos() {
  const [projects, setProjects] = useState(null);

  const splitProjects = (projectList) => {
      // split projects into chunks of 5 to map in the card rows
    const projectChunks = [];
    while (projectList.length) {
      projectChunks.push(projectList.splice(0, 3));
    }

    return projectChunks;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      /* code needed later to fetch data needed for the page
      const { data } = await axios(`${URI}/ruta/del/endpoint`);
      const { totalPages, page } = data;
      const projectList = data.projects;
      */

      // mock data for the time being
      let projectList = [
        {
          title: "10K Challenge",
          description: "10K Description",
          route: "#10KChallenge",
        },
        {
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "#UniversitiesForFounders",
        },
        {
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "#UniversitiesForFounders",
        },{
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "#UniversitiesForFounders",
        },
        {
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "#UniversitiesForFounders",
        },
        {
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "#UniversitiesForFounders",
        }
      ];

      const projectChunks = splitProjects(projectList);

      setProjects(projectChunks);
    };

    fetchProjects();
  }, []);

  return (
    <div className="pb-3">
      <Container fluid className="px-5 pb-5">
        <h1>Proyectos</h1>
        <Row>
          <Col>
            {projects
              ? projects.map((projectDeck, i) => (
                  <CardRow
                    projects={projectDeck}
                    rowNumber={i + 1}
                    key={`project_row_${i + 1}`}
                  />
                ))
              : ""}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Proyectos;
