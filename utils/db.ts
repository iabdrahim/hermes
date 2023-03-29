import mongoose from "mongoose";

let uri = process.env.DATABASE_URL || "";
let db = mongoose.connect(uri, {});
export default db;
