import { NextFunction, Request, Response } from "express";

function errorHandler(
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) {
    console.log('Error happened: ', err);
    if (err) {
        let status = 200;
        status = res.statusCode == 200 ? 500 : res.statusCode;
        const message = err?.message || "Something went wrong";
        res.status(status).json(message);
    } else next();
}

function healthCheck(_req: Request, res: Response) {
    res.status(200).send("OK");
}

function notFound(_req: Request, res: Response) {
    res.status(404).send("Not found");
}

export { errorHandler, healthCheck, notFound };
