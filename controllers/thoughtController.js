const { Thought, User } = require("../models");

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get one thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      !thought
        ? res.status(404).json({ message: "No thought with that ID" })
        : res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Post new thought
  async postThought(req, res) {
    try {
      const { username } = req.body;

      // Check if the user exists
      const user = await User.findOne({ username: username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Create the thought
      const thought = await Thought.create(req.body);

      // Update the user's thoughts array with the newly created thought
      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const { thoughtText } = req.body;

      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { thoughtText: thoughtText } },
        { new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a thought and associated reactions
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      // ONCE REACTIONS ARE SET UP

      // await Thought.deleteMany({ _id: { $in: thought.reactions } });
      res.json({
        message: "Thoughts and associated reactions successfully deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
