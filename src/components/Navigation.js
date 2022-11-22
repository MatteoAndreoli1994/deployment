import React, { useState } from 'react'
import styled from "styled-components"
import Logo from "./Logo"
import { Link } from "react-router-dom";
import Button from "./Button"
import Twitter from "../assets/social-media-icons/twitter.png"
import Telegram from "../assets/social-media-icons/Telegram.png"

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;


`

const Navbar = styled.section`
display: flex;
justify-content: space-between;
align-items: center;

width: 90%;
height: ${props => props.theme.navHeight};

`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-item: center;
list-style: none;

@media (max-width: 64em){
  position:fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(2px);

  transform: ${props => props.click ? `translateY(0)` : `translateY(100%)`};
  transition: all 0.3s ease;
  align-items: center;
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  z-index:50;
  background-color: ${props => `rgba(${props.theme.bodyRgba2},0.9 )`};

  flex-direction: column;
  justify-content: center;
}
`
const MenuItem = styled.li`
margin:0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
@media (max-width: 64em){
  margin: 1rem 0;

  &::after{
     display: none;
  }
}
`
const Btn = styled.button`
display: inline-block;
background-color: #F1F5F3;
color: black;
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}
&::after{
    content:' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border:2px solid #F1F5F3;
    width: 100%;
    height: 100%;
    border-radius:50px;
    transition: all 0.2s ease;

}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 64em){
  transform: scale(0.75);
  }
`
const ResultConnection = styled.p`
display: inline-block;
padding: 0.9rem 2.3rem;
border-radius: 50px;
position: relative;
`
const MenuSocial = styled.div`
display:flex;
height: 100%;
width: 100%;
align-item: center;
margin: 0 auto;
background-color:blue;
&>*{
  padding-right: 0.5rem;
  transform: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
}
`

const HamburgerContainer = styled.div`
width: ${props => props.click ? '5rem' : '2rem'};;
height: 2rem;
position: absolute;
top: ${props => props.click ? '2rem' : '3rem' };
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
display: flex;
justify-content: center;
align-items:center;

cursor: pointer;
display: none;

@media (max-width: 64em){
  display:flex;
}
`

const HamburgerMenu = styled.span`

width: ${props => props.click ? '2rem' : '1.5rem' };
height: 2px;
background: black;
position: absolute;
transition: all 0.2s ease;
left: 50%;
transform: ${props => props.click ? '' : 'translateX(-50%) rotate(0)'};
display: flex;
justify-content: center;
align-items:center;

cursor: pointer;
display: none;

@media (max-width: 64em){
  display:flex;
}

&::after, &::before{
  content: ' ';
  width: ${props => props.click ? '1rem' : '1.5rem' };
  height: 2px;
  right: ${props => props.click ? '-2px' : '0rem' };
  background: black;
  position: absolute;
}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem' };
  transform: ${props => props.click ? ' rotate(-40deg)' : 'rotate(0)'};
}

&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem' };
  transform: ${props => props.click ? ' rotate(40deg)' : 'rotate(0)'};
}
`
 
const Navigation = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  const [click, setClick] = useState(false);

  const scrollTo = (id) =>{
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

    setClick(!click);
  }

  async function connectAccount(){
      if (window.ethereum){
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts", 
          });
          setAccounts(accounts);
      }
  }

  
  return (

    <Section>
      <Navbar>

      <Logo />
      <HamburgerContainer click={click} onClick={() => setClick(!click)}>
      
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          
        </HamburgerMenu>
      </HamburgerContainer>

        <Menu click={click}>
          <MenuItem onClick={()=> scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={()=> scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={()=> scrollTo('roadmap')}>RoadMap</MenuItem>
          <MenuItem onClick={()=> scrollTo('mint')}>Mint</MenuItem>
          <MenuItem onClick={()=> scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={()=> scrollTo('faq')}>Faq</MenuItem>
          

        </Menu>
        {isConnected ?(
                <ResultConnection>Connected</ResultConnection>
            ) : (
              <Btn onClick={connectAccount}>Connect Wallet</Btn>
            )}

      </Navbar>

    </Section>
      
  )
}

export default Navigation