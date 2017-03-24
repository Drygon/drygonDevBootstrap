import React from 'react';
import { Container } from 'reactstrap';
import { ContactUs, Footer } from '../components';

const ContactUsPage = () => (
    <Container id="main-wrapper">
    <div id="main">
        <ContactUs />
        </div>
        <Footer />
    </Container>
);

export default ContactUsPage;