import React from 'react';
import { Container } from 'reactstrap';
import { DrygonConsulting, Footer } from '../components';

const AboutUsPage = () => (
    <div className="page">
        <Container>
        <div className="page-title">
            <h1>About Us</h1>        
        </div>
            <DrygonConsulting />
        </Container>
        <Footer />
    </div>
);

export default AboutUsPage;