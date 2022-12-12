
import React from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import Image from "../../assets/background/night.png"
import Vignetta from "../../assets/elements/Vignetta.png"



const TitoloVignetta = styled.h2`
font-size: ${props => props.theme.fontxl};

text-align: center;
display:flex;
margin-left: 1%;
margin-right: 1%;
margin-top: 1%;

@media (max-width: 80em){

  text-align:center;
  font-size: ${props => props.theme.fontlg};
}
@media (max-width: 60em){

  text-align:center;
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 40em){

  text-align:center;
  font-size: ${props => props.theme.fontsm};
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
min-width: 90%;
max-height: 17%;
min-height: 15%;
margin: 1.5%;
align-items: center;

flex-direction: column;
overflow: hidden;

`
const Descrizione = styled.p`
font-size: ${props => props.theme.fontmd};

display:flex;
margin-left: 3%;
margin-right: 3%;
margin-top: 1%;
margin-bottom: 2%;
flex-direction: column;



@media (max-width: 60em){
  font-size: ${props => props.theme.fontsm};
  
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxs};
}

@media (max-width: 30em){
  font-size: 0.2em;
  margin-top: 2%;
}

@media (max-height: 20em){
  margin-top: 0%;
}
`
const Link = styled.a`

`

const Roadmap = () => {
  return (
    <Section id="roadmap">

      <Title>
      Roadmap
      </Title>

      <Container>
        <ContainerVignette>

            <Test>
              <TitoloVignetta>
                1ST ALLOWLIST
              </TitoloVignetta>
              <Descrizione>Early stage of the project, 20 AllowList earned through giveaways and raffle.</Descrizione>

            </Test>

            <Test>
              <TitoloVignetta>
                2ND ALLOWLIST
              </TitoloVignetta>
              <Descrizione>Interactive phase, development of a gaming hub to grant the latest 180 WhiteList to the most talented gamer or artist.</Descrizione>

            </Test>

            <Test>
              <TitoloVignetta>
                MINT
              </TitoloVignetta>
              <Descrizione>The mint process will be supported by a system that offers incentives for our clients.</Descrizione>
              
            </Test>

            <Test>
              <TitoloVignetta>
                GBCC WEBGAME
              </TitoloVignetta>
              <Descrizione>Release of our main mini-game project for all GBCC Holders.</Descrizione>
              
            </Test>
            <Test>
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