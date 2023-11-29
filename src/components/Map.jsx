import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-icon.png";
import "./Map.css";

const Map = () => {

    const limeOptions = { color: 'lime' }

    return (
        <div className='Map'>
            <MapContainer center={[39.73915, -104.9847]} zoom={4} scrollWheelZoom={false} className='Map-container'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker pathOptions={limeOptions} position={[41.85003, -87.65005]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[34.05223, -118.24368]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[29.76328, -95.36327]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[32.78306, -96.80667]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {/* <Marker position={[10.13625, -64.68618]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}

            </MapContainer>
        </div>
    )
}

export default Map
