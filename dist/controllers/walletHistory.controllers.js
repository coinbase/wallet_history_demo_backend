"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWalletHistory = getWalletHistory;
const coinbase_sdk_1 = require("@coinbase/coinbase-sdk");
async function getWalletHistory(req, res, next) {
    console.log(req.body);
    const { limit, network, walletAddress } = req.body;
    if (!limit || !network || !walletAddress) {
        return res.status(400).send('Missing required params.');
    }
    try {
        if (!process.env.SDK_API_KEY_NAME || !process.env.SDK_API_KEY_PRIVATE_KEY) {
            console.error('ERROR! KEYS NOT FOUND ON ENV!');
            return res.status(500);
        }
        else {
            console.log('Configuring SDK keys:');
            console.log('SDK_API_KEY_NAME', process.env.SDK_API_KEY_NAME);
            console.log('SDK_API_KEY_PRIVATE_KEY', process.env.SDK_API_KEY_PRIVATE_KEY);
            coinbase_sdk_1.Coinbase.configure({
                apiKeyName: process.env.SDK_API_KEY_NAME,
                privateKey: process.env.SDK_API_KEY_PRIVATE_KEY,
            });
        }
        const add = new coinbase_sdk_1.Address(network, walletAddress);
        let transactions = (await add.listTransactions({ limit })).data;
        console.log('transactions received:', transactions.length);
        return res.status(200).json(JSON.parse(JSON.stringify(transactions)));
    }
    catch (error) {
        next(error);
    }
}
