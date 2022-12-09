import './App.css';
import { useState } from 'react';


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

import '@rainbow-me/rainbowkit/styles.css'; 
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  ledgerWallet
} from '@rainbow-me/rainbowkit/wallets';

const avalancheChain: Chain = {
  id: 97,
  name: 'Smart Chain - Testnet',
  network: 'Smart Chain - Testnet',
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://testnet.bscscan.com' },
    etherscan: { name: 'SnowTrace', url: 'https://testnet.bscscan.com' },
  },
  testnet: false,
};

const { provider, chains } = configureChains(
  [avalancheChain],
  [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      
    ],
  },
  {
    groupName: 'Others',
    wallets: [
      coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
      walletConnectWallet({ chains }),
      trustWallet({ chains}),
      ledgerWallet({ chains})
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
      <>
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>

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

      </RainbowKitProvider>
      </WagmiConfig>
      </>



);
}

export default App;
