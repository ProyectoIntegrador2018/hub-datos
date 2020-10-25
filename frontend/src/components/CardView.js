import React from "react";
import Container from "react-bootstrap/Container";
import CardRow from "./CardRow";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RoundedButton from "./RoundedButton";
import { useHistory } from "react-router-dom";

const CardView = ({ collection, header, type, variant }) => {
  let history = useHistory();

  const _handleCreation = (e) => {
    e.preventDefault();
    history.push("/CrearProyecto");
  };

  return (
    <div className="pb-3">
      <Container fluid className="px-5 pb-5 pt-3">
        <Row className="justify-content-between ml-1 mr-4">
          <h1>{header}</h1>
          {variant === "delete" ? (
            <RoundedButton
              type="blackBtn"
              onClick={(e) => {
                _handleCreation(e);
              }}
            >
              Crear Proyecto
            </RoundedButton>
          ) : (
            ""
          )}
        </Row>
        <Row>
          <Col>
            {collection
              ? collection.map((collectionDeck, i) => (
                  <CardRow
                    projects={collectionDeck}
                    rowNumber={i + 1}
                    key={`${type}_row_${i + 1}`}
                    type={type}
                    header={header}
                    variant={variant}
                  />
                ))
              : ""}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardView;
