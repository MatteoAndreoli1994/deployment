import React from "react";

const NavBar = ({ accounts, setAccounts })=> {
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
        <div>
            {/* Left side*/}
            <div>Twitter</div>
            <div>Email</div> 
            {/* Right side*/}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>
            {/*Connect button*/}
            {isConnected ?(
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}                
        </div>
    );

};
export default NavBar;