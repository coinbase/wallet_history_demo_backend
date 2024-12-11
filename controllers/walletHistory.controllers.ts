import { NextFunction, Request, Response } from "express";
import { Address, Coinbase } from "@coinbase/coinbase-sdk";

export async function getWalletHistory(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    const { limit, network, walletAddress } = req.body;
    if (!limit || !network || !walletAddress) {
        return res.status(400).send('Missing required params.')
    }

    try {
        if (!process.env.SDK_API_KEY_NAME || !process.env.SDK_API_KEY_PRIVATE_KEY) {
            console.error('ERROR! KEYS NOT FOUND ON ENV!');
            return res.status(500)
        } else {
            console.log('Configuring SDK keys:');
            console.log('SDK_API_KEY_NAME', process.env.SDK_API_KEY_NAME);
            console.log('SDK_API_KEY_PRIVATE_KEY', process.env.SDK_API_KEY_PRIVATE_KEY);

            Coinbase.configure({
                apiKeyName: process.env.SDK_API_KEY_NAME, 
                privateKey: process.env.SDK_API_KEY_PRIVATE_KEY,
            });
        }

        const add = new Address(network, walletAddress);
        let transactions = (await add.listTransactions({ limit })).data;
        console.log('transactions received:', transactions.length);


        return res.status(200).json(JSON.parse(JSON.stringify(transactions)));
    } catch (error) {
        next(error);
    }
}
