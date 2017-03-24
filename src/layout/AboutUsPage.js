import React from 'react';
import { Container } from 'reactstrap';
import { DrygonConsulting, Footer } from '../components';

const AboutUsPage = () => (
    <div id="main-wrapper">
        <Container id="main">
            <Container className="text-left">
                <DrygonConsulting />
            </Container>
        </Container>
        <Footer />
    </div>
);

export default AboutUsPage;