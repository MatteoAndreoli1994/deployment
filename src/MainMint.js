import { useState } from "react";
import { ethers, BigNumber} from 'ethers';
import GameBoyzColorClubTestFinal from './GameBoyzColorClubTestFinal.json';
import styled from "styled-components";
import SfondoMint from "./assets/background/sfondo_gradient.png"
import Gameboy from "./assets/elements/minter.png"
import TastoA from "./assets/elements/tastoA.png"

const GameBoyzColorClubTestFinalAddress = "0x745ADC1a54F162A3d91c6BBD86B281CA6a8aFf2d"

const Section = styled.div`
min-height: 100vh;
width: 100vw;

background-image: url(${SfondoMint});
object-fit: cover;
background-size: cover;
overflow: hidden;
`
const Minting = styled.div`
width:100vw;
height:50vh;
margin-top: 25vh;

align-items: center;
justify-content: center;
display: flex;
position: relative;

`
const MinterContainer= styled.div`

width:40%;
padding-bottom:40%;

background-size:100% 100%;
background-image: url(${Gameboy});
object-fit: cover;
background-size: cover;

@media (max-width: 60em){
    width:70%;
    padding-bottom:70%;
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

@media (max-width: 60em){
    margin-top: 43.7%;
    margin-left: 36.4%;
    transform: scale(3.2);

    &:active{
        
        transform: scale(2.8);
    }

  }
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
`
const SubTextLight = styled.section`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};;
font-weight: 400;
`
const SubTextContainer = styled.div`

background-color:red;
margin-bottom:20vh;
justify-content: center;

text-align: center;
`

const SubText = styled.p`
font-size: ${props => props.theme.fonts};


font-weight: 400;

`
const Warn = styled.p`
font-size: ${props => props.theme.fonts};

justify-content: center;
align-items: center;
text-align: center;
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
                <BtnA></BtnA>
            </MinterContainer>


        </Minting>

    </Section>
    );


};
export default MainMint;