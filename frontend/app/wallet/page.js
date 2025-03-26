"use client"
import '@mysten/dapp-kit/dist/index.css';

import { SuiClientProvider, WalletProvider,  } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {  SuiClient } from '@mysten/sui/client';
import {  Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';


// Now you can use this keypair for signing transactions


const queryClient = new QueryClient();
const networks = {
	devnet: { url: getFullnodeUrl('devnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
};

import Image from "next/image";
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';

import { Transaction } from '@mysten/sui/transactions';
 



function App() {
	const MY_ADDRESS = '0x02008a954b21ac6e3f93456b94cc4abd1b2adc3c0540a749370a49dcc41a09d0';
	const tx = new Transaction();
	// create a new coin with balance 100, based on the coins used as gas payment
	// you can define any balance here
	const [coin] = tx.splitCoins(tx.gas, [100]);
	// use getFullnodeUrl to define Devnet RPC location
	const rpcUrl = getFullnodeUrl('devnet');
	
	// create a client connected to devnet
	const client = new SuiClient({ url: rpcUrl });
	

	async function transfer() {

 
		// add transaction data to tx...
		 
		const tx = new Transaction();
		// add transaction data to tx
		const privateBase64Key = "YOUR_PRIVATE_KEY_IN_BASE64"; // Replace this with your actual private key

		const keypair =Ed25519Keypair.fromSecretKey(privateBase64Key);

		const result = await client.signAndExecuteTransaction({
			transaction: tx,
			signer: keypair,
			requestType: 'WaitForLocalExecution',
			options: {
				showEffects: true,
			},
		});
	}

	
	// transfer the split coin to a specific address
	tx.transferObjects([coin], MY_ADDRESS);
	return (
		<div className="App">
			<header className="App-header">
				<ConnectButton />
			</header>

			<ConnectedAccount />
		</div>
	);
}

import { useEffect, useState } from "react";



function ConnectedAccount() {
    const account = useCurrentAccount();
    const [transactionResult, setTransactionResult] = useState(null);

    useEffect(() => {
        if (account) {
            sendTransaction();
        }
    }, [account]);

    async function sendTransaction() {
        try {
            const rpcUrl = "https://fullnode.devnet.sui.io"; // Devnet URL
            const client = new SuiClient({ url: rpcUrl });

            const tx = new Transaction();
            // Add your transaction logic here
            //Example: 
            tx.transferSui({ to: "0x3eb5225be65bce1b4db5df7ed209394084b86b5da61f71847592037fbfb082d4", amount: 1000000 });



            const result = await client.signAndExecuteTransaction ({
                signer: account, // Ensure you have a valid signer
                transactionBlock: tx,
                requestType: "WaitForLocalExecution",
                options: { showEffects: true },
            });

            setTransactionResult(result);
            console.log("Transaction result:", result);
        } catch (error) {
            console.error("Transaction failed:", error);
        }
    }

    if (!account) {
        return <div>Not connected</div>;
    }

    return (
        <div>
            <p>Connected to {account.address}</p>
            {transactionResult && <pre>{JSON.stringify(transactionResult, null, 2)}</pre>}
        </div>
    );
}





export default function Home() {

    const queryClient = new QueryClient();
    const networks = {
        devnet: { url: getFullnodeUrl('devnet') },
        mainnet: { url: getFullnodeUrl('mainnet') },

    };

    return (
		<QueryClientProvider client={queryClient}>
			<SuiClientProvider networks={networks} defaultNetwork="devnet">
				<WalletProvider>
					<App />
				</WalletProvider>
			</SuiClientProvider>
		</QueryClientProvider>
    );
}

function useSuiClientQuery(arg0){
    throw new Error('Function not implemented.');
}

