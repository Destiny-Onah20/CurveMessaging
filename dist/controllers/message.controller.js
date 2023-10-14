"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAmessage = exports.allMessage = exports.viewSingleMessage = exports.sendMessage = void 0;
const message_model_1 = __importDefault(require("../models/message.model"));
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message } = req.body;
        function timeFormatFunc() {
            const dateFormat = new Date();
            const hourFormat = dateFormat.getHours().toString().padStart(2, "0");
            const minsFormat = dateFormat.getMinutes().toString().padStart(2, "0");
            return `${hourFormat}:${minsFormat}`;
        }
        ;
        const messageData = {
            message,
            time: timeFormatFunc(),
            date: new Date().getFullYear()
        };
        yield message_model_1.default.create(messageData);
        res.status(201).json({
            message: "successfull sent!"
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: "Failed"
        });
    }
});
exports.sendMessage = sendMessage;
const viewSingleMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messageId = req.params.messageId;
        const theMessage = yield message_model_1.default.findById(messageId);
        if (!theMessage) {
            return res.status(404).json({
                message: "Message not found!"
            });
        }
        else {
            res.status(200).json({
                data: theMessage
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: "Failed"
        });
    }
});
exports.viewSingleMessage = viewSingleMessage;
const allMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield message_model_1.default.find();
        res.status(200).json({
            data: all
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: "Failed"
        });
    }
});
exports.allMessage = allMessage;
const deleteAmessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messageId = req.params.messageId;
        const theMessage = yield message_model_1.default.findByIdAndDelete(messageId);
        if (!theMessage) {
            return res.status(404).json({
                message: "Error occured!"
            });
        }
        else {
            return res.status(202).json({
                message: "Success!"
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: "Failed"
        });
    }
});
exports.deleteAmessage = deleteAmessage;
