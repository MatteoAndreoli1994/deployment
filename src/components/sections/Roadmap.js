
import React, { useEffect } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import Image from "../../assets/background/night.png"
import Vignetta from "../../assets/elements/Vignetta.png"
import Aos from 'aos'
import 'aos/dist/aos.css'


const TitoloVignetta = styled.h2`
font-size: ${props => props.theme.fontxl};

text-align: center;
display:flex;
margin-left: 3%;
margin-right: 2%;
margin-top: 1%;

@media (max-width: 80em){

  text-align:center;
  font-size: ${props => props.theme.fontlg};
}
@media (max-width: 60em){

  text-align:center;
  font-size: ${props => props.theme.fontlg};
}
@media (max-width: 40em){

  text-align:center;
  font-size: ${props => props.theme.fontlg};
  margin-top: 4%;
}
@media (max-height: 20em){
  margin-top: 0.8%;
}
`
const Section = styled.section`

min-height: 100vh;
width: 100vw;

background-image: url(${Image});
object-fit: cover;
background-size: cover;
overflow: hidden;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
color: white;
width: fit-content;
text-transform: capitalize;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;



`
const Container = styled.div`
width: 80%;
min-height: 100vh;

margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;

`
const ContainerVignette = styled.div`
width: 90%;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

overflow: hidden;


`
const Test = styled.div`

background-size:100% 100%;
background-image: url(${Vignetta});
display: inline-flex;

max-width: 100%;
min-width: 60%;
max-height: 19%;
min-height: 13%;
margin: 1.5%;
align-items: center;

flex-direction: column;
overflow: hidden;

`
const Descrizione = styled.p`
font-size: ${props => props.theme.fontmd};
color: #292929;
display:flex;
margin-left: 3%;
margin-right: 3%;
margin-top: 1%;
margin-bottom: 4%;
flex-direction: column;



@media (max-width: 60em){
  font-size: ${props => props.theme.fontxs};
  
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxs};
}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};
  margin-top: 2%;
}

@media (max-height: 20em){
  margin-top: 0%;
}
`
const Link = styled.a`

`

const Roadmap = () => {
    useEffect(()=> {
      Aos.init({duration: 2000});
    }, []);

  return (
    <Section id="roadmap">
      <Title>
      Roadmap
      </Title>

      <Container>
        <ContainerVignette>
 
            <Test data-aos="zoom-in">
              <TitoloVignetta>
                1ST ALLOWLIST
              </TitoloVignetta>
              <Descrizione>Early stage of the project, 20 AllowList earned through giveaways and raffle.</Descrizione>
        
            </Test>

            <Test data-aos="zoom-in">
              <TitoloVignetta>
                2ND ALLOWLIST
              </TitoloVignetta>
              <Descrizione>Interactive phase, development of a gaming hub to grant the latest 180 WhiteList to the most talented gamer or artist.</Descrizione>

            </Test>

            <Test data-aos="zoom-in">
              <TitoloVignetta>
                MINT
              </TitoloVignetta>
              <Descrizione>The mint process will be supported by a system that offers incentives for our clients.</Descrizione>
              
            </Test>

            <Test data-aos="zoom-in">
              <TitoloVignetta>
                GBCC WEBGAME
              </TitoloVignetta>
              <Descrizione>Release of our main mini-game project for all GBCC Holders.</Descrizione>
              
            </Test>
            <Test data-aos="zoom-in">
              <TitoloVignetta>
              RELEASE OF ROADMAP 2.0
              </TitoloVignetta>
              <Descrizione>New Secret experiment.</Descrizione>
              
            </Test>

        </ContainerVignette>

      </Container>

    </Section>
  )
}

export default Roadmap