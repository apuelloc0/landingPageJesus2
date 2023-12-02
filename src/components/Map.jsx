import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import "./Map.css";

let IconLocation = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [10, 35],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76],
})

const Map = () => {

    const limeOptions = { color: 'lime' }

    return (
        <div className='Map'>
            <MapContainer center={[39.73915, -104.9847]} zoom={3} scrollWheelZoom={false} className='Map-container'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={IconLocation} pathOptions={limeOptions} position={[31.2504400, -99.2506100]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker icon={IconLocation} position={[41.85003, -87.65005]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker icon={IconLocation} position={[35.7721, -78.63861]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker icon={IconLocation} position={[27.975443, -81.670873]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker icon={IconLocation} position={[37.2502200, -119.7512600]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    )
}

export default Map
