const router = require("express").Router();
const {
  getThoughts,
  postThought,
  getSingleThought,
  updateThought,
  deleteThought,
  postReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// router.route("/").get(getThoughts).post(postThought);
// // For post: push thoughts Id to the associated users thoughts array field

// router
//   .route("/:thoughtId")
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

// router.route("/:thoughtId/reactions").post(postReaction).delete(deleteReaction);

module.exports = router;
