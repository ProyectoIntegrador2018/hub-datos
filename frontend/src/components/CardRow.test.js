import React from "react";
import { render } from "@testing-library/react";
import CardRow from "./CardRow";

const project = {
    nombre: "title",
    descripcion: "description",
    type: "Proyecto",
    img:"https://picsum.photos/2000/400"
}

const projects = [project];

test("renders card row", () => {
  const { getByText, getByAltText } = render(
    <CardRow
      projects={projects}
      header=" "
      type="Proyecto"
    />
  );

  getByText("title");
  getByText("description");
  getByAltText("project-image");
  getByText("Ver Proyecto")
});