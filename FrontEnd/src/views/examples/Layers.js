import React, { useEffect, useState } from "react"
import { LayersControl, MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import coord from "../../data/burkina-faso-with-regions_"
import L from "leaflet"
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from "reactstrap"
import { useNavigate } from 'react-router-dom';

function Layers() {

    const center = [11.905720, -1.293255]
    const tileLayers = ["temp_new", "precipitation_new", "wind_new", "pressure_new", "clouds_new"]

    const countryStyle = {
        weight: 2,
        fillColor: "yellow",
        color: "orange",
        fillOpacity: 0.2
    };

    function onEachCountry(feature, layer) {
        layer.on('click', (e) => {
            fetch('http://api.weatherapi.com/v1/current.json?key=ee607f51c624467cbb584843230307&q=Ouagadougou&aqi=no')
                .then(res => res.json())
                .then(data => {
                    var weather = '<div><p><b>Weather: </b>' + data.current.condition.text + '<br><b>Humidity: </b>' + data.current.humidity + '<b>Temp in &deg; C : </b>' + data.current.temp_c + '</p></div>'
                    layer.bindPopup('<img src="https://flagsapi.com/BF/shiny/64.png" width="30px" height="20px"/><h2>' + feature.properties.ADMIN + '</h2>' + weather)
                })
                .catch(err => console.log(err))
        })
    }

    let regionCenter = []
    for (let index = 0; index < coord.features.length; index++) {
        const reversedObj = {};
        const obj = L.latLngBounds(coord.features[index].geometry.coordinates).getCenter()

        const values = Object.values(obj);
        const keys = Object.keys(obj);

        for (let i = 0; i < values.length; i++) {
            reversedObj[keys[i]] = values[values.length - 1 - i];
        }
        regionCenter.push(reversedObj)
    }

    const icon01d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
        iconSize: [50, 50]
    });

    const icon01n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/01n@2x.png",
        iconSize: [50, 50]
    });

    const icon02d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
        iconSize: [50, 50]
    });

    const icon02n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/02n@2x.png",
        iconSize: [50, 50]
    });

    const icon03d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
        iconSize: [50, 50]
    });

    const icon03n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/03n@2x.png",
        iconSize: [50, 50]
    });

    const icon04d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/04d@2x.png",
        iconSize: [50, 50]
    });

    const icon04n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/04n@2x.png",
        iconSize: [50, 50]
    });

    const icon09d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/09d@2x.png",
        iconSize: [50, 50]
    });

    const icon09n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/09n@2x.png",
        iconSize: [50, 50]
    });

    const icon10d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
        iconSize: [50, 50]
    });

    const icon10n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/10n@2x.png",
        iconSize: [50, 50]
    });

    const icon11d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/11d@2x.png",
        iconSize: [50, 50]
    });

    const icon11n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/11n@2x.png",
        iconSize: [50, 50]
    });

    const icon13d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/13d@2x.png",
        iconSize: [50, 50]
    });

    const icon13n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/13n@2x.png",
        iconSize: [50, 50]
    });

    const icon50d = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/50d@2x.png",
        iconSize: [50, 50]
    });

    const icon50n = L.icon({
        iconUrl: "https://openweathermap.org/img/wn/50n@2x.png",
        iconSize: [50, 50]
    });

    const [dataList, setDataList] = useState([])
console.log(dataList);
    const getWeatherIcon = async () => {
        let d = []
        for (let index = 0; index < regionCenter.length; index++) {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${regionCenter[index].lat}&lon=${regionCenter[index].lng}&appid=ff0a7f12e23465a0a0ff9fc0f2e642d7&units=metric`);
            const data = await response.json()
            d.push(data)
        }
        setDataList(d)
    }

    useEffect(() => {
        getWeatherIcon()
    }, [])


    const navigate = useNavigate();

    const sendData = (coord) => {
        const { lat, lon } = coord
        navigate(`/admin/weather?lat=${lat}&lon=${lon}`);
    };

    return (
        <MapContainer zoomControl={true} center={center} zoom={7} scrollWheelZoom={true}>
            <LayersControl position="topleft">
                <LayersControl.BaseLayer checked name="DefaultMap">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="TempMap">
                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${tileLayers[0]}/{z}/{x}/{y}.png?appid=ff0a7f12e23465a0a0ff9fc0f2e642d7`}
                        attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="PrecipMap">
                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${tileLayers[1]}/{z}/{x}/{y}.png?appid=ff0a7f12e23465a0a0ff9fc0f2e642d7`}
                        attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="WindMap">
                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${tileLayers[2]}/{z}/{x}/{y}.png?appid=ff0a7f12e23465a0a0ff9fc0f2e642d7`}
                        attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="PressureMap">
                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${tileLayers[3]}/{z}/{x}/{y}.png?appid=ff0a7f12e23465a0a0ff9fc0f2e642d7`}
                        attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="CloudMap">
                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${tileLayers[4]}/{z}/{x}/{y}.png?appid=ff0a7f12e23465a0a0ff9fc0f2e642d7`}
                        attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
            <GeoJSON data={coord} style={countryStyle} onEachFeature={onEachCountry} />
            {dataList.length > 0 && dataList.map((e, index) => (
                e.list[0].weather[0].icon === "01d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon01d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "01n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon01n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "02d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon02d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "02n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon02n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "03d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon03d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "03n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon03n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "04d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon04d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "04n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon04n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "09d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon09d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "09n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon09n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "10d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon10d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "10n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon10n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "11d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon11d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "11n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon11n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "13d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon13d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "13n" ? (
                    <Marker key={index} position={e.city.coord} icon={icon13n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "50d" ? (
                    <Marker key={index} position={e.city.coord} icon={icon50d}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                ) : e.list[0].weather[0].icon === "50n" && (
                    <Marker key={index} position={e.city.coord} icon={icon50n}>
                        <Popup>
                            <Card>
                                <CardHeader tag="h3">{e.city.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>Current weather</CardTitle>
                                    <CardText>Temp {e.list[0].main.temp} °C</CardText>
                                    <CardText>Feels like {e.list[0].main.feels_like} °C</CardText>
                                    <CardText>{e.list[0].weather[0].description}</CardText>
                                    <CardText>Wind speed {e.list[0].wind.speed} m/s</CardText>
                                </CardBody>
                                <CardFooter className="text-muted"><Button style={{ backgroundColor: "#00264d", color: "white" }} onClick={() => sendData(e.city.coord)}>Go to weather forecast</Button></CardFooter>
                            </Card>
                        </Popup>
                    </Marker>
                )
            )
            )}
        </MapContainer>
    )
}

export default Layers