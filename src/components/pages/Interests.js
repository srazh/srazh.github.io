import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function Interests() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src='./assets/etsy.jpg'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Etsy Shop</MDBCardTitle>
          <MDBCardText>
             During quarantine in March 2020, I started my small business
             @customizedbysara. I utilize my art skills to customize sneakers, hydro flasks etc.
          </MDBCardText>
          <MDBBtn href='https://www.etsy.com/shop/customizedbysara?ref=profile_header'>Shop now!</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>


      <MDBCard>
        <MDBCardImage
          src='./assets/foodie.jpg'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Foodie</MDBCardTitle>
          <MDBCardText>
             Living in major cities means good eats all the time! I started a food blog on instagram to document my meals.
          </MDBCardText>
          <MDBBtn href='https://www.instagram.com/vanilllabeanz'>Follow my blog!</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src='./assets/music.jpg'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Music</MDBCardTitle>
          <MDBCardText>
            I am passionate about pop culture, specifically music and artists thus
            not a surprise my favorite social media platform is Spotify! I love all genres
            of music, from cloud rap to edm. Here is what I am currently listening to:
          </MDBCardText>
          <MDBBtn href='https://open.spotify.com/user/sz95120?si=a1e23ecfcc8b405f'>Check out my playlists!</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src='./assets/concerts.jpg'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Concerts</MDBCardTitle>
          <MDBCardText>
            After buying my first concert tickets for Tame Impala and Clairo in 2019, it wasn't until 2021 that I could actually physically 
            attend one. I fell in love with the concert scene after attending Govball in NYC Summer 2021. The energy, comradery and people
            I met became what I look forward to everytime. Since then, I have attended many concerts in Boston, from 20 person venues to the 
            TD Garden. My next concerts are Maude Latour and John Mayer!
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>

  );
}