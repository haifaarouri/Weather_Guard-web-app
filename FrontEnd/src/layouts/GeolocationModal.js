import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, CardBody, CardFooter, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {
    Card,
    CardHeader,
    Row
} from "reactstrap";

const GeoLocationModal = ({ modal, toggle, onDataReceived }) => {

    const [locationPermission, setLocationPermission] = useState(null);

    const allow = () => {
        setLocationPermission(true)

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Latitude:", position.coords.latitude);
                console.log("Longitude:", position.coords.longitude);
                toggle()
            },
            (error) => {
                setLocationPermission(false)
            }
        );
    }

    const sendDataToParent = () => {
        let data = {}
        if (navigator.geolocation && locationPermission) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    data = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    onDataReceived(data);
                },
                (error) => {
                    data = { errorMsg: `Error retrieving geolocation: ${error.message}` }
                });
        } else {
            data = { errorMsg: 'Geolocation is not supported by this browser.' }
        }
    };

    useEffect(() => {
        sendDataToParent()
    }, [locationPermission])

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} size='l'>
                <ModalBody>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    Please allow geolocation for your browser to see weather information for your current location
                                </CardHeader>
                                <CardBody className='d-flex justify-content-center'>
                                    <Button style={{ backgroundColor: '#f58733', color: 'white' }} className="btn" onClick={allow}>
                                        Allow
                                    </Button>
                                </CardBody>
                                <CardFooter>
                                    {locationPermission === false && <Alert style={{ color: "#f58733", backgroundColor: "white", borderColor: "#f58733" }}>GeoLocation is denied, we will display weather info of Ouagadougou capital of Burkina Faso</Alert>}
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default GeoLocationModal;