import React from "react";
import { render } from "@testing-library/react";
import PartnerSelect from "./PartnerSelect";

test("renders partner select", () => {
  const { getByText } = render(<PartnerSelect />);

  getByText("Microsoft");
  getByText("Saphana");
  getByText("Intel");
  getByText("Amazon Web Services");
  getByText("Dell EMC");
  getByText("Oracle");
  getByText("IBM Watson");
  getByText("Cisco");
  getByText("Tableau");
  getByText("Cemex");
  getByText("Heineken");
  getByText("Chevron");
  getByText("Arca Continental");
});
