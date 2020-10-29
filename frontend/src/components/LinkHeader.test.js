import React from "react";
import { render } from "@testing-library/react";
import LinkHeader from "./LinkHeader";

test("renders login button", () => {
  const { getByText } = render(<LinkHeader />);

  getByText("INICIAR SESIÓN / REGISTRARSE");
});
