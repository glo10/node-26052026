import { Schema, model } from "mongoose";

export default model(
  "Product",
  Schema({
    reference: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    categorie: { type: String },
  }),
);
