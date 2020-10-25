import React from "react";
import { render } from "@testing-library/react";
import ProjectBanner from "./ProjectBanner";

test("renders project banner", () => {
  const { getByText, getByTestId } = render(
    <ProjectBanner
      title="title"
      imgUrl="https://picsum.photos/2000/400"
      author="author"
      date="2020-01-02"
    />
  );

  getByText("title");
  getByText("Encargado: author");
  getByText("Fecha: 2020-01-02");
  getByTestId("imagen-del-proyecto");
});
