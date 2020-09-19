import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coronaimage from '../images/covid-19.png';
const Header = () => {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-md-center justify-content-sm-center">
                <Col className="col-md-12 offset-md-8 mt-5">
                    <img src={coronaimage} alt="LOGO"></img>
                </Col>
            </Row>
        </Container>
    )
}
export default Header;