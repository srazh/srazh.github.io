import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
    return (

        <Card className="project-card-view">
            <Card.Img variant="top" src={Response.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
                <Card.Text className="purple">Programs: {props.programsUsed}</Card.Text>
                <Card.Text style={{textAlign: "justify"}}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link} target="_blank" className="view-button">
                    <BiLinkExternal />;
                </Button>
            </Card.Body>
        </Card>
    )
}
export default ProjectCards;