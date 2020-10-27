import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import CardComponent from "./CardComponent";

const CardRow = ({ projects, rowNumber, type, header, variant, deleteHandler }) => {
  let route = header;
  const removeSpaces = () => {
    route = route.replace(" ", "");
  }

  removeSpaces();
  return (
    <CardColumns className="mb-4 mt-2">
      {projects.map((project, i) => (
        <CardComponent
          title={project.nombre}
          description={project.descripcion}
          route={`${route}/${project.id}`}
          key={`project_${rowNumber}_${i}`}
          type={type}
          img={project.imagen}
          variant={variant}
          id={project.id}
          deleteHandler={deleteHandler}
        />
      ))}
    </CardColumns>
  );
};

export default CardRow;
