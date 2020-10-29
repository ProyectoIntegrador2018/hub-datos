import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders header img", () => {
  const { getByAltText } = render(<Header />);

  getByAltText("digital-hub logo");
});
