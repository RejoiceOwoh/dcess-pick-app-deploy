import React from "react";
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = () => {
 return (
  <Wrapper>
   <Title>Choose a ride, or swipe up for more</Title>
   <CarList>

    {carList.map((car, index) => (
     <Car key = {index}>
     <CarImage src={car.imgUrl} />
     <CarDetails>
      <Service>{car.services}</Service>
      <Time>20 Mins Away</Time>
     </CarDetails>
     <Price>₦24,000</Price>
    </Car>
    ))}
   </CarList>
  </Wrapper>
 )
}

export default RideSelector

const Car = tw.div `
flex p-4 items-center
`
const CarDetails = tw.div `
flex-1
`

const Service = tw.div `
font-medium
`

const Time = tw.div `
text-xs text-red-500
`

const Price = tw.div `
text-sm
`

const CarImage = tw.img `
h-12 mr-2
`

const Wrapper = tw.div `
flex-1 overflow-y-scroll flex flex-col
`
const CarList = tw.div `
overflow-y-scroll
`

const Title = tw.div `
text-blue-500 text-center text-xs py-2 border-b
`