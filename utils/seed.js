const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { user, thought } = require("./data");

// Start the seeding runtime timer
console.time("seeding");

// Creates a connection to mongodb
connection.once("open", async () => {
  // Delete the collections if they exist
  let thoughtCheck = await connection.db
    .listCollections({ name: "thought" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thought");
  }

  let userCheck = await connection.db
    .listCollections({ name: "user" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("user");
  }

  // Wait for the users to be inserted into the database
  await Thought.collection.insertMany(thought);
  await User.collection.insertMany(user);

  console.table(thought);
  console.table(user);

  console.timeEnd("seeding complete 🌱");
  process.exit(0);
});
