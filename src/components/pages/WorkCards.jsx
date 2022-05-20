import * as React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";



function WorkCards(props) {
    return (
      <Card className="work-card-view" >
        <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
        <Card.Body>
          <Card.Title style={{fontWeight: "bold", paddingLeft:"10px"}}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", paddingLeft: "10px", width: "200px"}}>
            {props.description}
          </Card.Text>
          <Card.Text className="purple">Tech Used: {props.techUsed}</Card.Text>

          
          <Button variant="primary" href={props.link} target="_blank"className="link-button"
           style={{paddingLeft:"10px"}}>
            <BiLinkExternal /> &nbsp;
            {"Check it out"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default WorkCards;
  