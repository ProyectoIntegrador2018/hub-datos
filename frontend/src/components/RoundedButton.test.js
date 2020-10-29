import React from "react";
import { render } from "@testing-library/react";
import RoundedButton from "./RoundedButton";

test("renders RoundedButton", () => {
  const { getByText } = render(<RoundedButton> Hola </RoundedButton>);

  getByText("Hola");
});
