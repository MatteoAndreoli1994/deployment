
import React from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import Image from "../../assets/background/night.png"
import Vignetta from "../../assets/elements/Vignetta.png"


const UseVignetta = styled.div`
height: 10vh;
width: 50vw;
background-color:red;


align-items: center;
justify-content: center;
display: flex;
margin-top:2rem;


`
const TitoloVignetta = styled.h2`
font-size: ${props => props.theme.fontxl};

display:flex;
margin: 1em;

@media (max-width: 60em){

  text-align:center;
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 40em){

  text-align:center;
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 30em){

  text-align:center;
  font-size: 1em;
  margin: 0.5em auto;
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
width: 70%;
min-height: 100vh;

margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;

`
const ContainerVignette = styled.div`
width: 100vw;
height: 90vh;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;




`
const Immagine1 = styled.img`
max-width: 100%;
max-height: 100%;
background-size:100% 100%;

`
const Test = styled.div`

background-size:100% 100%;
height:100%;
width:100%;
background-image: url(${Vignetta});

height: 24vh;
width: 80vw;
margin: 1em;

align-items: center;
display: flex;
flex-direction: column;

@media (max-width: 60em){
  height: 30vh;
  width: 80vw;
  margin: 0.1em;
}
@media (max-width: 40em){
  height: 30vh;
  width: 80vw;
  margin: 0.5em;
}
@media (max-width: 30em){
  height: 30vh;
  width: 80vw;
  margin: 0.2em;
}
`
const Descrizione = styled.p`
font-size: ${props => props.theme.fonts};

display:flex;
margin-left: 2em;
margin-right: 2em;
text-align: center;
margin-bottom: 2em;
@media (max-width: 60em){


  font-size: 0.1em;
}
@media (max-width: 40em){


  font-size: 0.1em;
}
@media (max-width: 30em){


  font-size: 0.1em;
  margin-top: 0.2 auto;
  
}

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
                WhiteList 1st Fase
              </TitoloVignetta>
              <Descrizione>Early stage stealth WhiteList [LINK]</Descrizione>

            </Test>

            <Test>
              <TitoloVignetta>
                WhiteList 2ndFase
              </TitoloVignetta>
              <Descrizione>Early stage stealth WhiteList [LINK]</Descrizione>
            </Test>

            <Test>
            <TitoloVignetta>
              MINT
            </TitoloVignetta>
            <Descrizione>On June 10, each Dippie can claim their own Van which are the keys to the Dippieverse. Vans will expand the community and bring in other collections to integrate into our eco-system. Additionally, Vans give you access to the 'DippieRaces' P2E game.</Descrizione>
            </Test>

            <Test>
            <TitoloVignetta>
              Mutant
            </TitoloVignetta>
            <Descrizione>Early stage stealth WhiteList edsiuhewudhewiuhdewiuheuhiuhriuhieu</Descrizione>
            </Test>

        </ContainerVignette>

      </Container>

    </Section>
  )
}

export default Roadmap