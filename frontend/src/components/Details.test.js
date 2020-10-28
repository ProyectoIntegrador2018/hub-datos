import React from "react";
import { render } from "@testing-library/react";
import Details from "./Details";

test("renders details", () => {
  const { getByText, getByTestId } = render(
    <Details
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
  getByText("Detalles")
  getByText("Inscribirse");
});
