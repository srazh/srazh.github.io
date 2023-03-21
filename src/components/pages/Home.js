import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../pages/home/SocialMedia";
import myImg from "../../assets/sarah.jpeg";


  
export default function Home() {
  return(
      <section id= "Home">
        <Container fluid className="home-section" id="home">
        <Container className="home-content">
        <Row>
        <Col md={6} className="home-header">
        <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
            <h1 className="heading-name">
                I'm
                <strong className="main-name"> Sarah Zhang</strong>
              </h1>
              <p className="heading-description blockquote">
                I am a 3rd year Computer Science and Design student at Northeastern University. 
                I am currently seeking co-op/internship opportunities in FullStack roles.
              </p>
              <div className="heading-type">
              </div>
             </Col>
             <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" width="500" height="500"/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in touch with me!</h1>
              <p>
                {" "}
                Whether you just want to say hi, or collaborate on a potential project...
                <br />
                <strong>Feel free to reach out!!!</strong>
              </p>
              <SocialMedia />
          </Col>
          </Row>
          </Container>
        </Container>
      </section>
  );




}