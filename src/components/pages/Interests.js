import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InterestCards from "./InterestCards";
import { INTERESTS } from "../../Constants";


function Interests() {
  return (
    <Container fluid className="interests-section">
      <Container>
        <h1 className="interests-heading">
          My current <strong className="purple">Interests </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {INTERESTS.map((interest, index) => (
            <Col md={4} className="interests-card" key={index}>
              <InterestCards
                imgPath={interest.image}
                technologyUsed={interest.technologyUsed}
                isBlog={false}
                title={interest.name}
                description={interest.description}
                link={interest.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Interests;