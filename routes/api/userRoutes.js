const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// router.route("/").get(getUsers).post(createUser);

// router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
// // For get single: include populated thought and friend data
// // Bonus: remove users associated thoughts

// router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
