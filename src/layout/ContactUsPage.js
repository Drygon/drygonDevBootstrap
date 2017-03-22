import React from 'react';
import { Container, Row } from 'reactstrap';
import { ContactUs, Footer } from '../components';

const ContactUsPage = () => (
    <Container>
        <Row>
            <h1>Contact Us</h1>
            <ContactUs />
        </Row>
        <Footer />
    </Container>
);

export default ContactUsPage;