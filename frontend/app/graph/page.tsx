"use client"
import { SuiGraphQLClient } from '@mysten/sui/graphql';
import { graphql } from '@mysten/sui/graphql/schemas/latest';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from "react";

 
function App() {
    const MY_ADDRESS = '0x02008a954b21ac6e3f93456b94cc4abd1b2adc3c0540a749370a49dcc41a09d0';

    useEffect(() => {
        const fetchData = async () => {
            const gqlClient = new SuiGraphQLClient({
                url: 'https://sui-testnet.mystenlabs.com/graphql',
            });
             
            const chainIdentifierQuery = graphql(`
                query {
                    chainIdentifier
                }
            `);
             
            const identifier= async function getChainIdentifier() {
                const result = await gqlClient.query({
                    query: chainIdentifierQuery,
                });
             
                return result.data?.chainIdentifier;
            }
            console.log(await identifier());
            
             const getSuinsName = graphql(`
                query getSuiName($address: SuiAddress!) {
                    address(address: $address) {
                        defaultSuinsName
                    }
                }
            `);
            const defSuiname= async function getDefaultSuinsName(address: string) {
                const result = await gqlClient.query({
                    query: getSuinsName,
                    variables: {
                        address,
                    },
                });
             
                return result.data?.address?.defaultSuinsName;
            }
            console.log(await defSuiname(MY_ADDRESS));
            
        };

        fetchData();
    }, []);


    return (
        <div className="App">
            <header className="App-header">
               
            </header>

            
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