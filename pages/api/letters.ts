import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";
let Letter = require("../../models/Letter");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await db;
    if (req.method == "GET") {
      let letters = await Letter.find({});
      return res.status(200).json({ data: letters });
    } else if (req.method == "GET" && req.query.all == "") {
      let letters = await Letter.find({});
      return res.status(200).json({ data: letters });
    } else if (req.method == "POST") {
      let data = req.body;
      let addOne = new Letter({
        content: data.letter,
        toEmail: data.email,
        toDate: data.toDate,
        subject: data.title,
      });
      let ltr = await addOne.save();
      return res.status(200).json({ data: "the data is added", letter: ltr });
    } else if (req.method == "DELETE") {
      let id = req.body.id;

      let ltr = await Letter.deleteOne({ _id: id });
      return res.status(200).json({ data: "the data is deleted", letter: ltr });
    }
    return res.status(200).json({ data: "no method supported" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
