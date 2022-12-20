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
  flex-direction: column;

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
margin: 1%;


@media (max-width: 64em){
  width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;
    
  

}
`
const Box2 = styled.div`

width: 50%;
height: 100%;
margin: 1%;
background-color: #F9F9F9;
background: rgba(249,249,249,0.5);
display: flex;
flex-direction: column;
align-items:center;
Justify-content: center;
border-radius: 15px 50px;
border-style: solid;
border-color: white;

@media (max-width: 48em){
  width: 100%;

} 

`

const ColumnContainer = styled.div`
width: 50%;
height: 100%;

justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`

export const Home = () => {
  return (
    <Section id="home">
      <Container>
      <Box> <TypeWriterText/> </Box>
      <ColumnContainer>

        <Box2> 
          <CoverVideo/> 
        </Box2>

        <Box2> 
          <CoverVideo/> 
        </Box2>

      </ColumnContainer>
      

      </Container>
      
    </Section>
  )
}

export default Home