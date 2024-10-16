import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from "reactstrap";
import 'chartjs-plugin-datalabels';

const TempAlerts = () => {

    const [labels, setLabels] = useState([])
    const [ydataTemp, setYdataTemp] = useState([])
    const [dataApi, setDataApi] = useState(null);
    const [recommendations, setRecommendations] = useState([])
    const [date, setDate] = useState("")

    useEffect(() => {
        if (dataApi) {
            let t = []
            let d = []
            for (let index = 0; index < dataApi.list.length; index++) {
                t.push(dataApi.list[index].dt_txt)
                d.push(dataApi.list[index].main.temp)
            }
            setLabels(t)
            setYdataTemp(d)
        }
    }, [dataApi])

    useEffect(() => {
        fetchData(-1.5275, 12.3686)
    }, [])

    const fetchData = async (long, lat) => {
        try {
            if (long && lat) {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_openWeatherMapAPIKey}&units=metric`);
                const data = await response.json()
                setDataApi(data)
            } else {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=12.3686&lon=-1.5275&appid=${process.env.REACT_APP_openWeatherMapAPIKey}&units=metric`);
                const data = await response.json()
                setDataApi(data)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Tempetarure Prevision',
                data: ydataTemp,
                borderColor: '#f58733',
                backgroundColor: () => {
                    let bgColors = []
                    if (ydataTemp) {
                        for (let index = 0; index < ydataTemp.length; index++) {
                            if (ydataTemp[index] >= 0 && ydataTemp[index] < 20) {
                                bgColors.push("rgba(0, 255, 0, 0.7)");
                            } else if (ydataTemp[index] >= 20 && ydataTemp[index] < 25) {
                                bgColors.push("rgba(255, 255, 0, 0.7)");
                            } else if (ydataTemp[index] >= 25 && ydataTemp[index] < 33) {
                                bgColors.push("rgba(255, 165, 0, 0.7)");
                            } else if (ydataTemp[index] >= 33) {
                                bgColors.push("rgba(255, 0, 0, 0.7)");
                            }
                        }
                        return bgColors;
                    }
                },
                random: ["Extremely Hot", "Very Hot", "Hot", "Warm", "Mild", "Cool", "Cold", "Very Cold", "Extremely Cold"],
                borderWidth: 1,
            }
        ]
    }

    const options = {
        onHover: (event, chartElement) => {
            event.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
            if (chartElement[0]) {
                for (let index = 0; index < chartElement[0].$datalabels[0].$context.dataset.data.length; index++) {
                    if (index === chartElement[0].$datalabels[0].$context.dataIndex) {
                        let value = chartElement[0].$datalabels[0].$context.dataset.data[index]
                        if (value > 35) {
                            setRecommendations(["Stay indoors with proper cooling or air conditioning.", "If you must go outside, take precautions against heatstroke and dehydration.", "Avoid sun exposure during peak heat hours."])
                        } else if (value > 30 && value <= 35) {
                            setRecommendations(["Avoid strenuous outdoor activities during peak heat to prevent heat-related illnesses.", "Stay in cool, shaded areas and wear light clothing."])
                        } else if (value > 25 && value <= 30) {
                            setRecommendations(["Wear lightweight and loose-fitting clothing to stay cool.", "Stay hydrated and seek shade during peak heat hours."])
                        } else if (value > 20 && value <= 25) {
                            setRecommendations(["Dress in light and breathable clothing to stay comfortable.", "Stay hydrated and protect yourself from the sun if it's shining."])
                        } else if (value > 10 && value <= 20) {
                            setRecommendations(["Wear comfortable clothing suitable for moderate temperatures.", "Enjoy outdoor activities without the need for heavy layers."])
                        } else if (value > 0 && value <= 10) {
                            setRecommendations(["Wear layers to stay comfortable in varying temperatures.", "Keep a light jacket or sweater handy for cooler moments.", "Enjoy outdoor activities without extreme concerns about temperature."])
                        } else if (value > -20 && value <= 0) {
                            setRecommendations(["Dress in warm clothing, including a heavy jacket or coat.", "Be mindful of indoor heating to maintain a comfortable temperature at home.", "Keep an eye on weather updates and forecasts for potential changes in conditions."])
                        } else if (value > -30 && value <= -20) {
                            setRecommendations(["Dress warmly with layered clothing and cover exposed skin.", "Avoid prolonged exposure to the cold.", "Check on vulnerable individuals, such as the elderly or those with medical conditions.", "Be cautious of icy surfaces and potential hazards due to freezing conditions."])
                        } else {
                            setRecommendations(["Stay indoors if possible to avoid exposure to extreme cold.", "If you must go outside, wear multiple layers of warm clothing, including a hat, gloves, and scarf.", "Limit the time spent outdoors, especially in windy conditions, as wind chill can make it feel even colder.", "Ensure that your home heating systems are functioning properly.", "Keep emergency supplies ready, including extra blankets and a backup heating source."])
                        }
                    }
                }
                for (let i = 0; i < labels.length; i++) {
                    if (i === chartElement[0].$datalabels[0].$context.dataIndex) {
                        setDate(labels[i]);
                    }
                }
            } else {
                setRecommendations([])
            }

        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                grace: "5%"
            }]
        },
        responsive: true,
        plugins: {
            legend: true,
            datalabels: {
                align: 'top',
                anchor: 'end',
                formatter: (value, context) => {
                    if (!context.active) {
                        return value
                    } else {
                        if (value > 35) {
                            return context.dataset.random[0]
                        } else if (value > 30 && value <= 35) {
                            return context.dataset.random[1]
                        } else if (value > 25 && value <= 30) {
                            return context.dataset.random[2]
                        } else if (value > 20 && value <= 25) {
                            return context.dataset.random[3]
                        } else if (value > 10 && value <= 20) {
                            return context.dataset.random[4]
                        } else if (value > 0 && value <= 10) {
                            return context.dataset.random[5]
                        } else if (value > -20 && value <= 0) {
                            return context.dataset.random[6]
                        } else if (value > -30 && value <= -20) {
                            return context.dataset.random[7]
                        } else {
                            return context.dataset.random[8]
                        }
                    }
                }
            },

        },
    }

    return (
        <>
            <div className="card shadow" style={{ padding: "2%", marginBottom: "3%" }}>
                <h1>Temperature Warning</h1>
                <div style={{ minHeight: "10rem" }}>
                    {recommendations.length > 0 && date && <h2>Recommendations for {date}</h2>}
                    {recommendations.length > 0 && recommendations.map((r, i) => (
                        <p key={i}>
                            {r} <br />
                        </p>
                    ))}
                </div>
                <Row className="mt-3">
                    <Col className="xl-12">
                        <Card className="shadow" style={{ paddingBottom: "10%", marginBottom: "2%" }}>
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col d-flex">
                                        <h2 className="mb-0">Temperature</h2>
                                        <svg
                                            viewBox="0 0 30 30"
                                            fill="currentColor"
                                            height="2em"
                                            width="2em"
                                        >
                                            <path d="M9.91 19.56a5.101 5.101 0 012.24-4.22V5.42c0-.8.27-1.48.82-2.03s1.23-.84 2.03-.84c.81 0 1.49.28 2.04.83.55.56.83 1.23.83 2.03v9.92c.71.49 1.25 1.11 1.64 1.84s.58 1.53.58 2.38c0 .92-.23 1.78-.68 2.56s-1.07 1.4-1.85 1.85-1.63.68-2.56.68c-.92 0-1.77-.23-2.55-.68s-1.4-1.07-1.86-1.85-.68-1.63-.68-2.55zm1.76 0c0 .93.33 1.73.98 2.39.65.66 1.44.99 2.36.99.93 0 1.73-.33 2.4-1s1.01-1.46 1.01-2.37c0-.62-.16-1.2-.48-1.73-.32-.53-.76-.94-1.32-1.23l-.28-.14c-.1-.04-.15-.14-.15-.29V5.42c0-.32-.11-.59-.34-.81-.23-.21-.51-.32-.85-.32-.32 0-.6.11-.83.32-.23.21-.34.48-.34.81v10.74c0 .15-.05.25-.14.29l-.27.14c-.55.29-.98.7-1.29 1.23-.31.53-.46 1.1-.46 1.74zm.78 0c0 .71.24 1.32.73 1.82s1.07.75 1.76.75 1.28-.25 1.79-.75.76-1.11.76-1.81c0-.63-.22-1.19-.65-1.67-.43-.48-.96-.77-1.58-.85V9.69c0-.06-.03-.13-.1-.19a.299.299 0 00-.22-.1c-.09 0-.16.03-.21.08-.05.06-.08.12-.08.21v7.34c-.61.09-1.13.37-1.56.85-.43.49-.64 1.04-.64 1.68z" />
                                        </svg>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody style={{ paddingBottom: "10%" }}>

                                <div className="chart">
                                    <Bar
                                        data={data}
                                        options={options}>
                                    </Bar>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default TempAlerts;
