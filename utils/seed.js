const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { user, thought } = require("./data");

// Start the seeding runtime timer
console.time("seeding");

// Creates a connection to MongoDB
connection.once("open", async () => {
  try {
    // Delete the collections if they exist
    await Thought.deleteMany({});
    await User.deleteMany({});

    // Insert thoughts into the thought collection
    await Thought.insertMany(thought);

    // Fetch the inserted thoughts from the database to get their generated ids
    const insertedThoughts = await Thought.find({});

    // Iterate through each user
    for (const userData of user) {
      // Find thoughts corresponding to the user's username
      const thoughtsForUser = insertedThoughts.filter(
        (t) => t.username === userData.username
      );
      const thoughtIds = thoughtsForUser.map((t) => t._id);

      // const friendsForUser

      // Update the user document with the thought ids
      await User.create({
        username: userData.username,
        email: userData.email,
        thoughts: thoughtIds,
        // friends:
      });

      // Fetch user ids to allocate friends
      // const userIds = await User.find({});
      // const friends = userIds.filter((u) => u._id);

      // console.log(friends);
    }

    console.table(thought);
    console.table(user);

    console.info("Seeding complete! 🌱");
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
});
