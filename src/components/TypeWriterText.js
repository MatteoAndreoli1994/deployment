import React from 'react'
import styled from 'styled-components'
import { Bounce} from "react-awesome-reveal";
import { Fade } from 'react-awesome-reveal';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
align-self:flex-start;

@media (max-width: 80em){
  font-size: 2.5em;
} 

@media (max-width: 70em){
  font-size: 2em;
} 
@media (max-width: 48em){
  font-size: ${props => props.theme.fontl};
  margin: 1rem auto;
  align-self: center;
  text-align: center;
}
`
const Subtitle = styled.h1`
font-size: 2em;
text-trasform: capitalize;
width: 80%;
align-self:flex-start;
margin-top: 1em;

@media (max-width: 70em){
  font-size: 1em;

}
@media (max-width: 48em){
  align-self: center;
  text-align: center;
  margin: 1em auto;
 
}
`
const ButtonContainer = styled.div`
width: 100%;
margin-top: 1em;
@media (max-width: 48em){
  margin: 0;
  align-self: center;
  text-align: center;
} 
`


export const TypeWriterText = () => {
  return (
    <>
    
    <Title>
        
    Welcome to GameBoyz Color Club World
        
    </Title>
    



    <Subtitle>
        <Fade cascade damping={0.1} delay={1000}>
        Play, earn & have fun.
        </Fade>
    </Subtitle>

    <ButtonContainer>
    <Button text="Explore" link="#about" />
    </ButtonContainer>
    </>

  )
}

export default TypeWriterText
