import React from 'react'
import { Marker } from "react-leaflet";
import { IconLocation } from './IconLocation';
import placesData from '../assets/data.json';



const Markers = (props) => {
  const { places } = props
  const markers = places.map((places, i) => (
    <Marker
    key={i}
    position={places.geometry}
    places={placesData.places}
    icon={IconLocation}/>

  ))
  return (
    markers
  )
}

export default Markers

