import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export interface MapProps {
    position: [number, number],
}

const Map: React.FC<MapProps> = ({position}) => {

    return (

        <MapContainer style={{width: '100%', height: `100%`}} center={position} zoom={15}>

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>


    );
}

export default Map;