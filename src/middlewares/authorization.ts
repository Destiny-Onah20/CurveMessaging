import { RequestHandler } from "express";
import dotenv from "dotenv";
dotenv.config()


export const authorizedAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { passcode } = req.body;
    const theCode = <string>process.env.PASSCODE
    if (passcode !== parseInt(theCode)) {
      res.status(409).json({
        message: "You not authorized to perform this task!"
      })
    } else {
      next()
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: "Failed"
    })
  }
};

export default authorizedAdmin;