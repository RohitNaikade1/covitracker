import React from 'react';
import {Cards,Charts,CountryPicker}  from './components'
import './App.css';
import Header from './components/header';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchCountryData, fetchData} from './apis'
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
            <Container fluid>
                <Header />              
            <Row className="d-flex justify-content-md-center">
             <Col className="col-md-12">
                 <Cards data = {data}/>
             </Col>
             </Row>
             <CountryPicker handleCountryChange= {this.handleCountryChange}/>
            <Row className="d-flex justify-content-md-center">
             <Col className="col-md-12">
              <Charts data = {data} country={country} />
             </Col>
             </Row>
                <Footer />
            </Container></>
            
            
        );
    }
}

export default App;