import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";
import { sendEmail } from "../../utils/email";
let Letter = require("../../models/Letter");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await db;
    let d = new Date();

    if (req.method == "GET") {
      let letters = await Letter.find({
        toDate: `${d.getFullYear()}/${d.getMonth()}/${d.getDay()}`,
        isSend: false,
      });
      letters.map((l: any) => {
        try {
          sendEmail({ to: l.toEmail, subject: l.subject, html: l.content });
        } catch (err) {
          return res.status(500).json({ error: err });
        }
        let ltr = Letter.findOne({ _id: l._id });
        Letter.updateOne(
          { _id: l._id },
          {
            $set: { isSend: true },
          }
        );
      });
      console.log("Done");
      return res.status(200).json({ msg: "mails are sending", data: letters });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
