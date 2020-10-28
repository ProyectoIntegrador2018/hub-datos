import React from "react";
import { render } from "@testing-library/react";
import CardView from "./CardView";

const project = {
    nombre: "title",
    descripcion: "description",
    type: "Proyecto",
    img:"https://picsum.photos/2000/400"
}

const projects = [[project]];

test("renders CardView", () => {
  const { getByText, getByAltText } = render(
    <CardView
      collection={projects}
      header="Proyecto"
      type="Proyecto"
    />
  );

  getByText("Proyecto")
  getByText("title");
  getByText("description");
  getByAltText("project-image");
  getByText("Ver Proyecto")
});