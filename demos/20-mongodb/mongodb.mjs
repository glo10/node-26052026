import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_DB_DOCKER);

try {
  const res = await client.connect();
  /**
   * CRUD
   * Create : insertion
   * Read: lecture
   * Update : modification
   * Delete : suppression
   */
  // Seléction de la base de données
  const db = client.db("test");
  // Créer des collections (en SQL = les tables)
  const usersCollection = db.collection("users");
  // Insertion d'un user
  await usersCollection.insertOne({
    firstname: "Glodie",
    lastname: "Tshimini",
  });
  // Insertion de plusieurs users
  await usersCollection.insertMany([
    { firstname: "Glodie", lastname: "Tshimini" }, // insertion d'un document
    {
      firstname: "Alice",
      lastname: "Bob",
      age: 25,
      address: { postal_code: 75016 },
    },
    { firstname: "Bob", lastname: "Bob", isMajor: false },
  ]);
  // Lecture d'un seul user selon un critère (propriété et valeur)
  await usersCollection
    .findOne({ firstname: "Glodie" })
    .then((data) => {
      console.log("findOne", data);
    })
    .catch((error) => console.error("error", error));
  // Lecture de plusieurs selon un critère (propriété et valeur)
  await usersCollection
    .find({ firstname: "Bob" }).toArray()
    .then((data) => {
      console.log("findMany", data);
    })
    .catch((error) => console.error("error", error));
  // Lecture de tous les documents de la collection
  await usersCollection
    .find().toArray()
    .then((data) => {
      console.log("find", data);
    })
    .catch((error) => console.error("error", error));
  // Modification
  // Suppression
} catch (error) {
  console.error("error connect to MongoDB", error);
}
