import { Router } from "express";
import {
  getWalletHistory,
  healthCheck,
} from "../controllers";

const walletHistoryRouter = Router();

walletHistoryRouter.get("/", healthCheck);
walletHistoryRouter.post("/", getWalletHistory);

export default walletHistoryRouter;
