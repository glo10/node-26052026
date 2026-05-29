import { mongoose } from "mongoose";
import ProductModel from "./models/productModel.mjs";
// Connection
mongoose
  .connect(process.env.MONGO_DB_DOCKER)
  .then((res) => {
    switch (mongoose.connection.readyState) {
      case 1:
        console.info("connection OK");
        // Insertion en créant une nouvelle instance du modèle
        const p1 = new ProductModel({
          reference: "ref1",
          description: "description1",
        });
        p1.save()
          .then((res) => console.log("création", res))
          .catch((error) => console.error("error insert", error));
        // Plusieurs insertion avec l'utilisation direct du model
        ProductModel.insertMany([
          { reference: "ref2", description: "description2" },
          { reference: "ref3", description: "description3" },
        ]).then((res) => console.log("création plusieurs", res))
          .catch((error) => console.error("error plusieurs", error));

        // Lecture
        ProductModel.find()
        .then((data) => console.log("lecture plusieurs", data))
        .catch((error) => console.error("error lecture plusieurs", error));
        break;
      case 0:
        console.log("deconnecté");
        break;
      default:
        console.log("en cours");
        break;
    }
  })
  .catch((error) => console.error("error connection", error));
