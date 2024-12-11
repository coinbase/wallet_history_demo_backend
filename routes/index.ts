import { Router } from "express";
import { errorHandler, healthCheck, notFound } from "../controllers";
import walletHistoryRouter from "./walletHistory.routes";

const router = Router();

router.get("/", healthCheck);

router.use("/wallet-history", walletHistoryRouter);

router.all("*", notFound);

router.use(errorHandler);

export default router;
