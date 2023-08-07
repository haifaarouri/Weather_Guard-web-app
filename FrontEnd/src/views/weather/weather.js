import CustomModal from 'layouts/CustomModal';
import GeoLocationModal from 'layouts/GeolocationModal';
import React, { useEffect, useState } from 'react';
import { Line, Bar } from "react-chartjs-2";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    TabContent,
    TabPane,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import WeatherCardForecast from './WeatherCardForecast';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { getUserByEmail } from 'services/userService';
import { postLocation } from 'services/locationService';
import { RxStar, RxStarFilled } from "react-icons/rx"
import MoreInformation from 'layouts/MoreInformation';

const Weather = () => {

    const [modal, setModal] = useState(false);
    const [modalMoreInfo, setModalMoreInfo] = useState(false);
    const [dataApi, setDataApi] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [tab, setTab] = useState([]);
    const [labels, setLabels] = useState([])
    const [ydataTemp, setYdataTemp] = useState([])
    const [ydataHumid, setYdataHumid] = useState([])
    const [ydataPrecip, setYdataPrecip] = useState([])
    const [ydataWind, setYdataWind] = useState([])
    const [ydataPress, setYdataPress] = useState([])
    const [day, setDay] = useState(null)
    const { lat, lon } = useQueryParams();

    const toggle = () => setModal(!modal);
    const toggleMoreInfo = () => setModalMoreInfo(!modalMoreInfo);

    const toggleLocationModal = () => setShowModal(!showModal);

    const handleDataReceived = (data) => {
        console.log('Data received:', data);

        setLatitude(data.latitude);
        setLongitude(data.longitude);
        fetchData(data.longitude, data.latitude)
    };

    const fetchData = async (long, lat) => {
        try {
            if (long && lat) {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=ff0a7f12e23465a0a0ff9fc0f2e642d7&units=metric`);
                const data = await response.json()
                setDataApi(data)
            } else {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=12.3686&lon=-1.5275&appid=ff0a7f12e23465a0a0ff9fc0f2e642d7&units=metric`);
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
                // borderColor: '#f58733',
                // pointBoderColor: '#f58733',
                fill: true,
                backgroundColor: (context) => {
                    const bgColor = [
                        "rgba(255, 0, 0, 0.7)",
                        "rgba(255, 165, 0, 0.7)",
                        "rgba(255, 255, 0, 0.7)",
                        "rgba(0, 255, 0, 0.7)"
                    ];
                    if (!context.chart.chartArea)
                        return;
                    // const value = context.dataset.data[context.dataIndex]
                    const { ctx, chartArea: { top, bottom } } = context.chart;
                    const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
                    const colorTranches = 1 / (bgColor.length - 1)
                    for (let index = 0; index < bgColor.length; index++) {
                        gradientBg.addColorStop(0 + index * colorTranches, bgColor[index])
                    }
                    return gradientBg;
                    // for (let index = 0; index < context.dataset.data.length; index++) {
                    //     let value = context.dataset.data[index]
                    //     switch (true) {
                    //         case value >= 0 && value < 20:
                    //             gradientBg.addColorStop(1, bgColor[3])
                    //             break;
                    //         case value >= 20 && value < 25:
                    //             gradientBg.addColorStop(0.75, bgColor[2])
                    //             break;
                    //         case value >= 25 && value < 33:
                    //             gradientBg.addColorStop(0.5, bgColor[1])
                    //             break;
                    //         case value >= 33:
                    //             gradientBg.addColorStop(0.25, bgColor[0])
                    //             break;
                    //     }
                    //     return gradientBg;
                    // }
                },
                tension: 0.5
            }
        ]
    }

    const options = {
        scales: {
            xAxes: [{
                display: false
            }]
        },
        responsive: true,
        plugins: {
            legend: true,
        }
    }

    const data1 = {
        labels: labels,
        datasets: [
            {
                label: 'Humidity Prevision',
                data: ydataHumid,
                borderColor: 'grey',
                pointBoderColor: 'grey',
                fill: false,
                tension: 0.5
            }
        ]
    }

    const options1 = {
        responsive: true,
        plugins: {
            legend: true
        }
    }

    const data2 = {
        labels: labels,
        datasets: [
            {
                label: 'Wind Prevision',
                data: ydataWind,
                borderColor: '#00264d',
                pointBoderColor: '#00264d',
                fill: false,
                tension: 0.5
            }
        ]
    }

    const options2 = {
        responsive: true,
        plugins: {
            legend: true
        }
    }

    const data3 = {
        labels: labels,
        datasets: [
            {
                label: 'Pressure Prevision',
                data: ydataPress,
                borderColor: '#11cdef',
                pointBoderColor: '#11cdef',
                fill: true,
                tension: 0.5
            }
        ]
    }

    const options3 = {
        responsive: true,
        plugins: {
            legend: true
        }
    }

    const barData = {
        labels: labels,
        datasets: [
            {
                label: 'Precipitaion Prevision Probability',
                data: ydataPrecip,
                backgroundColor: '#11cdef',
                borderColor: '#11cdef',
                borderWidth: 1,
            }
        ]
    }

    const barOptions = {
        responsive: true,
        plugins: {
            legend: true
        }
    }

    const [city, setCity] = useState('');

    const handleCityChange = async (event) => {
        setCity(event.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault()

        const apiKey = 'd3af3bb7736a4ca29ac5103913d85707';

        const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKey}`)
        const data = await res.json()

        const { lat, lng } = data.results[0].geometry;

        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=ff0a7f12e23465a0a0ff9fc0f2e642d7&units=metric`);
        const data1 = await response.json()
        setDataApi(data1)
    }

    const handleDayReceived = (d) => {
        console.log('Day :', d);
        setDay(d)
    }

    function useQueryParams() {
        const search = useLocation().search;
        const urlSearchParams = new URLSearchParams(search);
        const params = Object.fromEntries(urlSearchParams.entries());
        return params
    }

    useEffect(() => {
        if (lat && lon) {
            fetchData(lon, lat)
        } else {
            fetchData(longitude, latitude);

            navigator.permissions.query({ name: "geolocation" }).then((result) => {
                if (result.state === "granted") {
                    setShowModal(false)
                } else {
                    setShowModal(true)
                }
            });
        }
    }, [])

    useEffect(() => {
        if (dataApi) {
            const d0 = new Date(dataApi.list[0].dt_txt)
            let prevD = d0
            let i = 0
            for (let index = 0; index < dataApi.list.length; index++) {
                let d = new Date(dataApi.list[index].dt_txt)
                if (index !== 0) {
                    prevD = new Date(dataApi.list[i].dt_txt)
                }
                else {
                    setTab([{ day: [dataApi.list[0]] }])
                }
                if (d.getDate() === prevD.getDate()) {
                    if (tab.length > 0)
                        tab[tab.length - 1].day.push(dataApi.list[index])
                } else {
                    i = index
                    setTab((prevValue) => [
                        ...prevValue,
                        { 'day': [dataApi.list[index]] }
                    ])
                }
            }
        }
        console.log(dataApi);
    }, [dataApi])

    useEffect(() => {
        if (dataApi) {
            let t = []
            let d = []
            let h = []
            let p = []
            let w = []
            let pr = []
            for (let index = 0; index < dataApi.list.length; index++) {
                // t.push(new Date(dataApi.list[index].dt_txt))
                t.push(dataApi.list[index].dt_txt)
                d.push(dataApi.list[index].main.temp)
                h.push(dataApi.list[index].main.humidity)
                p.push(dataApi.list[index].pop)
                w.push(dataApi.list[index].wind.speed)
                pr.push(dataApi.list[index].main.pressure)
            }
            setLabels(t)
            setYdataTemp(d)
            setYdataHumid(h)
            setYdataPrecip(p)
            setYdataWind(w)
            setYdataPress(pr)
        }
    }, [dataApi])

    const [activeTab, setActiveTab] = useState('1')
    const toggleTab = (e, tab) => {
        e.preventDefault()
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    const navigate = useNavigate()
    const saveDestination = async () => {
        if (localStorage.getItem("role")) {
            let e = localStorage.getItem("email")
            let user = await getUserByEmail(e)
            navigate("/admin/destinations")
            if (dataApi && user) {
                await postLocation(dataApi.city, user._id)
            }
        }
    }

    return (
        <>
            <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)" }}>
                <Container style={{ paddingLeft: "20%", marginTop: "-2%" }}>
                    <div className="header-body">
                        <GeoLocationModal onDataReceived={handleDataReceived} modal={showModal} toggle={toggleLocationModal} />
                        <Row>
                            <Col lg="12" xl="12">
                                {dataApi && <Card className="card-stats mb-4 mb-xl-0" style={{ width: "70%" }}>
                                    <CardHeader>
                                        <Row>
                                            <Col>
                                                <div>
                                                    {dataApi.city.name}
                                                    <UncontrolledDropdown nav>
                                                        <DropdownToggle nav className="nav-link-icon">
                                                            {/* <RxStarFilled size={20} style={{ marginLeft: "5%" }}/> */}
                                                            <RxStar size={20} style={{ marginLeft: "5%" }} />
                                                        </DropdownToggle>
                                                        <DropdownMenu
                                                            aria-labelledby="navbar-default_dropdown_1"
                                                            className="dropdown-menu-arrow"
                                                            right
                                                        >
                                                            <DropdownItem onClick={saveDestination}><RxStarFilled size={20} color='#f58733' />Save to "My destinations"</DropdownItem>
                                                            <DropdownItem divider />
                                                            <DropdownItem>{dataApi.city.name}, {dataApi.city.country}</DropdownItem>
                                                            <DropdownItem>Latitude {dataApi.city.coord.lat}, Longitude {dataApi.city.coord.lon}</DropdownItem>
                                                            <DropdownItem divider />
                                                            {!localStorage.getItem("role") && <DropdownItem>
                                                                <Button style={{ backgroundColor: "#00264d" }}>
                                                                    <a href="/auth/login" style={{ color: "white" }}>
                                                                        <i className="ni ni-circle-08" />
                                                                        <span className="nav-link-inner--text">Register</span>
                                                                    </a>
                                                                </Button>
                                                                <Button style={{ backgroundColor: "#00264d" }}>
                                                                    <a href="/auth/login" style={{ color: "white" }}>
                                                                        <i className="ni ni-key-25" />
                                                                        <span className="nav-link-inner--text">Login</span>
                                                                    </a>
                                                                </Button>
                                                            </DropdownItem>}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>{dataApi.list[0].dt_txt}</div>
                                            </Col>
                                        </Row>
                                        <Row className='mt-4'>
                                            <Col>
                                                <h1 style={{ fontSize: 30 }}>{dataApi.list[0].main.temp.toFixed(0)} °C</h1>
                                                <p>Feels like : {dataApi.list[0].main.feels_like.toFixed(0)} °C</p>
                                            </Col>
                                            <Col>
                                                <form onSubmit={handleSearch} className="navbar-search form-inline">
                                                    <Row>
                                                        <Col sm="8">
                                                            <div
                                                                style={{ borderColor: "#f58733" }}
                                                                className="input-group input-group-alternative"
                                                            >
                                                                <input
                                                                    style={{ color: "#f58733" }}
                                                                    className="form-control"
                                                                    placeholder="Search by city name"
                                                                    type="text"
                                                                    name="city"
                                                                    value={city}
                                                                    onChange={handleCityChange}
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <Button type='submit' style={{ borderRadius: "100%", width: "5%", boxShadow: "none", backgroundColor: "transparent" }}>
                                                                <i
                                                                    style={{ color: "#f58733" }}
                                                                    className="fas fa-search"
                                                                />
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </Col>
                                        </Row>
                                    </CardHeader>
                                    <CardBody>
                                        <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "50%", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", padding: "1em", display: "flex", flexDirection: "column" }}>
                                            <div
                                                style={{ flex: "1", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", marginTop: "1em", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                                <div style={{ marginBottom: "5%", width: "50%", display: "flex", flexDirection: "row" }}>
                                                    <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                        <img style={{ width: "2em" }} src={require("../../assets/img/icons/cold.png")} alt="" />
                                                        <span style={{ fontSize: "0.8em" }}>Min</span>
                                                    </div>
                                                    <div style={{ width: "50%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        {dataApi.list[0].main.temp_min.toFixed(0)} °C
                                                    </div>
                                                </div>
                                                <div style={{ marginBottom: "5%", width: "50%", display: "flex", flexDirection: "row" }}>
                                                    <div
                                                        style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                        <img style={{ width: "2em" }} src={require("../../assets/img/icons/hot.png")} alt="" />
                                                        <span style={{ fontSize: "0.8em" }}>Max</span>
                                                    </div>
                                                    <div
                                                        style={{ width: "50%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        {dataApi.list[0].main.temp_max.toFixed(0)} °C
                                                    </div>
                                                </div>
                                                <div style={{ marginBottom: "5%", width: "50%", display: "flex", flexDirection: "row" }}>
                                                    <div
                                                        style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                        <img style={{ width: "2em" }} src={require("../../assets/img/icons/humidity.png")} alt="" />
                                                        <span style={{ fontSize: "0.8em" }}>Humidity</span>
                                                    </div>
                                                    <div
                                                        style={{ width: "50%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        {dataApi.list[0].main.humidity} %
                                                    </div>
                                                </div>
                                                <div style={{ marginBottom: "5%", width: "50%", display: "flex", flexDirection: "row" }}>
                                                    <div
                                                        style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                        <img style={{ width: "2em" }} src={require("../../assets/img/icons/wind.png")} alt="" />
                                                        <span style={{ fontSize: "0.8em" }}>Wind</span>
                                                    </div>
                                                    <div
                                                        style={{ width: "50%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        {dataApi.list[0].wind.speed} km/h
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Button onClick={toggleMoreInfo} style={{ marginLeft: '33%', backgroundColor: '#f58733', color: 'white' }} className="btn">More information</Button>
                                    </CardBody>
                                </Card>}
                            </Col>
                        </Row>
                        <CustomModal allDays={tab} day={day} weatherData={dataApi} modal={modal} toggle={toggle} />
                        {dataApi && <MoreInformation day={dataApi.list[0].dt_txt} weatherData={dataApi} modal={modalMoreInfo} toggle={toggleMoreInfo} />}
                    </div>
                </Container >
            </div >
            <div className="container-fluid" style={{ marginTop: "-10%", marginBottom: "5%" }}>
                <div className="row mt-5">
                    <div className="col-xl-12">
                        <div className="card shadow" style={{ padding: "2%" }}>
                            <div className="card-header border-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Weather forecast</h3>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    background: "white",
                                    bottom: 0,
                                    display: "flex",
                                    color: "white",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflowY: "hidden",
                                    cursor: "pointer"
                                }}
                            >
                                {/* {dataApi && <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "1px solid #eee",
                                        borderRadius: 10,
                                        padding: 15,
                                        paddingRight: 40,
                                        background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)",
                                    }}
                                    id="current-temp"
                                    onClick={toggle}
                                >
                                    <img
                                        src="http://openweathermap.org/img/wn/10d@2x.png"
                                        alt="weather icon"
                                        className="w-icon"
                                    />
                                    <div className="other">
                                        <div
                                            style={{
                                                padding: "5px 15px",
                                                background: "#00264d",
                                                borderRadius: 50,
                                                textAlign: "center"
                                            }}
                                        >
                                            {dataApi.list[0].dt_txt}
                                        </div>
                                        <div style={{ fontSize: 18, paddingTop: 15 }}>
                                            Min {dataApi.list[0].main.temp_min.toFixed(0)} °C
                                        </div>
                                        <div style={{ fontSize: 18, paddingTop: 15 }}>
                                            Max {dataApi.list[0].main.temp_max.toFixed(0)} °C
                                        </div>
                                    </div>
                                </div>} */}
                                <div style={{ display: "flex" }} id="weather-forecast">
                                    {tab.map((e, i) => <WeatherCardForecast currentDay={handleDayReceived} key={i} data={e.day[0]} toggle={() => {
                                        toggle()
                                    }} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Nav tabs className='mt-5 mb-2'>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={(e) => { toggleTab(e, '1'); }}
                            style={{ color: "#00264d", fontWeight: "bold", marginRight: "20px" }}
                        >
                            Temperature
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={(e) => { toggleTab(e, '2'); }}
                            style={{ color: "#00264d", fontWeight: "bold", marginRight: "20px" }}
                        >
                            Percipitation
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={(e) => { toggleTab(e, '3'); }}
                            style={{ color: "#00264d", fontWeight: "bold", marginRight: "20px" }}
                        >
                            Humidity
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={(e) => { toggleTab(e, '4'); }}
                            style={{ color: "#00264d", fontWeight: "bold", marginRight: "20px" }}
                        >
                            Wind
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={(e) => { toggleTab(e, '5'); }}
                            style={{ color: "#00264d", fontWeight: "bold", marginRight: "20px" }}
                        >
                            Pressure
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row className="mt-3">
                            <Col className="xl-12">
                                <Card className="shadow" style={{ paddingBottom: "10%", marginBottom: "5%" }}>
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
                                            <Line
                                                data={data}
                                                options={options}
                                            >
                                            </Line>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="mt-3">
                            <Col className="xl-12">
                                <Card className="shadow" style={{ paddingBottom: "10%", marginBottom: "5%" }}>
                                    <CardHeader className="bg-transparent">
                                        <Row className="align-items-center">
                                            <div className="col d-flex">
                                                <h2 className="mb-0">Percipitation millimetres</h2>
                                                <svg
                                                    viewBox="0 0 30 30"
                                                    fill="currentColor"
                                                    height="2em"
                                                    width="2em"
                                                >
                                                    <path d="M9.81 15.25c0 .92.23 1.78.7 2.57s1.1 1.43 1.9 1.9c.8.47 1.66.71 2.59.71.93 0 1.8-.24 2.61-.71a5.3 5.3 0 001.92-1.9c.47-.8.71-1.65.71-2.57 0-.6-.17-1.31-.52-2.14-.35-.83-.77-1.6-1.26-2.3-.44-.57-.96-1.2-1.56-1.88-.6-.68-1.65-1.73-1.89-1.97l-1.28 1.29c-.62.6-1.22 1.29-1.79 2.08-.57.79-1.07 1.64-1.49 2.55-.44.91-.64 1.7-.64 2.37z" />
                                                </svg>
                                            </div>
                                        </Row>
                                    </CardHeader>
                                    <CardBody style={{ paddingBottom: "10%" }}>
                                        <div className="chart">
                                            <Bar
                                                data={barData}
                                                options={barOptions}
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row className="mt-3">
                            <Col className="xl-12">
                                <Card className="shadow" style={{ paddingBottom: "10%", marginBottom: "5%" }}>
                                    <CardHeader className="bg-transparent">
                                        <Row className="align-items-center">
                                            <div className="col d-flex">
                                                <h2 className="mb-0">Humidity %</h2>
                                                <svg
                                                    viewBox="0 0 30 30"
                                                    fill="currentColor"
                                                    height="2em"
                                                    width="2em"
                                                >
                                                    <path d="M7.56 17.19c0-.88.24-1.89.72-3.03s1.1-2.25 1.86-3.31c1.56-2.06 2.92-3.62 4.06-4.67l.75-.72c.25.26.53.5.83.72.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03c0 1-.19 1.95-.58 2.86-.39.91-.91 1.7-1.57 2.36-.66.66-1.45 1.19-2.37 1.58-.92.39-1.89.59-2.91.59-1 0-1.95-.19-2.86-.57-.91-.38-1.7-.89-2.36-1.55-.66-.65-1.19-1.44-1.58-2.35s-.59-1.89-.59-2.93zm2.26-2.93c0 .83.17 1.49.52 1.99.35.49.88.74 1.59.74.72 0 1.25-.25 1.61-.74.35-.49.53-1.15.54-1.99-.01-.84-.19-1.5-.54-2-.35-.49-.89-.74-1.61-.74-.71 0-1.24.25-1.59.74-.35.5-.52 1.16-.52 2zm1.57 0v-.35c0-.08.01-.19.02-.33s.02-.25.05-.32.05-.16.09-.24c.04-.08.09-.15.15-.18.07-.04.14-.06.23-.06.14 0 .25.04.33.12s.14.21.17.38c.03.18.05.32.06.45s.01.3.01.52c0 .23 0 .4-.01.52s-.03.27-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12c-.09 0-.16-.02-.23-.06a.335.335 0 01-.15-.18c-.04-.08-.07-.17-.09-.24-.02-.08-.04-.19-.05-.32-.01-.14-.02-.25-.02-.32v-.34zm.59 7.75h1.32l4.99-10.74h-1.35l-4.96 10.74zm4.3-2.99c.01.84.2 1.5.55 2 .35.49.89.74 1.6.74.72 0 1.25-.25 1.6-.74.35-.49.52-1.16.53-2-.01-.84-.18-1.5-.53-1.99-.35-.49-.88-.74-1.6-.74-.71 0-1.25.25-1.6.74-.36.49-.54 1.15-.55 1.99zm1.57 0c0-.23 0-.4.01-.52s.03-.27.06-.45.09-.3.17-.38.19-.12.33-.12c.09 0 .17.02.24.06.07.04.12.1.16.19.04.09.07.17.1.24s.04.18.05.32l.01.32v.69l-.01.32-.05.32-.1.24-.16.19-.24.06c-.14 0-.25-.04-.33-.12s-.14-.21-.17-.38c-.03-.18-.05-.33-.06-.45s-.01-.3-.01-.53z" />
                                                </svg>
                                            </div>
                                        </Row>
                                    </CardHeader>
                                    <CardBody style={{ paddingBottom: "10%" }}>
                                        <div className="chart">
                                            <Line
                                                data={data1}
                                                options={options1}
                                            >
                                            </Line>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row className="mt-3">
                            <Col className="xl-12">
                                <Card className="shadow" style={{ paddingBottom: "10%", marginBottom: "5%" }}>
                                    <CardHeader className="bg-transparent">
                                        <Row className="align-items-center">
                                            <div className="col d-flex">
                                                <h2 className="mb-0">Wind m/s</h2>
                                                <svg
                                                    viewBox="0 0 30 30"
                                                    fill="currentColor"
                                                    height="2em"
                                                    width="2em"
                                                >
                                                    <path d="M3.1 16.97c0 .24.09.45.28.62.16.19.37.28.63.28H18.7c.29 0 .53.1.73.3.2.2.3.45.3.74s-.1.53-.3.72c-.2.19-.44.29-.74.29-.29 0-.54-.1-.73-.29a.76.76 0 00-.6-.26c-.25 0-.46.09-.64.26s-.27.38-.27.61c0 .25.09.46.28.63.56.55 1.22.83 1.96.83.78 0 1.45-.27 2.01-.81.56-.54.83-1.19.83-1.97s-.28-1.44-.84-2c-.56-.56-1.23-.84-2-.84H4.01a.9.9 0 00-.64.26c-.18.17-.27.38-.27.63zm0-3.28c0 .23.09.43.28.61.17.18.38.26.63.26h20.04c.78 0 1.45-.27 2.01-.82.56-.54.84-1.2.84-1.97s-.28-1.44-.84-1.99-1.23-.83-2.01-.83c-.77 0-1.42.27-1.95.8-.18.16-.27.38-.27.67 0 .26.09.47.26.63.17.16.38.24.63.24.24 0 .45-.08.63-.24.19-.21.42-.31.7-.31.29 0 .53.1.73.3.2.2.3.44.3.73s-.1.53-.3.72c-.2.19-.44.29-.73.29H4.01a.908.908 0 00-.91.91z" />
                                                </svg>
                                            </div>
                                        </Row>
                                    </CardHeader>
                                    <CardBody style={{ paddingBottom: "10%" }}>
                                        <div className="chart">
                                            <Line
                                                data={data2}
                                                options={options2}
                                            >
                                            </Line>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row className="mt-3">
                            <Col className="xl-12">
                                <Card className="shadow" style={{ paddingBottom: "10%" }}>
                                    <CardHeader className="bg-transparent">
                                        <Row className="align-items-center">
                                            <div className="col d-flex">
                                                <h2 className="mb-0">Pressure hPa</h2>
                                                <svg
                                                    viewBox="0 0 30 30"
                                                    fill="currentColor"
                                                    height="2em"
                                                    width="2em"
                                                >
                                                    <path d="M7.69 13.2c0-.99.19-1.94.58-2.85.39-.91.91-1.68 1.57-2.33s1.44-1.17 2.34-1.56c.9-.39 1.85-.58 2.84-.58.99 0 1.94.19 2.85.58.9.39 1.68.91 2.33 1.56.65.65 1.17 1.43 1.56 2.33s.58 1.85.58 2.85c0 1.62-.48 3.06-1.44 4.34a7.247 7.247 0 01-3.71 2.61v3.29h-4.24v-3.25c-1.54-.45-2.81-1.32-3.79-2.61s-1.47-2.75-1.47-4.38zm1.61 0c0 1.55.56 2.88 1.69 3.99 1.11 1.12 2.45 1.68 4.02 1.68 1.03 0 1.99-.25 2.86-.76a5.76 5.76 0 002.09-2.07c.51-.87.77-1.82.77-2.85 0-.77-.15-1.5-.45-2.21s-.71-1.31-1.22-1.82-1.12-.92-1.83-1.22a5.6 5.6 0 00-2.21-.45c-.77 0-1.5.15-2.21.45a5.651 5.651 0 00-3.04 3.04c-.32.72-.47 1.45-.47 2.22zm.58.36v-.72h2.17v.72H9.88zm1.09-3.54l.52-.52 1.52 1.52-.52.53-1.52-1.53zm2.53 4.93c0-.42.15-.78.44-1.09.29-.31.65-.47 1.06-.48l2.73-4.49.66.35-2.02 4.83c.18.25.26.54.26.88 0 .44-.15.81-.46 1.11-.31.3-.68.45-1.12.45-.43 0-.8-.15-1.1-.45-.3-.3-.45-.67-.45-1.11zm1.31-4.67V8.12h.69v2.17h-.69zm2.94 3.27v-.74h2.17v.74h-2.17z" />
                                                </svg>
                                            </div>
                                        </Row>
                                    </CardHeader>
                                    <CardBody style={{ paddingBottom: "10%" }}>
                                        <div className="chart">
                                            <Line
                                                data={data3}
                                                options={options3}
                                            >
                                            </Line>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </>
    );
};

export default Weather;
