"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./helpers/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
const databaseURl = process.env.DATA_URL;
mongoose_1.default.connect(databaseURl).then(() => {
    logger_1.default.info("Database connected success!");
}).then(() => [
    app_1.default.listen(port, () => {
        logger_1.default.info(`server running on port: ${port}`);
    })
]).catch((error) => {
    logger_1.default.error(error.message);
});
