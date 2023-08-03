import React from 'react';
// reactstrap components
import {
    Container
} from "reactstrap";

const Alerts = () => {

    return (
        <>
            <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)" }}>
                <Container style={{ marginTop: "-2%" }}>
                    <div className="header-body">
                        <h1>List of Alerts</h1>

                    </div>
                </Container>
            </div>
        </>
    );
};

export default Alerts;
