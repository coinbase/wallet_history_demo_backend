"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
exports.healthCheck = healthCheck;
exports.notFound = notFound;
function errorHandler(err, _req, res, next) {
    console.log('Error happened: ', err);
    if (err) {
        let status = 200;
        status = res.statusCode == 200 ? 500 : res.statusCode;
        const message = err?.message || "Something went wrong";
        res.status(status).json(message);
    }
    else
        next();
}
function healthCheck(_req, res) {
    res.status(200).send("OK");
}
function notFound(_req, res) {
    res.status(404).send("Not found");
}
