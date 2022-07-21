import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkCards";
import { WORK } from "../../Constants";




function Work() {
	return (
	  <Container fluid className="interests-section">
		<Container>
		  <h1 className="interests-heading">
			My current <strong>Work </strong>
		  </h1>
		  <Row style={{ paddingBottom: "10px",  display:"flex"}}>
			{WORK.map((work, index) => (
			  <Col md={4} className="interests-card" key={index} width="200">
				  <WorkCards
				  imgPath={work.image}
				  title={work.name}
				  description={work.description}
				  technologyUsed={work.technologyUsed}
				  duration={work.duration}
				/>
			  </Col>           
			))}
		  </Row>
		</Container>
	  </Container>
	);
  }
  
  export default Work;
  
   
 
