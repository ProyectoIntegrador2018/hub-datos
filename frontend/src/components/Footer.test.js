import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer", () => {
  const { getByText } = render(<Footer />);

  getByText("Información de contacto");
});
