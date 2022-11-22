import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import Marchio from './Images/Marchio.png';

const Home = () => {
    return <h2>Home</h2>;
  };

const LogoText = styled.h2`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
display: flex;
margin-left: 0%;
margin-top: 1.5%;

&:hover{
    transform: scale(1.1);
}
`
const ImmagineLogo = styled.img`
width: 220px;
height: 100px;


@media (max-width: 64em){
  width: 146px;
  height: 66px;
  }
`

const Logo = () => {
  return (
    <LogoText>
        
            <Link to="/">
                
                <ImmagineLogo src={Marchio} alt=""/>
            </Link>
        

    </LogoText>
  )
}




export default Logo