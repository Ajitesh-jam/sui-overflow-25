"use client";

import { useCurrentAccount, useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { TransactionBlock } from "@mysten/sui.js";
import { useState } from "react";

const PACKAGE_ID = "0x877174564961fcdb7300d2c2bb1e227e43d3f5dbb420bba53afacd7744588fd8";
const MODULE_NAME = "house_data";
const FUNCTION_NAME = "claim_fees";
const HOUSE_DATA_OBJECT_ID = "0x63a1c1af213cf922c191b231578a515d832ba8963ab87b590d099c7a4c3af175";
const GAS_BUDGET = 100000000;

export default function ClaimFeesButton() {
    const account = useCurrentAccount();
    const signAndExecuteTransaction = useSignAndExecuteTransaction();
    const [transactionResult, setTransactionResult] = useState(null);

    async function claimFees() {
        if (!account) {
            alert("Please connect your wallet first.");
            return;
        }

        try {
            const tx = new TransactionBlock();
            tx.moveCall({
                target: `${PACKAGE_ID}::${MODULE_NAME}::${FUNCTION_NAME}`,
                arguments: [tx.object(HOUSE_DATA_OBJECT_ID)],
            });

            const result = await signAndExecuteTransaction({
                transactionBlock: tx,
                options: { showEffects: true },
            });

            setTransactionResult(result);
            console.log("Transaction Result:", result);
            alert("Transaction successful!");
        } catch (error) {
            console.error("Transaction failed:", error);
            alert("Transaction failed. Check console for details.");
        }
    }

    return (
        <div>
            <button onClick={claimFees} className="bg-blue-500 text-white px-4 py-2 rounded">
                Claim Fees
            </button>
            {transactionResult && <pre>{JSON.stringify(transactionResult, null, 2)}</pre>}
        </div>
    );
}
