import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Col from "react-bootstrap/Col";
import { FiMinus } from "react-icons/fi";

const PartnerSelect = ({ value, setPartners, index, _deletePartner }) => {
  const options = [
    "",
    "Microsoft",
    "Saphana",
    "Intel",
    "Amazon Web Services",
    "Dell EMC",
    "Oracle",
    "IBM Watson",
    "Cisco",
    "Tableau",
    "Cemex",
    "Heineken",
    "Chevron",
    "Arca Continental",
  ];
  return (
    <Col>
      <Form.Row>
        <Form.Control
          as="select"
          className="my-2 custom-input w-75 mr-3"
          onChange={(e) => {
            setPartners(e, index, "");
          }}
          value={value}
        >
          {options.map((option, i) => (
            <option key={`option_${i}`}>{option}</option>
          ))}
        </Form.Control>
        <Button
          variant="outline-danger"
          className="rounded-circle mt-4"
          onClick={(e) => {setPartners(e, index, "delete")}}
          style={{height: "2em", width: "2em", paddingTop: ".1em", paddingLeft: ".4em"}}
        >
          <FiMinus />
        </Button>
      </Form.Row>
    </Col>
  );
};

export default PartnerSelect;
