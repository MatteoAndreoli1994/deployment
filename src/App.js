import './App.css';
import { useState } from 'react';
import NavBar from "./NavBar";

import MainMint from "./MainMint";
import { ThemeProvider} from 'styled-components'
import GlobalStyles from "./styles/GlobalStyles"
import {light} from "./styles/Themes"
import {dark} from "./styles/Themes"

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
      <>
      <GlobalStyles />
      <Router>
        <ThemeProvider theme={light}>
          <Navigation accounts= {accounts} setAccounts={setAccounts}/>
          <Home />
          <About />
          <Roadmap />
          <MainMint accounts= {accounts} setAccounts={setAccounts} />
          <Team />
          <Faq />
          <Footer />                    


        </ThemeProvider>
      </Router>
      </>



);
}

export default App;
