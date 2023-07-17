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

    const allow = () => setLocationPermission(true)

    const deny = () => setLocationPermission(false)

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
                                    <Button color="success" onClick={allow}>
                                        Allow
                                    </Button>
                                    <Button color="danger" onClick={deny}>
                                        Deny
                                    </Button>
                                </CardBody>
                                <CardFooter>
                                    {locationPermission && <Alert>GeoLocation is allowed now, we will display the weather info for your current position</Alert>}
                                    {locationPermission === false && <Alert color="danger">GeoLocation is denied, we will display weather info of Ouagadougou capital of Burkina Faso</Alert>}
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