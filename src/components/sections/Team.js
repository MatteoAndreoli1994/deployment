import React from 'react'
import styled from 'styled-components'
import Woods from "../../assets/background/Woods.png"
import img1 from "../../assets/nfts/NoFlockin.jpg"
import img2 from "../../assets/nfts/Chri.jpg"
import drawn from "../../assets/elements/drawn.jpg"

const Section = styled.section`

width:100vw;
height:100vh;

background-color: #F7CACD;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
object-fit: cover;


background-position:center;


`
const Disegno= styled.div`
width: 70%;
padding-bottom: 70%;

background-size:100% 100%;
background-image: url(${drawn});
background-position:center;
position: absolute;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
color: black;
width: fit-content;
text-transform: capitalize;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
position: ansolute;
` 
const Container = styled.div`
width: 100vw;
height: 60vh;

position: absolute;


display: flex;
justify-content: center;
align-items: center;
margin-top: 20vh;

`
const Item =styled.div`
width: 10em;
height: 18em;
padding: 1em;
color: Black;
background-color: white;
margin: 1%;
position: relative;

border: 4px solid black;
border-radius: 20px;



@media (max-width: 25em){
  width: 6.67em;
  height: 12em;
  }
  @media (max-height: 30em){
    transform: scale(0.8);
    }
    @media (max-height: 25em){
      transform: scale(0.6);
      }

`
const ImageContainer =styled.div`
width:10em;

margin: 0 auto;
border: 3px solid Black;
border-radius: 20px;
cursor: pointer;
background-color: #1F1F1F;
display:flex;
&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

img{
  width: 100%;
  height: 100%;
  border-radius: 18px;
  transition: all 0.3s ease;
}
@media (max-width: 25em){
  width:6.7em;
  }


`
const Name = styled.h2`
font-size: ${props => props.theme.fontlg}
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: black;
margin-top: 1rem;
text-align: center;

@media (max-width: 30em){
  font-size: ${props => props.theme.fontmd}
  }

`
const Position = styled.h2`
font-size: ${props => props.theme.fontlg}
display: flex;
text-align: center;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: white;
margin-top: 1rem;
font-weight: 400;
color: ${props => `rgba(${props.theme.textRgba2},0.6)`};

@media (max-width: 30em){
  font-size: ${props => props.theme.fontmd};
  margin-top: 0.5rem;
  }

`

const MemberComponent = ({img, name="", position=""}) => {

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )

}

const Team = () => {
  return (
    <Section id="team" >
      
      
      
      
      <Container>

          <MemberComponent img={img1} name="Matteo" position="Code Developer"/>
          <MemberComponent img={img2} name="Velvetsofa" position="Code Developer"/>
          
      </Container>
      <Title> Team</Title>
    </Section>
  )
}

export default Team