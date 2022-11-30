
import React from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import Image from "../../assets/background/night.png"
import Vignetta from "../../assets/elements/Vignetta.png"



const TitoloVignetta = styled.h2`
font-size: ${props => props.theme.fontxl};

text-align: center;
display:flex;
margin-left: 2em;
margin-right: 2em;
margin-top: 0.5em;

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
const Test = styled.div`

background-size:100% 100%;
background-image: url(${Vignetta});
display: inline-flex;

max-width: 40vw;
max-height: 40vw;
margin: 1em;
align-items: center;

flex-direction: column;

@media (max-width: 60em){
  max-width: 40vw;
  margin: 0.1em;
}
@media (max-width: 40em){
  max-width: 40vw;
  margin: 0.5em;
}
@media (max-width: 30em){
  max-width: 80vw;
  max-height: 70vw;
  margin: 1em;
}
@media (max-width: 20em){
  max-width: 80vw;
  margin: 0.8em;
}
`
const Descrizione = styled.p`
font-size: ${props => props.theme.fontsm};

display:flex;
margin: 2em;

text-align: center;


@media (max-width: 60em){
  font-size: 0.1em;
}

@media (max-width: 40em){
  font-size: 0.1em;
}

@media (max-width: 30em){
  font-size: 0.1em;

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
              <Descrizione>Early stage stealth WhiteList edjne d d ed e er f er er e te t t t t e w tettwt tw tw tw tw tw PancakeSwap has the most users of any decentralized platform, ever.
And those users are now entrusting the platform with over $6.1 billion in funds. PancakeSwap has the most users of any decentralized platform, ever.
And those users are now entrusting the platform with over $6.1 billion in funds. PancakeSwap has the most users of any decentralized platform, ever.
And those users are now entrusting the platform with over $6.1 billion in funds.[LINK]</Descrizione>

            </Test>

            <Test>
              <TitoloVignetta>
                WhiteList 1st Fase
              </TitoloVignetta>
              <Descrizione>Early stage</Descrizione>

            </Test>

            <Test>
              <TitoloVignetta>
                WhiteList 1st Fase
              </TitoloVignetta>
              <Descrizione>Early stage</Descrizione>

            </Test>

            <Test>
              <TitoloVignetta>
                WhiteList 1st Fase
              </TitoloVignetta>
              <Descrizione>Early stage</Descrizione>

            </Test>

            <Test>
              <TitoloVignetta>
                WhiteList 1st Fase wewkhewiuhe
              </TitoloVignetta>
              <Descrizione>Early stag weiuwe ewiuw weiugwe uihweg weuigweb ewuighew ewuygw ewguie</Descrizione>

            </Test>
        </ContainerVignette>

      </Container>

    </Section>
  )
}

export default Roadmap