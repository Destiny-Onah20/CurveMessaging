import mongoose from "mongoose";
import { Document, Schema, model } from "mongoose";

interface messageInterface extends Document {
  message: string;
  time: string;
  date: number
}

const messageSchema = new Schema({

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


const Message = model<messageInterface>("messages", messageSchema);

export default Message;