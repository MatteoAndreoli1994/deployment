import React from 'react'
import styled from "styled-components"
import Logo from "./Logo"
import { Link } from "react-router-dom";
import Button from "./Button"
import Twitter from "../assets/social-media-icons/twitter.png"
import Telegram from "../assets/social-media-icons/Telegram.png"

const Section = styled.section`
width: 100vw;
background-color: #3EA39E;
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
display:flex;
justify-content: space-between;
align-item: center;
list-style:none;
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

const Navigation = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

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
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>RoadMap</MenuItem>
          <MenuItem>Mint</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
          

        </Menu>
        {isConnected ?(
                <p>Connected</p>
            ) : (
              <Btn onClick={connectAccount}>
              Connect Wallet
              </Btn>
            )}

      </Navbar>

    </Section>
      
  )
}

export default Navigation