import { useEffect } from 'react'
import L from "leaflet"
import { useMap } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
// import alerts from "../../data/alerts"
import coord from "../../data/burkina-faso-with-regions_"
import {GoAlertFill} from "react-icons/go"

function AlertsMap() {

    const map = useMap()

    function onEachFeature(feature, layer) {
        // layer.bindPopup(feature.properties.name)
        layer.on('click', () => {
            layer.bindPopup('<p><GoAlertFill/> Burkina Faso is prone to droughts due to its arid and semi-arid climate. Periods of extended drought can have devastating effects on agriculture, food security, and the overall economy of the country.</p>')
        })
    }

    useEffect(() => {
        L.geoJSON(coord,
            { onEachFeature: onEachFeature },
            {
                style: {
                    "fillColor": "red",
                    "color": "orange",
                    "fillOpacity": 0.2
                }
            }).addTo(map);

        // const geoJsonLayer = L.geoJSON(alerts).addTo(map);
        // map.fitBounds(geoJsonLayer.getBounds());
    }, [])
    return null
}

export default AlertsMap