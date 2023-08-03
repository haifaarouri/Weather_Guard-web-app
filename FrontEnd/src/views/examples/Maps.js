import React, { useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import { MapContainer } from "react-leaflet";
import "../../assets/css/argon-dashboard-react.css"
import L from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import LeafletGeoCoder from "./LeafletGeoCoder";
import Layers from "./Layers";

const Maps = () => {

  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <>
      <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)" }}>
        <Container style={{ marginTop: "5%" }}>
          <Container className="mt--7" fluid>
            <Row>
              <div className="col">
                <Card className="shadow border-0">
                  <MapContainer zoomControl={true} zoom={3} scrollWheelZoom={true}>
                    <LeafletGeoCoder />
                    <Layers />
                  </MapContainer>
                </Card>
              </div>
            </Row>
          </Container>
        </Container >
      </div >
    </>
  );
};

let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

// L.marker.prototype.options.icon = DefaultIcon;

export default Maps;
