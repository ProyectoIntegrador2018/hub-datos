import React from "react";
import { render } from "@testing-library/react";
import CardComponent from "./CardComponent";

test("renders project card", () => {
  const { getByText, getByAltText } = render(
    <CardComponent
      title="title"
      description="description"
      type="Proyecto"
      img="https://picsum.photos/2000/400"
    />
  );

  getByText("title");
  getByText("description");
  getByAltText("project-image");
  getByText("Ver Proyecto")
});

test("renders event card", () => {
    const { getByText, getByAltText } = render(
      <CardComponent
        title="title"
        description="description"
        type="Evento"
        img="https://picsum.photos/2000/400"
      />
    );
  
    getByText("title");
    getByText("description");
    getByAltText("project-image");
    getByText("Ver Evento");
  });