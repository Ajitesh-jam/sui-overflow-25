"use client"

import Image from "next/image";

import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { getFaucetHost, requestSuiFromFaucetV1 } from '@mysten/sui/faucet';
import { MIST_PER_SUI } from '@mysten/sui/utils';
import { useEffect } from "react";
 

export default function Home() {


  // replace <YOUR_SUI_ADDRESS> with your actual address, which is in the form 0x123...
  const MY_ADDRESS = '0x02008a954b21ac6e3f93456b94cc4abd1b2adc3c0540a749370a49dcc41a09d0';
  
  // create a new SuiClient object pointing to the network you want to use
  const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });

  useEffect(() => {
    const fetchData = async () => {

    //   // Convert MIST to Sui
    // interface Balance {
    //   totalBalance: string;
    // }

    // const balance = (balance: Balance): number => {
    //   return Number.parseInt(balance.totalBalance) / Number(MIST_PER_SUI);
    // };
    
    // // store the JSON representation for the SUI the address owns before using faucet
    // const suiBefore = await suiClient.getBalance({
    //   owner: MY_ADDRESS,
    // });
    
    // await requestSuiFromFaucetV1({
    //   // use getFaucetHost to make sure you're using correct faucet address
    //   // you can also just use the address (see Sui TypeScript SDK Quick Start for values)
    //   host: getFaucetHost('testnet'),
    //   recipient: MY_ADDRESS,
    // });
    
    // // store the JSON representation for the SUI the address owns after using faucet
    // const suiAfter = await suiClient.getBalance({
    //   owner: MY_ADDRESS,
    // });

    // // Output result to console.
    // console.log(
    //   `Balance before faucet: ${balance(suiBefore)} SUI. Balance after: ${balance(
    //     suiAfter,
    //   )} SUI. Hello, SUI!`,
    // );


 
    // // use getFullnodeUrl to define Devnet RPC location
    // const rpcUrl = getFullnodeUrl('devnet');
    
    // // create a client connected to devnet
    // const client = new SuiClient({ url: rpcUrl });
    
    // // get coins owned by an address
    // // replace <OWNER_ADDRESS> with actual address in the form of 0x123...
    // const coins = await client.getCoins({
    //   owner: MY_ADDRESS,
    // });
    // console.log("Coins owned by", MY_ADDRESS, ":", coins);




 

    };




    fetchData();
  }, []);




  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

