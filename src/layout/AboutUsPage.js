import React from 'react';
import { Container } from 'reactstrap';
import { DrygonConsulting, Footer } from '../components';

const AboutUsPage = () => (
    <div id="page">
        <Container className="text-left">       
            <DrygonConsulting />
        </Container>
        <Footer />
    </div>
);

export default AboutUsPage;