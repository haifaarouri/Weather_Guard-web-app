import { useEffect } from 'react'
import L from "leaflet"
import { useMap } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import burkinaFasoCoordinates from "./worldContries"
import coord from "../../data/burkina-faso-with-regions_"
import alerts from "../../data/alerts"

function LeafletGeoCoder() {

    const map = useMap()

    const rectangle = { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "name": "rectangle1" }, "geometry": { "coordinates": [[[-5.752266795575991, 14.885845160854515], [-5.752266795575991, 9.352628263141426], [2.914662610600601, 9.352628263141426], [2.914662610600601, 14.885845160854515], [-5.752266795575991, 14.885845160854515]]], "type": "Polygon" }, "id": 0 }] }

    function onEachFeature(feature, layer) {
        // layer.bindPopup(feature.properties.name)
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

    useEffect(() => {
        // L.geoJSON(rectangle, {
        //     onEachFeature: onEachFeature
        // }).addTo(map);

        L.geoJSON(burkinaFasoCoordinates,
            { onEachFeature: onEachFeature },
            {
                style: {
                    "fillColor": "yellow",
                    "color": "orange",
                    "fillOpacity": 0.2
                }
            }).addTo(map);

        // L.geoJSON(coord).addTo(map);

        // const geoJsonLayer = L.geoJSON(alerts).addTo(map);

        // Fit the map bounds to the GeoJSON layer
        // map.fitBounds(geoJsonLayer.getBounds());

        L.Control.geocoder({
            defaultMarkGeocode: false
        })
            .on('markgeocode', function (e) {
                var lat_lng = e.geocode.center;
                L.marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
                map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
    }, [])
    return null
}

export default LeafletGeoCoder