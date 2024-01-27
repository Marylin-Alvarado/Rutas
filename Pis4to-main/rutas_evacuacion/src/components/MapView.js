import React, { useState, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import Markers from "./Markers";
import placesData from '../assets/data.json';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuBar from "./MenuBar";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

const MapView = () => {
    const { places } = placesData;
    const [state, setState] = useState({
        currenlocation: { lat: '-4.029817', lng: '-79.199492' },
        zoom: 20
    })
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        if (location.state && location.state.latitude && location.state.longitude) {
            const currenlocation = {
                lat: location.state.latitude,
                lng: location.state.longitude,
            }
            setState(prevState => ({ ...prevState, currenlocation }))

            history.replace({ pathname: '/map', state: {} })
        }
    }, [history, location.state]); // Agrega las dependencias aquí

    return (
        <div>
            <div><MenuBar></MenuBar></div>
            <div>
                <MapContainer center={state.currenlocation} zoom={state.zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="OpenStreetMap"
                    />
                    <Markers places={places} />
                    <Polyline positions={places.map(place => place.geometry)} color="black" />
                </MapContainer>
            </div>
        </div>
    );
}
export default MapView;