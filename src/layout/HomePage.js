import React from 'react';
import { CardDeck, Container, Row } from 'reactstrap';
import { DrawingSnap, Footer, Header, PhotoSnap, QuotationSnap } from '../components';

const HomePage = () => (
  <div>
    <Header />
    <Container>
      <Row id="home-row-top">        
          <DrawingSnap />        
      </Row>
      <Row id="home-row-bottom">
        <CardDeck>
          <PhotoSnap />
          <QuotationSnap />
        </CardDeck>
      </Row>
    </Container>
    <Footer />
</div>
);

export default HomePage;