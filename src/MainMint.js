import { useState, useEffect } from "react";
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
import Sinistra_mobile from "./assets/elements/sinistra_mobile.png"
import Destra_mobile from "./assets/elements/destra_mobile.png"
import { useContractRead } from 'wagmi'

import {useAccount,  usePrepareContractWrite, useContractWrite } from 'wagmi';


const GameBoyzColorClubTestFinalAddress = "0xfB03f8cf7c8C3A59937D183eEc9f15d81C877a72"

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

display: -webkit-box;

display: -ms-flexbox;

display: flex;
position: absolute;
-webkit-justify-content: flex-end;
align-items: flex-end;
-webkit-align-items: flex-end;


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
display: flex;
background-image: url(${Nuvola});
display: inline-flex;

background-size:100% 100%;



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

@media (max-width: 30em){
    width:130%;
    padding-bottom:130%;
    background-size: 130%;
    background-image: url(${GameboyMobile});
  }

`
const BtnA= styled.button`
width:3.5%;
padding-bottom:3.5%;
position: absolute;
margin-top: 28.1%;
margin-left: 28%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(1.8);
background-size:100% 100%;
background-image: url(${TastoA});
object-fit: cover;
background-size: cover;
&:active{
    transform: scale(1.6);
}
@media (max-width: 30em){
  background-image: url(${TastoA});
  width:14%;
  padding-bottom:14%;
  margin-top: 82.55%;
  margin-left: 69.46%;
  }
`

const BtnSinistra= styled.button`
width:1.9%;
padding-bottom:1.9%;
position: absolute;
margin-top: 31.5%;
margin-left: 14.37%;
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
@media (max-width: 30em){
background-image: url(${Sinistra_mobile});
width:8%;
padding-bottom:8%;
margin-top: 91.5%;
margin-left: 13.95%;
}
`
const BtnDestra= styled.button`
width:1.7%;
padding-bottom:1.7%;
position: absolute;
margin-top: 30.9%;
margin-left: 18.09%;
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
@media (max-width: 30em){
  background-image: url(${Destra_mobile});
  width:7.5%;
  padding-bottom:7.5%;
  margin-top: 90.35%;
  margin-left: 29.46%;
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
width:10%;
height:14%;
position: absolute;
display: inline-flex;
margin-bottom:20vh;
margin-top: 13%;
margin-left: 17%;
transform: rotate(-4deg);
justify-content: center;
text-align: center;


@media (max-width: 30em){
  transform: rotate(0deg);
  width:42%;
  height:18.5%;
  margin-top: 23%;
  margin-left: 27.46%;

  }
`

const SubText = styled.p`
font-size: ${props => props.theme.fonts};
font-weight: 400;

@media (max-width: 60em){
  font-size: ${props => props.theme.fontxs};
  
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxxs};
}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontxl};
  margin-top: 2%;
}

@media (max-height: 20em){
  margin-top: 0%;
}
`
const Warn = styled.p`
font-size: ${props => props.theme.fonts};
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


const MainMint = () => {
    const [mintAmount, setMintAmount] = useState(1);
    const {isConnected} = useAccount();
    const [supplyData, setSupplyData] = useState(0);
    const [allowListData, setAllowListData] = useState(0);
    const { address } = useAccount();
    const [Wl, setWl] = useState(1);


      const { data: totalSupplyData} = useContractRead({
        address: '0xfB03f8cf7c8C3A59937D183eEc9f15d81C877a72',
        abi: GameBoyzColorClubTestFinal.abi,
        functionName: "totalSupply",
        watch: true,
      });

      useEffect(() => {
        if (totalSupplyData) {
          let temp = totalSupplyData / (1);
          setSupplyData(temp);
        }
      }, [totalSupplyData]);

      

      const { data: allowListMintCounterData} = useContractRead({
        address: '0xfB03f8cf7c8C3A59937D183eEc9f15d81C877a72',
        abi: GameBoyzColorClubTestFinal.abi,
        functionName: "allowListMintCounter",
        watch: true,
        args: [address],
      });

      useEffect(() => {
        if (allowListMintCounterData) {
          let temp2 = allowListMintCounterData / (1);
          setAllowListData(temp2);
        }
      }, [allowListMintCounterData]);



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
        if(mintAmount >= allowListData ) return;
        setMintAmount(mintAmount + 1);
    };



    return (
    <Section id="mint">


        <BotContainer>
            <CactusImage></CactusImage>
        </BotContainer>
        <Minting>
            <MinterContainer>
            <SubTextContainer> 

                <SubText>
                {isConnected && allowListData? (
                  
                        <Display>
                                <SubTextLight>How many?</SubTextLight>
                                <MintAmount type="number" value={mintAmount}/>
                        </Display>
                      
                    ) : isConnected? (
                    <>
                      <Warn> You have no Whitelist available! </Warn>
                    </>
                    ):
                    (<SubTextLight>You Must be Connect to Mint</SubTextLight>)
                    
                    }

                </SubText>
                
            </SubTextContainer>
                <BtnA onClick={handleMint}></BtnA>
                

                <BtnSinistra onClick={handleDecrement}></BtnSinistra>
                <BtnDestra onClick={handleIncrement}></BtnDestra>
            </MinterContainer>
                

        </Minting>



        <TopContainer>
            <Cloud>
     
            </Cloud>



        </TopContainer>

    </Section>
    );


};
export default MainMint;
