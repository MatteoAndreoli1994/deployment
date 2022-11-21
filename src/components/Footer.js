import React from 'react'
import styled from 'styled-components'
import Twitter from "../assets/social-media-icons/twitter.png"
import Telegram from "../assets/social-media-icons/Telegram.png"
import Image from "../assets/background/night.png"
import Logo from "../assets/logo/logo1.png"

const Btn = styled.button`
display: inline-block;
background-color: #F1F5F3;
color: black;
outline: none;
border: none;
height:60px;
width:60px;
border-radius: 50%;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}
&::after{
    content:' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border:2px solid #F1F5F3;
    width: 100%;
    height: 100%;
    border-radius:50px;
    transition: all 0.2s ease;

}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`
const Section = styled.div`

height:30vh;
width:100vw;
background-color: #58C0BA;
position: relative;
display: flex;

justify-content: center;
align-items: center;


`
const MenuSocial = styled.div`

margin-top: 1.5em;
width: 80%;
display:flex;
align-item: center;
justify-content: space-between;
margin: 2rem auto;
width: 10%;


&>*{
  padding-right: 0.5rem;
  transform: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
}
`
const Container = styled.div`
flex-direction: column;
width: 100%;
height:100%;

display: flex;

align-items:center;

`

const DivTesto = styled.div`
width: 80%;
color: #597A9B;
justify-content: left;
align-items:center;
display: flex;
`
const DivTesto2 = styled.div`
width: 80%;
margin-top: 2em;

justify-content: center;
align-items:center;
display: flex;
`
const Testo = styled.h4`
font-size: 15px;
`
const ListUnlisted = styled.ul``


const Footer = () => {
  return (
    <Section>
      <Container>

        <DivTesto2>
          <img style={{ width: 210, height: 60 }} src={Logo}/>
        </DivTesto2>

        <MenuSocial>
        <Btn type="submit"><img style={{ width: 60, height: 60 }} src={Twitter} alt=""/></Btn>
        <Btn type="submit"><img style={{ width: 60, height: 60 }} src={Telegram} alt=""/></Btn>
        </MenuSocial>

        <DivTesto>
          <h4>© 2022 GBCC. All Rights Reserved.</h4>
        </DivTesto>

      </Container>
      </Section>
  )
}

export default Footer