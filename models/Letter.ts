import mongoose from "mongoose";
let { models, model, Schema } = mongoose;
let d = new Date();
let letterSchema = new Schema(
  {
    content: String,
    toEmail: String,
    subject: String,
    isPrivate: { type: Boolean, defaul: true },
    toDate: {
      type: String,
      default: `${d.getFullYear()}/${d.getMonth()}/${d.getDay()}`,
    },
    day: { type: String, default: d.getDay() },
    month: { type: String, default: d.getMonth() },
    year: { type: String, default: d.getFullYear() },
    isSend: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
// delete models.Letter;

let Letter = models.Letter || model("Letter", letterSchema);
module.exports = Letter;
