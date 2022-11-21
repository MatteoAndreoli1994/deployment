import { useState } from "react";
import { ethers, BigNumber} from 'ethers';
import GameBoyzColorClubTestFinal from './GameBoyzColorClubTestFinal.json';
import styled from "styled-components";
import SfondoMint from "./assets/background/sfondo-mint.png"
const GameBoyzColorClubTestFinalAddress = "0x745ADC1a54F162A3d91c6BBD86B281CA6a8aFf2d"

const Section = styled.div`
width:100vw;
min-height:100vh;
background-color: ${props => props.theme.body};
background-image: url(${SfondoMint});
object-fit: cover;
background-size: cover;
justify-content: center;
display: flex;
`
const Minting = styled.div`
width:70vw;
height:30vh;
flex-direction: column;
position: relative;
margin-top: 39vw;


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
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};


font-weight: 400;
justify-content: center;

text-align: center;
`
const Warn = styled.p`
font-size: ${props => props.theme.fontlg};

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
    <Section>
        <Minting>
            
            
            <SubText>
            <SubTextLight>Collection of 2000 unique digital collectibles</SubTextLight>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount}/>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <Warn> You Must be Connect to Mint</Warn>
            )}

            </SubText>
        </Minting>
    </Section>
    );


};
export default MainMint;