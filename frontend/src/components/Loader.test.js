import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

test("renders loader", () => {
  const { getByTestId } = render(<Loader />);

  getByTestId("load-spinner");
});
