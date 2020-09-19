import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../apis/index';
import {Line, Bar} from 'react-chartjs-2';
import {Container,Row,Col} from 'react-bootstrap';
const Charts=({data:{confirmed,recovered,deaths},country})=>{
    const [dailyData,setDailyData]=useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();

    }, [setDailyData]);
    
    if(confirmed){
        console.log(confirmed.value, recovered.value, deaths.value);
    }
    const lineChart = (
        
        dailyData[0] ?
        (<Line 
         data = {{
            labels: dailyData.map(({date})=>date),
        datasets : [
            {
                data : dailyData.map(({confirmed})=>confirmed),
                label : 'Infected',
                borderColor: '#3333ff',
                fill:true,
                
            },
            {
                data : dailyData.map(({deaths})=>deaths),
                label : 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill:true,
            }],
         }}   
        />) : null
    );
    const barChart = (
        confirmed
        ? (
            <Bar
            data = {
                {
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    data : [confirmed.value, recovered.value, deaths.value]
                    }]
                }
                
            }
            options = {
                {
                    legend:{display:false},
                    title: {display:true, text: `Current Statistics of ${country}`}
                }
            }
            >

            </Bar>
        ): null
    );
    return (
        <Container fluid>
        <Row className="d-flex justify-content-md-center">
            <Col md={10} xs={12}>
        {country?
            (country === "global" ? lineChart : barChart)
        : lineChart
        } 
        </Col></Row></Container>
    )
}

export default Charts;