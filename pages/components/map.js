import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmVqb2ljZWNvcnBvcmF0aW9ucyIsImEiOiJjbDE2eTV2ZG4waGRvM2twZjk3MWFsOXUzIn0.xtCcnCaB0E8hNbieercpvQ';

const Map = () => {
 useEffect(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
    center: [8.675277, 9.081999],
    zoom: 3,
  });
});



 return <Wrapper id='map'>

 </Wrapper>
}

export default Map

const Wrapper = tw.div`
  flex-1
`