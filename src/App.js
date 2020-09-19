import React from 'react';
import {Cards,Charts,CountryPicker}  from './components'
import './App.css'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchCountryData, fetchData} from './apis'
import coronaimage from './images/covid-19.png';
import Footer from './footer'

class App extends React.Component {
    state = {
        data:{},
        country:''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchCountryData(country);
        this.setState({data:fetchedData, country: country});
    }
    render(){
        const { data , country} = this.state;
        return (
            <>
            <Container>
                <Row>
                    <Col className="col-md-6 col-sm-8 col-xs-8">
                        <img src={coronaimage} alt="LOGO"></img> 
                    </Col>
                </Row>                  
            </Container>
            <Container>
            <Row>
             <Col className="col-md-12">
                 <Cards data = {data}/>
             </Col>
             </Row>
            </Container>
            <Container>
            <Row>
             <Col className="col-md-12">
             <CountryPicker handleCountryChange= {this.handleCountryChange}/>
             </Col>
             </Row>
            </Container>
            <Container>
            <Row className="col-md-12">
             <Col>
              <Charts data = {data} country={country} />
             </Col>
             </Row>
            </Container>
            <Container fluid>
            <Row className="col-md-12">
             <Col>
                <Footer />
             </Col>
             </Row>
            </Container></>
            
            
        );
    }
}

export default App;