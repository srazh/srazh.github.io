import SocialMedia from "./pages/home/SocialMedia";

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return(
        <Container fluid className="footer">
            <Row>
                <Col md="4"  className="footer-copywright">
                    <h3>by Sarah Zhang</h3>
                </Col>

                <Col md="4" className="footer-copywright">
                    <h3>
                        Copywright  © {year} 
                    </h3>
                </Col>
                <Col md="4" className="footer-body">
                    <SocialMedia/>
                </Col>
            </Row>
        </Container>
    );
}