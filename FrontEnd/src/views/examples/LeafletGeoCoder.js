import { useEffect } from 'react'
import L from "leaflet"
import { useMap } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
// import burkinaFasoCoordinates from "./worldContries"

function LeafletGeoCoder() {

    const map = useMap()

    useEffect(() => {

        // L.geoJSON(burkinaFasoCoordinates,
        //     { onEachFeature: onEachFeature },
        //     {
        //         style: {
        //             "fillColor": "yellow",
        //             "color": "orange",
        //             "fillOpacity": 0.2
        //         }
        //     }).addTo(map);

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