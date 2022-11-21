import React from 'react'
import styled from 'styled-components'
import { Bounce} from "react-awesome-reveal";
import { Fade } from 'react-awesome-reveal';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
`
const ButtonContainer = styled.div`
width: 100%;
margin-top: 1rem;

`

export const TypeWriterText = () => {
  return (
    <>
    
    <Title>
        
        Scopri il mondo fantastico di GameBoyzColor
        
    </Title>
    



    <h1>
        <Fade cascade damping={0.1} delay={1000}>
        Play, earn & have fun.
        </Fade>
    </h1>

    <ButtonContainer>
    <Button text="Explore" link="#about" />
    </ButtonContainer>
    </>

  )
}

export default TypeWriterText
