import React, { useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Container, Row } from "reactstrap";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import "../../assets/css/argon-dashboard-react.css"
import L from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import LeafletGeoCoder from "./LeafletGeoCoder";

const Maps = () => {

  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  const weatherIcon = L.divIcon({
    className: 'marker-icon',
    html: '<svg viewBox="0 0 30 30" fill="currentColor" height="5em" width="5em" color="#FFA500"><path d="M4.37 14.62c0-.24.08-.45.25-.62.17-.16.38-.24.6-.24h2.04c.23 0 .42.08.58.25.15.17.23.37.23.61s-.07.44-.22.61c-.15.17-.35.25-.58.25H5.23c-.23 0-.43-.08-.6-.25a.832.832 0 01-.26-.61zm2.86 6.93c0-.23.08-.43.23-.61l1.47-1.43c.15-.16.35-.23.59-.23s.44.08.6.23.24.34.24.57c0 .24-.08.46-.24.64L8.7 22.14c-.41.32-.82.32-1.23 0a.807.807 0 01-.24-.59zm0-13.84c0-.23.08-.43.23-.61.2-.17.41-.25.64-.25.22 0 .42.08.59.24l1.43 1.47c.16.15.24.35.24.59s-.08.44-.24.6-.36.24-.6.24-.44-.08-.59-.24L7.47 8.32a.837.837 0 01-.24-.61zm2.55 6.91c0-.93.23-1.8.7-2.6s1.1-1.44 1.91-1.91 1.67-.7 2.6-.7c.7 0 1.37.14 2.02.42.64.28 1.2.65 1.66 1.12.47.47.84 1.02 1.11 1.66.27.64.41 1.32.41 2.02 0 .94-.23 1.81-.7 2.61-.47.8-1.1 1.43-1.9 1.9-.8.47-1.67.7-2.61.7s-1.81-.23-2.61-.7c-.8-.47-1.43-1.1-1.9-1.9-.45-.81-.69-1.68-.69-2.62zm1.7 0c0 .98.34 1.81 1.03 2.5.68.69 1.51 1.04 2.49 1.04s1.81-.35 2.5-1.04 1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47-.69-.68-1.52-1.02-2.5-1.02-.97 0-1.8.34-2.48 1.02-.7.69-1.04 1.51-1.04 2.47zm2.66 7.78c0-.24.08-.44.25-.6s.37-.24.6-.24c.24 0 .45.08.61.24s.24.36.24.6v1.99c0 .24-.08.45-.25.62-.17.17-.37.25-.6.25s-.44-.08-.6-.25a.845.845 0 01-.25-.62V22.4zm0-15.5V4.86c0-.23.08-.43.25-.6.17-.17.37-.26.61-.26s.43.08.6.25c.17.17.25.37.25.6V6.9c0 .23-.08.42-.25.58s-.37.23-.6.23-.44-.08-.6-.23-.26-.35-.26-.58zm5.52 13.18c0-.23.08-.42.23-.56.15-.16.34-.23.56-.23.24 0 .44.08.6.23l1.46 1.43c.16.17.24.38.24.61 0 .23-.08.43-.24.59-.4.31-.8.31-1.2 0l-1.42-1.42a.974.974 0 01-.23-.65zm0-10.92c0-.25.08-.45.23-.59l1.42-1.47a.84.84 0 01.59-.24c.24 0 .44.08.6.25.17.17.25.37.25.6 0 .25-.08.46-.24.62l-1.46 1.43c-.18.16-.38.24-.6.24-.23 0-.41-.08-.56-.24s-.23-.36-.23-.6zm2.26 5.46c0-.24.08-.44.24-.62.16-.16.35-.24.57-.24h2.02c.23 0 .43.09.6.26.17.17.26.37.26.6s-.09.43-.26.6c-.17.17-.37.25-.6.25h-2.02c-.23 0-.43-.08-.58-.25s-.23-.36-.23-.6z" /></svg>'
  });

  return (
    <>
      <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)" }}>
        <Container style={{ marginTop: "5%" }}>
          <div className="header-body"></div>
          <Container className="mt--7" fluid>
            <Row>
              <div className="col">
                <Card className="shadow border-0">
                  <MapContainer zoomControl={false} center={[12.2418505, -1.5567604999999958]} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[12.2418505, -1.5567604999999958]} icon={weatherIcon}>
                      <Popup>
                        <Card
                          style={{
                            width: '18rem'
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h5">
                              Sunny day
                            </CardTitle>
                            <CardSubtitle
                              className="mb-2 text-muted"
                              tag="h6"
                            >
                              weather information
                            </CardSubtitle>
                          </CardBody>
                          <img
                            alt="Card cap"
                            src={require("../../assets/img/theme/Burkina_Faso.jpg")}
                            width="100%"
                          />
                          <CardBody>
                            <CardText>
                              <p><b>Weather: </b> description of the weather<br /><b>Humidity: </b> 85 <b> <br />Temp in &deg; C : </b> 31</p>
                            </CardText>
                          </CardBody>
                        </Card>
                      </Popup>
                    </Marker>
                    <ZoomControl position="bottomright" />
                    <LeafletGeoCoder />
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
