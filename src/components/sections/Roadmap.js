
import React from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import Image from "../../assets/background/night.png"



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
height: 100vh;

margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
 
`

const Roadmap = () => {
  return (
    <Section>

      <Title>
      Roadmap
      </Title>

      <Container>
        <SvgContainer>

        </SvgContainer>
      </Container>

    </Section>
  )
}

export default Roadmap