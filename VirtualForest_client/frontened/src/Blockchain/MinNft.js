import React from 'react';
import { Client, TokenMintTransaction } from "@hashgraph/sdk";

import { HashConnect } from 'hashconnect';

const MintButton = () => {
  const hashconnect = new HashConnect();
   const nftMinterFunction = async () => {

    const hashconnectData = localStorage.getItem("hashconnectData")
    const pairingData = JSON.parse(hashconnectData)
    console.log(pairingData)
  
    const provider = hashconnect.getProvider('testnet',"eeca7dbd-18da-4ba9-a7a4-2ab956791caf","0.0.15031976")
    const signer = hashconnect.getSigner(provider);

    console.log(signer)
  
    const CID = ["ipfs://bafybeibluiptuzxbo2wk6pru3kysi5x4xk6qmgw62roqy4dgq2q7yzuqhq/Conzura%20Tree%20NFT.json"];
  
    const mintNft = await new TokenMintTransaction()
        .setTokenId("0.0.15026775") 
        .setMetadata([Buffer.from(CID[0])])
        .freezeWith(signer)
        
        const mintTxSign = await mintNft.sign("3030020100300706052b8104000a04220420b643c95d98ef43a68ac75b6e9e126ab5ff10047a61b3d04f1355047ac6912abf");
        const mintTxSubmit = await mintTxSign.executeWithSigner(signer);
        console.log(mintTxSubmit);
  }
  

  return (
    <button onClick={nftMinterFunction}>Mint NFT</button>
  );
};

export default MintButton;
