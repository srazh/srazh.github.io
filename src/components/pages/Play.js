import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import antelopeCanyon from "../../assets/Play/antelopeCanyon.jpg";
import ballet from "../../assets/Play/ballet.jpg";
import goldfish from "../../assets/Play/goldfish.jpg";
import jellyfish from "../../assets/Play/jellyfish.jpg";

import girl from "../../assets/Play/girl.jpg";
import asapRocky from "../../assets/Play/asapRocky.jpg";
import koiFish from "../../assets/Play/koiFish.jpg";
import cherries2 from "../../assets/Play/cherries2.jpg";



export default function Play() {

	return (
		<Container fluid className="play-section">
			<h1 className="interests-heading">
          <strong className="purple">Traditional Art </strong>
        	</h1>
			<Row style={{ paddingTop: "10px", paddingLeft:"15px", display:"flex"}}>
				<Col md={4} className="interests-card" width="200">

			<img src={antelopeCanyon} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>

			<img src={ballet} className="play-pics" alt="ballet" onclick="myFunction(this);" width="300" height="400"/>

			<img src={goldfish} className="play-pics" alt="goldfish" onclick="myFunction(this);" width="300" height="400"/>

			<img src={jellyfish} className="play-pics" alt="jellyfish" onclick="myFunction(this);" width="300" height="400"/>	
				</Col>
			</Row>

			<Row style={{ paddingTop: "10px", paddingLeft:"15px", display:"flex"}}>
				<Col md={4} className="interests-card" width="200">

			<img src={girl} className="play-pics" alt="girl" onclick="myFunction(this);" width="300" height="400"/>

			<img src={koiFish} className="play-pics" alt="koifish" onclick="myFunction(this);" width="300" height="400"/>

			<img src={asapRocky} className="play-pics" alt="asapRocky" onclick="myFunction(this);" width="300" height="400"/>

			<img src={cherries2} className="play-pics" alt="cherries" onclick="myFunction(this);" width="300" height="400"/>	

	
				</Col>
			</Row>
		</Container>
	);
}










