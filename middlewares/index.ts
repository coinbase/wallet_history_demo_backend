import cors from "cors";
import * as express from "express";
import { Express } from "express";

function middlewares(server: Express): Express {
    console.log('process.env.FRONTEND_ALLOWED_DOMAIN', process.env.FRONTEND_ALLOWED_DOMAIN);
    const corsOptions = {
        origin: process.env.FRONTEND_ALLOWED_DOMAIN,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        maxAge: 84600
    }
    server.use(cors(corsOptions));
    server.use(express.json());

    return server;
}

export default middlewares;
