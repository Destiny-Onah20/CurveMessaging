import app from "./app";
import mongoose from "mongoose";
import logger from "./helpers/logger";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const databaseURl = <string>process.env.DATA_URL;

mongoose.connect(databaseURl).then(() => {
  logger.info("Database connected success!")
}).then(() => [
  app.listen(port, () => {
    logger.info(`server running on port: ${port}`)
  })
]).catch((error) => {
  logger.error(error.message)
});