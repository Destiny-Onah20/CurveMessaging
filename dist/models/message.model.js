"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    message: {
        type: String,
        require: [true, "A message must be inputed!"]
    },
    time: {
        type: String,
    },
    date: {
        type: Number
    }
}, {
    timestamps: true
});
const Message = (0, mongoose_1.model)("messages", messageSchema);
exports.default = Message;
