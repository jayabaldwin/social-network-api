const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get one user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends");

      !user
        ? res.status(404).json({ message: "No user with that ID" })
        : res.json(user);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  // Post new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a user and associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({
        message: "User and associated thoughts successfully deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Add a new friend to a user
  async addFriend(req, res) {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;

      const user = await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: {
            friends: friendId,
          },
        },
        { new: true }
      );

      const friend = await User.findByIdAndUpdate(
        friendId,
        {
          $addToSet: {
            friends: userId,
          },
        },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID" });
      }

      res.json({ message: "Successfully added new friends!" });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  // Remove a friend
  async deleteFriend(req, res) {
    try {
      const friendId = req.params.friendId;
      console.log(friendId);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $pull: {
            friends: friendId,
          },
        },
        { new: true }
      );
      console.log(user);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
