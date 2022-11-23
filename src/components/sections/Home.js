import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../CoverVideo'
import TypeWriterText from '../TypeWriterText'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`  };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width:75%;
min-height: 80vh;
margin: 0 auto;
background-color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items:center;

@media (max-width: 64em){
  width: 85%;
}
@media (max-width: 48em){
  flex-direction: column-reverse;

  &>*:first-child{
    width: 100%;
    margin-top: 2rem;

  }

} 
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
Justify-content: center;
`
const Box2 = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
Justify-content: center;

@media (max-width: 48em){
  width: 80%;

} 

`

export const Home = () => {
  return (
    <Section id="home">
      <Container>
      <Box> <TypeWriterText/> </Box>
      <Box2> <CoverVideo/> </Box2>
      </Container>
      
    </Section>
  )
}

export default Home