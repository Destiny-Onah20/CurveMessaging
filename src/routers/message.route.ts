import { Router } from "express";
import { allMessage, deleteAmessage, sendMessage, viewSingleMessage } from "../controllers/message.controller";
import authorizedAdmin from "../middlewares/authorization";


const messageRoute = Router();

messageRoute.route("/message").post(sendMessage);
messageRoute.route("/message/:messageId").get(authorizedAdmin, viewSingleMessage);
messageRoute.route("/message/:messageId").delete(authorizedAdmin, deleteAmessage);
messageRoute.route("/message").get(authorizedAdmin, allMessage);

export default messageRoute;