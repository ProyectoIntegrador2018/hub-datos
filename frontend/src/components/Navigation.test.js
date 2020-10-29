import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders nav bar", () => {
  const { getByText } = render(<Navigation />);

  getByText("INICIO");
  getByText("PROYECTOS");
  getByText("EVENTOS");
  getByText("NUESTRA GENTE");
  getByText("SOBRE NOSOTROS");
  getByText("MIS PROYECTOS");
});
