import React from 'react';
import {Container,Card,Row,Col} from 'react-bootstrap';
import {Typography} from '@material-ui/core'
import CountUp from 'react-countup';
import './cards.css'

function handleBigValues(val) {
    if (val < 1000) {
        return [val, ""];
    }
    if (val >= 1000 && val < 1000000) {
        return [val / 1000, "K"];
    }
    if (val > 1000000) {
        return [val / 1000000, "M"];
    }
}





const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...';
    }
    const confirmed_scaled = handleBigValues(confirmed.value);
    const recovered_scaled = handleBigValues(recovered.value);
    const death_scaled = handleBigValues(deaths.value);
    console.log(confirmed_scaled[1]);
    return (
        <Container>
            <Row className="d-flex justify-content-md-center">
                <Col xs={12} md={3}>
                    <Card className='cards mt-xs-3'>
                        <Card.Body>
                            <Card.Title className="ml-0 text-secondary">
                            <h5>Infected</h5>
                            </Card.Title>
                        <Card.Text>
                        <h4 className="text-primary">
                            <CountUp start={0} end={confirmed_scaled[0]} decimals={2} duration={1.5} delay={0.5} suffix={confirmed_scaled[1]} seperator="," />
                        </h4>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of <b className="text-primary">Active cases</b> of Covid-19.
                        </Typography>
                        </Card.Text>
                        </Card.Body>
                        <hr className="infected mb-0 mt-0"></hr>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card className="cards mt-xs-3">
                    <Card.Body>
                            <Card.Title className="ml-0 text-secondary">
                            <h5>Recovered</h5>
                            </Card.Title>
                        <Card.Text>
                        <h4 className="text-success">
                            <CountUp start={0} end={recovered_scaled[0]} decimals={2} duration={1.5} delay={0.5} suffix={recovered_scaled[1]} seperator="," />
                        </h4>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of <b className="text-success">Recovery cases</b> of Covid-19.
                        </Typography>
                        </Card.Text>
                        </Card.Body>
                        <hr className="recovered mb-0 mt-0"></hr>
                    </Card>

                </Col>
                <Col xs={12} md={3}>
                    <Card className="cards mt-xs-3">
                    <Card.Body>
                            <Card.Title className="ml-0 text-secondary">
                            <h5>Deaths</h5>
                            </Card.Title>
                        <Card.Text>
                        <h4 className="text-danger">
                            <CountUp start={0} end={death_scaled[0]} decimals={2} duration={1.5} delay={0.5} suffix={death_scaled[1]} seperator="," />
                        </h4>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of <b className="text-danger">Deaths cases</b> of Covid-19.
                        </Typography>
                        </Card.Text>
                        </Card.Body>
                        <hr className="deaths mb-0 mt-0"></hr>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cards