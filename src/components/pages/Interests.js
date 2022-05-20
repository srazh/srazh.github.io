import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InterestCards from "./InterestCards";
import { INTERESTS } from "../../Constants";




 function Interests() {
  return (
    <Container fluid className="interests-section">
      <Container>
        <h1 className="interests-heading">
          My current <strong>Interests </strong>
        </h1>
        <Row style={{ paddingBottom: "10px",  display:"flex"}}>
          {INTERESTS.map((interest, index) => (
            <Col md={4} className="interests-card" key={index} width="200">
                <InterestCards
                imgPath={interest.image}
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

 


