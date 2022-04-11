import { accessToken } from 'mapbox-gl'
import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/map'

const Confirm = () => {

 const [ pickupCoordinates, setPickupCoordinates ]  = useState()
 const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

 const getPickupCordinates = () => {
  const pickup = "Enugu";
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
   new URLSearchParams({
    access_token: 'pk.eyJ1IjoicmVqb2ljZWNvcnBvcmF0aW9ucyIsImEiOiJjbDE2eTV2ZG4waGRvM2twZjk3MWFsOXUzIn0.xtCcnCaB0E8hNbieercpvQ',
    limit:1
   })
  )
  .then (response => response.json())
  .then (data => {
   setPickupCoordinates(data.features[0].center)
  })
 }

 const getDropoffCoordinates = () => {
  const dropoff = "Lagos";
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
   new URLSearchParams({
    access_token: 'pk.eyJ1IjoicmVqb2ljZWNvcnBvcmF0aW9ucyIsImEiOiJjbDE2eTV2ZG4waGRvM2twZjk3MWFsOXUzIn0.xtCcnCaB0E8hNbieercpvQ',
    limit:1
   })
  )
  .then (response => response.json())
  .then (data => {
   setDropoffCoordinates(data.features[0].center)
  })
 }

 useEffect (() => {
  getPickupCordinates();
  getDropoffCoordinates();
 }, [])


 return (
  <Wrapper>
   <Map 
     pickupCoordinates={pickupCoordinates}
     dropoffCoordinates={dropoffCoordinates}
   />
    <RideContainer>
    Pickup
    {pickupCoordinates}
    Dropoff
    {dropoffCoordinates}
    </RideContainer>
  </Wrapper>
 )
}

export default Confirm

const RideContainer = tw.div `
flex-1
`

const Wrapper = tw.div `
flex h-screen flex-1 flex-col
`