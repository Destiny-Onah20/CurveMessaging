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
exports.authorizedAdmin = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authorizedAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { passcode } = req.body;
        const theCode = process.env.PASSCODE;
        if (passcode !== parseInt(theCode)) {
            res.status(409).json({
                message: "You not authorized to perform this task!"
            });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: "Failed"
        });
    }
});
exports.authorizedAdmin = authorizedAdmin;
exports.default = exports.authorizedAdmin;
