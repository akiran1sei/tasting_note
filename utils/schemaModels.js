//utils/schemaModels.js

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BeansSchema = new Schema({
  coffee: String,
  roast: String,
  roastMessage: String,
  aromaDry: String,
  aromaCrust: String,
  aromaBreak: String,
  aromaMessage: String,
  defects: String,
  defectsMessage: String,
  cleancap: String,
  cleancapMessage: String,
  sweet: String,
  sweetMessage: String,
  acidity: String,
  acidityMessage: String,
  acidityStrength: String,
  mouthfeel: String,
  mouthfeelMessage: String,
  bodyStrength: String,
  flavor: String,
  flavorMessage: String,
  after: String,
  afterMessage: String,
  balance: String,
  balanceMessage: String,
  overall: String,
  impression: String,
  result: String,
  total: String,
  email: String,
  name: String,
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// const EmailSchema = new Schema({
//   email: String,
// });
export const BeansModel =
  mongoose.models.Beans || mongoose.model("Beans", BeansSchema);
export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);
// export const EmailModel =
//   mongoose.models.Email || mongoose.model("Email", EmailSchema);
