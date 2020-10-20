import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Col from "react-bootstrap/Col";

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
          className="rounded-circle h-25 mt-2"
          onClick={(e) => {setPartners(e, index, "delete")}}
        >
          -
        </Button>
      </Form.Row>
    </Col>
  );
};

export default PartnerSelect;
