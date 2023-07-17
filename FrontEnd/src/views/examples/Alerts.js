import AlertModal from 'layouts/AlertModal';
import React, { useState } from 'react';
import {
    Container,
    Row,
    ListGroup,
    ListGroupItem,
    Badge,
    Table,
    Media,
} from "reactstrap";

const Alerts = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)" }}>
                <Container style={{ paddingLeft: "20%", marginTop: "-2%" }}>
                    <div className="header-body">
                        <Row>
                            <div lg="6" xl="6">
                                <Badge className="badge-default" pill style={{ fontSize: "27px", color: "white", marginBottom: "5%" }}>
                                    Danger warnings in Burkina Faso
                                </Badge>
                            </div>
                        </Row>
                    </div>
                </Container >
            </div >
            <div className="container-fluid" style={{ marginTop: "-13%", marginBottom: "5%" }}>
                <div className="row mt-5">
                    <div className="col-xl-12">
                        <div className="card shadow" style={{ padding: "2%" }}>
                            <div className="d-flex justify-content-around">
                                <div>
                                    <Table
                                        className="align-items-center"
                                        responsive
                                        style={{ backgroundColor: "#00264d" }}
                                    >
                                        <thead className="thead-dark">
                                            <tr>
                                                <th style={{ color: "white", width: "50%", textAlign: "center" }} scope="col">Danger Type</th>
                                                <th style={{ color: "white", textAlign: "center" }} scope="col">Zone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="d-flex justify-content-around align-items-center">
                                                        <img src={require('../../assets/img/icons/drought.png')} style={{ width: "15%" }} alt=''/>
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Drought
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td className="text-center">
                                                    <Badge onClick={toggle} color="light" style={{ cursor: "pointer", color: "#00264d", fontSize: "15px" }}>
                                                        Ouagadougou
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="d-flex justify-content-around align-items-center">
                                                        <img src={require('../../assets/img/icons/flood.png')} style={{ width: "15%" }} alt=''/>
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Flooding
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td className="text-center">
                                                    <Badge onClick={toggle} color="light" style={{ cursor: "pointer", color: "#00264d", fontSize: "15px" }}>
                                                        Ouagadougou
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="d-flex justify-content-around align-items-center">
                                                        <img src={require('../../assets/img/icons/desertification.png')} style={{ width: "15%" }} alt='' />
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Desertification
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td className="text-center">
                                                    <Badge onClick={toggle} color="light" style={{ cursor: "pointer", color: "#00264d", fontSize: "15px" }}>
                                                        Ouagadougou
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="d-flex justify-content-around align-items-center">
                                                        <img src={require('../../assets/img/icons/sandstorm.png')} style={{ width: "15%" }} alt='' />
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Sandstorms
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td className="text-center">
                                                    <Badge onClick={toggle} color="light" style={{ cursor: "pointer", color: "#00264d", fontSize: "15px" }}>
                                                        Ouagadougou
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="d-flex justify-content-around align-items-center">
                                                        <img src={require('../../assets/img/icons/severe-weather.png')} style={{ width: "15%" }} alt='' />
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Severe Storms
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td className="text-center">
                                                    <Badge onClick={toggle} color="light" style={{ cursor: "pointer", color: "#00264d", fontSize: "15px" }}>
                                                        Ouagadougou
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="d-flex justify-content-around align-items-center">
                                                        <img src={require('../../assets/img/icons/landslide.png')} style={{ width: "15%" }} alt='' />
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Landslides
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td className="text-center">
                                                    <Badge onClick={toggle} color="light" style={{ cursor: "pointer", color: "#00264d", fontSize: "15px" }}>
                                                        Ouagadougou
                                                    </Badge>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div style={{paddingTop: "8%"}}>
                                    <ListGroup flush style={{ width: "250px" }}>
                                        <ListGroupItem href="#" tag="a" className="d-flex justify-content-around">
                                            Drought <img src={require('../../assets/img/icons/drought.png')} style={{ width: "7%" }} alt='' />
                                        </ListGroupItem>
                                        <ListGroupItem href="#" tag="a" className="d-flex justify-content-around">
                                            Flooding <img src={require('../../assets/img/icons/flood.png')} style={{ width: "7%" }} alt='' />
                                        </ListGroupItem>
                                        <ListGroupItem href="#" tag="a" className="d-flex justify-content-around">
                                            Desertification <img src={require('../../assets/img/icons/desertification.png')} style={{ width: "7%" }} alt='' />
                                        </ListGroupItem>
                                        <ListGroupItem href="#" tag="a" className="d-flex justify-content-around">
                                            Sandstorms <img src={require('../../assets/img/icons/sandstorm.png')} style={{ width: "7%" }} alt='' />
                                        </ListGroupItem>
                                        <ListGroupItem href="#" tag="a" className="d-flex justify-content-around">
                                            Severe Storms <img src={require('../../assets/img/icons/severe-weather.png')} style={{ width: "7%" }} alt='' />
                                        </ListGroupItem>
                                        <ListGroupItem href="#" tag="a" className="d-flex justify-content-around">
                                            Landslides <img src={require('../../assets/img/icons/landslide.png')} style={{ width: "7%" }} alt='' />
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </div>
                            <AlertModal modal={modal} toggle={toggle} />
                        </div>
                    </div >
                </div>
            </div>
        </>
    );
};

export default Alerts;
