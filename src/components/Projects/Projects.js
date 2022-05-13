import React from "react"
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//import {PROJECTS} from  constants

function Projects() {
    return <Container fluid className="project-section">
        <Container>
            <h1 className="project-heading">
               <strong className="purple">Recent Works</strong>
            </h1>
            <p style={{color: "white"}}>
                Below are my recent projects!
            </p>
            <Row style={{judtifyContent: "center", paddingButtom: "10px"}}>
                {Projects.map((project, index) => (
                    <Col md={4} className="project-card" key={index}>
                        <ProjectCard 
                        imgPath={project.image}
                        progamsUsed={project.programsUsed}
                        title={project.name}
                        description={project.descripton}
                        link={project.url}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    </Container>
}
export default Projects;