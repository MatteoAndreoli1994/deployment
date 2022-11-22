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


const Logo = () => {
  return (
    <LogoText>
        
            <Link to="/">
                
                <img style={{ width: 220, height: 100 }} src={Marchio} alt=""/>
            </Link>
        

    </LogoText>
  )
}




export default Logo