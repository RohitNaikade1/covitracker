import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../apis/index';
import { NativeSelect, FormControl } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();

    }, []);

    return (
        <Container fluid>
            <Row className="d-flex justify-content-md-center">
                <Col md={12} className="offset-md-6 mb-5">
                    <FormControl>
                        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                            <option value="global"> Global </option>
                            {fetchedCountries.map((country, i) => <option key={i} value={country}> {country}</option>)}
                        </NativeSelect>
                    </FormControl>
                </Col>
            </Row>
        </Container>
    )
}

export default CountryPicker