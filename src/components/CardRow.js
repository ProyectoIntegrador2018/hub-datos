import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import CardComponent from "./CardComponent";

const CardRow = ({ projects, rowNumber }) => {
  return (
    <CardColumns>
      {projects.map((project, i) => (
        <CardComponent
          title={project.title}
          description={project.description}
          route={project.route}
          key={`project_${rowNumber}_${i}`}
        />
      ))}
    </CardColumns>
  );
};

export default CardRow;
