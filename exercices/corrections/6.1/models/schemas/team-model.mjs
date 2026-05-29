import { Schema, model } from "mongoose";
//@see vous pouvez mettre en place des middlewares https://mongoosejs.com/docs/middleware.html
const teamModel = Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
});
export default model("Team", teamModel);
