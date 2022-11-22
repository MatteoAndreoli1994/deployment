import React from 'react'
import styled from 'styled-components'
import Accordion from "../Accordion"

const Section = styled.section`
min-height:100vh;
width:100vw;
background-color: #233329;
position: relative;
display: flex;

justify-content: center;
align-items: center;
flex-direction: column;

`

const Title = styled.h1`
margin: 1rem auto;
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: white;
position: flex;

width: fit-content;
padding: 0px;

`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center; 
`
const Box  = styled.div`
width: 45%;

color: white;
`

const Faq = () => {
  return (
    <Section id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="Wen mint?" > TBA </Accordion>
          <Accordion title="Where can i find the minigames and how do they work?" > There are weekly Telegram game and blablabla </Accordion>
          <Accordion title="Is is safe to mint?" > Yes. The Smartcontract is public </Accordion>
        </Box>

        <Box>
          <Accordion title="How many whitelist, how many mint per WL?" > 200WL and 3 free mint per WhiteList </Accordion>
          <Accordion title="Sgarbuzzi?" > Yes. we do </Accordion>
          <Accordion title="What Blockchain?" > BNB </Accordion>
        
        </Box>
      </Container>
    </Section>
  )
}

export default Faq