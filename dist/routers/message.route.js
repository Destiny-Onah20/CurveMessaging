"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../controllers/message.controller");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const messageRoute = (0, express_1.Router)();
messageRoute.route("/message").post(message_controller_1.sendMessage);
messageRoute.route("/message/:messageId").get(authorization_1.default, message_controller_1.viewSingleMessage);
messageRoute.route("/message/:messageId").delete(authorization_1.default, message_controller_1.deleteAmessage);
messageRoute.route("/message").get(authorization_1.default, message_controller_1.allMessage);
exports.default = messageRoute;
