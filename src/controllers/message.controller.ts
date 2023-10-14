import Message from "../models/message.model";
import { RequestHandler } from "express";


export const sendMessage: RequestHandler = async (req, res) => {
  try {
    const { message } = req.body;

    function timeFormatFunc(): string {
      const dateFormat = new Date();
      const hourFormat = dateFormat.getHours().toString().padStart(2, "0");
      const minsFormat = dateFormat.getMinutes().toString().padStart(2, "0");

      return `${hourFormat}:${minsFormat}`;
    };

    type messageType = {
      message: string;
      time: string;
      date: number
    };
    const messageData: messageType = {
      message,
      time: timeFormatFunc(),
      date: new Date().getFullYear()
    }
    await Message.create(messageData);
    res.status(201).json({
      message: "successfull sent!"
    })

  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: "Failed"
    })
  }
}


export const viewSingleMessage: RequestHandler = async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const theMessage = await Message.findById(messageId);

    if (!theMessage) {
      return res.status(404).json({
        message: "Message not found!"
      })
    } else {
      res.status(200).json({
        data: theMessage
      })
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: "Failed"
    })
  }
};

export const allMessage: RequestHandler = async (req, res) => {
  try {
    const all = await Message.find();
    res.status(200).json({
      data: all
    })
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: "Failed"
    })
  }
}


export const deleteAmessage: RequestHandler = async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const theMessage = await Message.findByIdAndDelete(messageId);

    if (!theMessage) {
      return res.status(404).json({
        message: "Error occured!"
      })
    } else {
      return res.status(202).json({
        message: "Success!"
      })
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: "Failed"
    })
  }
}