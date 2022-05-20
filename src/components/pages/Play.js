import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import antelopeCanyon from "../../assets/Play/antelopeCanyon.jpg";
import ballet from "../../assets/Play/ballet.jpg";
import goldfish from "../../assets/Play/goldfish.jpg";
import jellyfish from "../../assets/Play/jellyfish.jpg";

export default function Play() {

	return (
		<Container fluid className="play-section">
			<h1 className="interests-heading">
          <strong className="purple">Traditional Art </strong>
        	</h1>
			<Row style={{ paddingTop: "10px", paddingLeft:"15px", display:"flex"}}>
				<Col md={4} className="interests-card" width="200">

			<img src={antelopeCanyon} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>

			<img src={ballet} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>

			<img src={goldfish} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>

			<img src={jellyfish} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>		
				</Col>
			</Row>
		</Container>
	);
}










