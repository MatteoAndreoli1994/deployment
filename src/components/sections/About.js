import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from "../Carousel"
import Button from "../Button"
import {dark} from "../../styles/Themes"

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
align-self: flex-start;
margin: 1rem auto;
width: 80%;
`
const ButtonContainer = styled.div`
width: 80%;
margin-top: 1rem;
margin: 1rem auto;
align-self: flex-start;
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};

align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`
const SubTextLight = styled.section`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};;
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`
const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: #F7CACD;
color: black;
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items:center;
`
const Box = styled.div`

width: 50%;
height: 100%;
display: flex;
flex-direction: column;
Justify-content: center;
align-item: center;


`

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title> Welcome to the Game Boyz Color Club. </Title>
          <SubText> Game Boyz Color Club is a private collection of NFTs-unique digital collectibles.
            The GameBoyz are stored as ERC-721 tokens on the Binance Smart Chain and hosted on IPFS. 
          </SubText>
          <SubTextLight> With more than 200 hand drawn traits, and cute composition. Each nft will grant you to partecipate in
            more than 10+ telegram and web-game everyday with lots of juicy prizes! </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}><Button text="JOIN OUR TELEGRAM" link="#"/></ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About
