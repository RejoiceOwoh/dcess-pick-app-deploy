import { accessToken } from 'mapbox-gl'
import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
 const router = useRouter()
 const { pickup, dropoff } = router.query

 console.log("Pickup", pickup)
 console.log("Dropoff", dropoff)

 const [ pickupCoordinates, setPickupCoordinates ]  = useState()
 const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

 const getPickupCordinates = (pickup) => {
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

 const getDropoffCoordinates = (dropoff) => {
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
  getPickupCordinates(pickup);
  getDropoffCoordinates(dropoff);
 }, [pickup, dropoff])


 return (
  <Wrapper>
   <Map 
     pickupCoordinates={pickupCoordinates}
     dropoffCoordinates={dropoffCoordinates}
   />
    <RideContainer>
     <RideSelector />
     <ConfirmButtonContainer>
      <ConfirmButton>
       Confirm Ride!
      </ConfirmButton>
     </ConfirmButtonContainer>
    </RideContainer>
  </Wrapper>
 )
}

export default Confirm

const RideContainer = tw.div `
flex-1 flex flex-col h-1/2
`

const ConfirmButton = tw.div `
bg-blue-600 text-white m-4 py-4 text-center text-xl cursor-pointer
`

const ConfirmButtonContainer = tw.div `
border-t-2 
`


const Wrapper = tw.div `
flex h-screen flex-1 flex-col
`