import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import CardComponent from "./CardComponent";

const CardRow = ({ projects, rowNumber, type, header }) => {
  return (
    <CardColumns className="mb-4 mt-2">
      {projects.map((project, i) => (
        <CardComponent
          title={project.nombre}
          description={project.descripcion}
          route={`${header}/${project.id}`}
          key={`project_${rowNumber}_${i}`}
          type={type}
          img={project.imagen}
        />
      ))}
    </CardColumns>
  );
};

export default CardRow;
