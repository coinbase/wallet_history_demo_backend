"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const walletHistory_routes_1 = __importDefault(require("./walletHistory.routes"));
const router = (0, express_1.Router)();
router.get("/", controllers_1.healthCheck);
router.use("/wallet-history", walletHistory_routes_1.default);
router.all("*", controllers_1.notFound);
router.use(controllers_1.errorHandler);
exports.default = router;
