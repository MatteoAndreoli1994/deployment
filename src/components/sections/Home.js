import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../CoverVideo'
import TypeWriterText from '../TypeWriterText'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`  };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
align-items: center;
justify-content: center;
display: flex;
`

const Container = styled.div`
width: 75vw;
min-height: 80vh;

background-color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items:center;

@media (max-width: 64em){

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

height: 100%;
display: flex;
flex-direction: column;
Justify-content: center;



@media (max-width: 64em){
  width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;
    
  

}
`
const Box2 = styled.div`


height: 30vh;
width: 30vw;

background: rgba(249,249,249,0.5);
display: flex;
flex-direction: column;
align-items:center;
Justify-content: center;
border-radius: 15px 50px;
border-style: solid;
border-color: white;
margin: 2%;
@media (max-width: 48em){
  width: 75vw;

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
          <h1>Giveaways:</h1>
          <p>25% - 3 BadSeeds</p>
          <p>50% - 3 LittleGhost</p>
          <p>75% - 3 MoonPets </p>
          <p>100% - 1 PancakeSquad, 1000$ </p>
        </Box2>

      </ColumnContainer>
      

      </Container>
      
    </Section>
  )
}

export default Home