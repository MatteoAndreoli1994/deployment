import { useState } from "react";
import { ethers, BigNumber} from 'ethers';
import GameBoyzColorClubTestFinal from './GameBoyzColorClubTestFinal.json';
import styled from "styled-components";
import SfondoMint from "./assets/background/sfondo_gradient.png"
import Gameboy from "./assets/elements/minter.png"
import GameboyMobile from "./assets/elements/minter_mobile.png"
import TastoA from "./assets/elements/tastoA.png"
import Sinistra from "./assets/elements/sinistra.png"
import Destra from "./assets/elements/destra.png"
import Cactus from "./assets/elements/CACTUS.png"
import Nuvola from "./assets/elements/nuvola.png"

const GameBoyzColorClubTestFinalAddress = "0x745ADC1a54F162A3d91c6BBD86B281CA6a8aFf2d"

const Section = styled.div`
height: 100vh;
width: 100vw;
background-color: red;
background-image: url(${SfondoMint});
object-fit: cover;
background-size: cover;
overflow: hidden;
flex-direction: column;

`
const Minting = styled.div`
width:100vw;
height:100vh;

overflow: hidden;
align-items: center;
justify-content: center;
display: flex;
position: absolute;




`
const BotContainer = styled.div`
width:100vw;
height:40vh;

display: flex;
position: absolute;


margin-top: 62vh;

@media (max-width: 60em){
    height:30vh;
    margin-top: 72vh;
  }
  @media (max-width: 40em){
    height:20vh;
    margin-top: 82vh;
  }
  @media (max-width: 30em){
    height:20vh;
    margin-top: 82vh;

  }
`
const TopContainer = styled.div`
width:100vw;
height:30vh;

display: flex;
position: absolute;
justify-content: center;


@media (max-width: 60em){
    height:27vh;
  }
  @media (max-width: 40em){
    height:25vh;
  }
  @media (max-width: 30em){
    height:20vh;
  }
`
const Cloud = styled.div`
width: 30vh;
padding-bottom: 30vh;

background-image: url(${Nuvola});
display: inline-flex;

background-size:100% 100%;

margin-left: 70%;

@media (max-width: 60em){
    width: 27vh;
    padding-bottom: 27vh;

  }
  @media (max-width: 40em){
    width: 25vh;
    padding-bottom: 25vh;

  }
  @media (max-width: 30em){
    width: 20vh;
    padding-bottom: 20vh;

  }
`

const CactusImage = styled.div`
width: 40vh;
padding-bottom: 40vh;

background-image: url(${Cactus});
display: inline-flex;

background-size:100% 100%;
margin-left: 7%;

@media (max-width: 60em){
    width: 30vh;
    padding-bottom: 30vh;

  }
  @media (max-width: 40em){
    width: 20vh;
    padding-bottom: 20vh;

  }
  @media (max-width: 30em){
    width: 20vh;
    padding-bottom: 20vh;

  }

`
const MinterContainer= styled.div`
width:50%;
padding-bottom:50%;

background-size:100% 100%;
background-image: url(${Gameboy});
background-position:center;

@media (max-width: 50em){
    width:130%;
    padding-bottom:130%;
    background-size: 130%;
    background-image: url(${GameboyMobile});
  }

`
const BtnA= styled.button`
width:2.5%;
padding-bottom:2.5%;
position: absolute;
margin-top: 24.4%;
margin-left: 20.3%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(1.8);
background-size:100% 100%;
background-image: url(${TastoA});
object-fit: cover;
background-size: cover;
&:active{
    transform: scale(1.5);
}
`

const BtnSinistra= styled.button`
width:2.5%;
padding-bottom:2.5%;
position: absolute;
margin-top: 24.4%;
margin-left: 12.3%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(1.8);
background-size:100% 100%;
background-image: url(${Sinistra});
object-fit: cover;
background-size: cover;
&:active{
    background-image: none;
    
}
`
const BtnDestra= styled.button`
width:2.5%;
padding-bottom:2.5%;
position: absolute;
margin-top: 24.1%;
margin-left: 15.03%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(1.8);
background-size:100% 100%;
background-image: url(${Destra});
object-fit: cover;
background-size: cover;
&:active{
    background-image: none;
    
}
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
`
const SubTextLight = styled.section`
font-size: ${props => props.theme.fontxs};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};;
font-weight: 400;
margin-top: 1em;
`
const SubTextContainer = styled.div`
width:8.5%;
padding-bottom:7%;
position: absolute;
display: inline-flex;
margin-bottom:20vh;
margin-top: 11.8%;
margin-left: 14%;
transform: rotate(-4deg);
justify-content: center;
text-align: center;
`

const SubText = styled.p`
font-size: ${props => props.theme.fonts};
font-weight: 400;
`
const Warn = styled.p`
font-size: ${props => props.theme.fontxs};
justify-content: center;
align-items: center;
text-align: center;
`
const MintAmount = styled.input`
background: none;
border: 0;
padding: 0;
margin: 0;
width: 1em;
margin: 1em;
`
const Display = styled.div`
justify-content: center;
align-items: center;
text-align: center;
align-items: center;
display: flex;
flex-direction: column;
input[type=number] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`


const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);



    

    async function handleMint(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                GameBoyzColorClubTestFinalAddress,
                GameBoyzColorClubTestFinal.abi,
                signer
            );
            try{
                const response = await contract.allowListMint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0).toString()),
                });
                console.log('response: ', response);
            } catch(err){
                console.log("errore: ", err)
            }
        }

    }
    const handleDecrement = () => {
        if(mintAmount <= 1 ) return;
        setMintAmount(mintAmount -1);
    };

    const handleIncrement = () => {
        if(mintAmount >= 3 ) return;
        setMintAmount(mintAmount + 1);
    };

    return (
    <Section id="mint">


        <Minting>
     
            <MinterContainer>
            <SubTextContainer> 
                <SubText>
                    
                    {isConnected ? (
                        <Display>
                                <SubTextLight>Press A to MINT</SubTextLight>
                                <MintAmount type="number" value={mintAmount}/>
                        </Display>
                    ) : (
                    <Warn> You Must be Connect to Mint</Warn>,
                    <SubTextLight>Collection of 2000 unique digital collectibles</SubTextLight>
                    )}
                </SubText>


            </SubTextContainer>
                <BtnA onClick={handleMint}></BtnA>
                

                <BtnSinistra onClick={handleDecrement}></BtnSinistra>
                <BtnDestra onClick={handleIncrement}></BtnDestra>
            </MinterContainer>


        </Minting>


        <BotContainer>
            <CactusImage></CactusImage>
        </BotContainer>
        <TopContainer>
            <Cloud></Cloud>
        </TopContainer>

    </Section>
    );


};
export default MainMint;
