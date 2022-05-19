import * as React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function InterestCards(props) {
  return (
    <Card className="interests-card-view" >
      <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank"className="link-button">
          {"Learn more"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default InterestCards;
