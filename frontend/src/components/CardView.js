import React from "react";
import Container from "react-bootstrap/Container";
import CardRow from "./CardRow";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CardView = ({ collection, header, type}) => {
  return (
    <div className="pb-3">
      <Container fluid className="px-5 pb-5 pt-3">
        <h1>{header}</h1>
        <Row>
          <Col>
            {collection
              ? collection.map((collectionDeck, i) => (
                  <CardRow
                    projects={collectionDeck}
                    rowNumber={i + 1}
                    key={`${type}_row_${i + 1}`}
                    type={type}
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
