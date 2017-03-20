import React from 'react';
import { Container } from 'reactstrap';
import { About, Footer } from '../components';

const AboutPage = () => (
    <Container id="about-page">
        <div id="main-wrapper">
         <div id="main">
            <About />
            </div>
        </div>
            <Footer />
    </Container>
);

export default AboutPage;