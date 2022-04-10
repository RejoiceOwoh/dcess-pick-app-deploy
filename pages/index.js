import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/map'
import Link from 'next/link'



export default function Home() {

 

  return (
    <Wrapper>
      <Map />
      <ActionItems>
       <Header>
         <RejoiceCodes>Welcome To Dcess Pick-App</RejoiceCodes>
         <Profile>
           <Name>Owoh Rejoice</Name>
           <UserImage 
             src='https://avatars.githubusercontent.com/u/102045100?v=4'
           />
         </Profile>
       </Header>
      <ActionButtons>
        <Link href ='/search'>
          <ActionButton>
          <ActionButtonImage src='https://cdn-icons.flaticon.com/png/512/1048/premium/1048339.png?token=exp=1649626203~hmac=b859aa9c103794b6f071895ae23d2b25'/>
            Ride
          </ActionButton>
        </Link>
        <ActionButton>
        <ActionButtonImage src='https://cdn-icons.flaticon.com/png/512/1768/premium/1768201.png?token=exp=1649626885~hmac=a96918256eb566443e638108157dcd2e'/>
          Wheels
        </ActionButton>
        <ActionButton>
        <ActionButtonImage src='https://cdn-icons-png.flaticon.com/512/3652/3652191.png'/>
          Reserve
        </ActionButton>
      </ActionButtons>

      <InputButton>
        Where to?
      </InputButton>

      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`
const ActionItems = tw.div`
  flex-1 p-5
`
const Header = tw.div`
flex justify-between items-center
`

const RejoiceCodes = tw.div`
font-bold
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div` 
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border-orange-200 p-px 
`

const ActionButtons = tw.div`
flex 
`
const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition-all text-xl
`
const ActionButtonImage = tw.img `
h-20
`
const InputButton = tw.div `
h-20 bg-gray-200 text-xl p-4 flex items-center mt-8 rounded-lg
`
