"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
const express_1 = __importDefault(require("express"));
async function gracefulShutdown() {
    try {
        process.exit(0);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
let app = (0, express_1.default)();
app = (0, middlewares_1.default)(app);
app.use(routes_1.default);
app.listen(process.env.PORT || 5000, async () => {
    try {
        console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    }
    catch (error) {
        await gracefulShutdown();
    }
});
exports.default = app;
