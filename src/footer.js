import React, { Component } from 'react';
import './components.css';
import {Container,Row} from 'react-bootstrap';
class Footer extends Component{
    render(){
        return(
            <Container fluid className="mt-4">
                <Row className="d-flex justify-content-md-between justify-content-sm-center">
                    <div className="mt-3 text-secondary col-md-4 col-sm-12">
                       <h4>Owner:Rohit Naikade.</h4>
                       <h5>Email Id:naikaderohit833@gmail.com.</h5>
                       <h5>Github:github.com/RohitNaikade264</h5>
                    </div>
                </Row>
            </Container>
        )
    }
}
export default Footer;