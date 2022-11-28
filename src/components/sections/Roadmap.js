
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
font-size: ${props => props.theme.fontl};
text-transform: capitalize;
position:absolute;
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


height: 13vh;
width: 60vw;


align-items: center;
justify-content: center;
display: flex;
margin-top:2rem;
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
              WL 1st Fase
            </Test>

            <Test>
              WL 2ndFase
            </Test>

            <Test>
            MINT
            </Test>

            <Test>
              Mutant
            </Test>

        </ContainerVignette>

      </Container>

    </Section>
  )
}

export default Roadmap