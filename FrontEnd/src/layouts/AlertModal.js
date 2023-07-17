import React from 'react'
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Button, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {
    Card,
    CardHeader,
    Row
} from "reactstrap";

import AlertsMap from 'views/examples/alertsMap';
const AlertModal = ({ modal, toggle }) => {

    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    };
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    };

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} size='xl'>
                <ModalHeader toggle={toggle}>Drought</ModalHeader>
                <ModalBody>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Alert</h3>
                                </CardHeader>
                                <CardBody>
                                    <MapContainer center={[12.2418505, -1.5567604999999958]} zoom={7} scrollWheelZoom={false}>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <AlertsMap />
                                    </MapContainer>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <br />
                    <Button style={{ backgroundColor: "#f58733", color: "white" }} onClick={toggleNested}>
                        More datails
                    </Button>
                    <Modal
                        isOpen={nestedModal}
                        toggle={toggleNested}
                        onClosed={closeAll ? toggle : undefined}
                    >
                        <ModalHeader>Datails about this danger</ModalHeader>
                        <ModalBody>
                            <h1>Burkina Faso drought triggers water and power shortages</h1>
                            <p>An intense dry season across the Sahel region leads to severe heat, causing water and power cuts for millions.</p>
                            <p>A strong drought has left many residents without drinking water in the West African nation of Burkina Faso.
                                The capital Ouagadougou, which has been badly hit, is currently cutting off the city's water supply intermittently.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={toggleNested}>
                                Done
                            </Button>
                            <Button color="secondary" onClick={toggleAll}>
                                All Done
                            </Button>
                        </ModalFooter>
                    </Modal>
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

export default AlertModal;