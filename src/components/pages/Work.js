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

		  <Row style={{ paddingBottom: "10px",  display:"flex"}}>
			{WORK.map((work, index) => (
			  <Col md={4} className="work-card" key={index} width="200">
				  <WorkCards
				  imgPath={work.image}
				  technologyUsed={work.techUsed}
				  title={work.name}
				  duration={work.duration}
				  description={work.description}
				  link={work.url}
				/>
			  </Col>           
			))}
		  </Row>
		  
		  
		</Container>
	  </Container>
	);
  }
  
  export default Work;
  
   
 
