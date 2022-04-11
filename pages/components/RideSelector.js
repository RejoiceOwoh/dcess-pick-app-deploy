import React from "react";
import tw from "tailwind-styled-components"

const RideSelector = () => {
 return (
  <Wrapper>
   <Title>Choose a ride, or swipe up for more</Title>
   <CarList>
    <Car>
     <CarImage src="https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-127.jpg?t=st=1649641205~exp=1649641805~hmac=af53a81286ca4d598fd4a95f0d679131d3d31bc685572b62f335067f5d45d8f7&w=740" />
     <CarDetails>
      <Service>God is Good Motors</Service>
      <Time>20 Mins Away</Time>
     </CarDetails>
     <Price>₦24,000</Price>
    </Car>
   </CarList>
  </Wrapper>
 )
}

export default RideSelector

const Car = tw.div `
flex
`
const CarDetails = tw.div `
flex-1
`

const Service = tw.div ``

const Time = tw.div ``

const Price = tw.div ``

const CarImage = tw.img `
h-12
`

const Wrapper = tw.div `
flex-1 
`
const CarList = tw.div ``

const Title = tw.div `
text-blue-500 text-center text-xs py-2 border-b
`