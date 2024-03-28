const { Thought } = require("../models");

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
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    console.log(req.body);

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { thoughtText: req.body } },
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
  //   async deleteThought(req, res) {
  //     try {
  //       const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

  //       if (!thought) {
  //         return res.status(404).json({ message: "No thought with this id!" });
  //       }

  //       await Thought.deleteMany({ username: username });
  //       return {
  //         success: true,
  //         message: "User and associated thoughts deleted successfully",
  //       };
  //     } catch (err) {
  //       console.log(err);
  //       res.status(500).json(err);
  //     }
  //   },
};
