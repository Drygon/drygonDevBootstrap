import React from 'react';
import { CardDeck, Container, Row } from 'reactstrap';
import { Banner, DrawingSnap, Footer, PhotoSnap, QuotationSnap } from '../components';

const HomePage = () => (
  <div>
    <Banner />
    <div id="main-wrapper">
    <Container id="main">
      <Row>        
          <DrawingSnap />        
      </Row>
      <Row>
        <CardDeck>
          <PhotoSnap />
          <QuotationSnap />
        </CardDeck>
      </Row>
    </Container>
    </div>
    <Footer />
</div>
);

export default HomePage;