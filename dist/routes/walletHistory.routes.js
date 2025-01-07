"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const walletHistoryRouter = (0, express_1.Router)();
walletHistoryRouter.get("/", controllers_1.healthCheck);
walletHistoryRouter.post("/", controllers_1.getWalletHistory);
exports.default = walletHistoryRouter;
