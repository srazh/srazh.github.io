import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'



export default function Interests() {
  return (
    <div>
    <img src={"./assets/concerts.jpg"} className="interests-pics" alt="concerts" width="200" height="300"/>
    <img src={"./assets/etsy.jpg"} className="interests-pics" alt="etsy" width="200" height="300"/>
    <img src={"./assets/foodie.jpg"} className="interests-pics" alt="foodie" width="200" height="300"/>
    <img src={"./assets/music.jpg"} className="interests-pics" alt="music" width="200" height="300"/>
    <img src={"./assets/spotify.png"} className="interests-pics" alt="spotify" width="200" height="300"/>





    </div>

  );
}



/*
const Interests = () => {
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
}

export default Interests;






*/
