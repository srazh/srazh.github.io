import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkCards";
import { WORK } from "../../Constants";


function Work() {
	return (
	  <Container fluid className="work-section">
		<Container>
		  <h1 className="work-heading">
			My current <strong className="purple"> Work </strong>
		  </h1>
		  
		  
		</Container>
	  </Container>
	);
  }
  
  export default Work;
  
   
  /**
   * <Row style={{ paddingBottom: "10px",  display:"flex"}}>
			{WORK.map((interest, index) => (
			  <Col md={4} className="interests-card" key={index} width="200">
				  <WorkCards
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
   */