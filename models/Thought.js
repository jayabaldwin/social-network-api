const { Schema, model } = require("mongoose");
const moment = require("moment");

// Reactions subdocument
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        const formattedDate = moment(date).format("MMMM Do YYYY, h:mm a");
        return formattedDate;
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Thoughts schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 128,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        const formattedDate = moment(date).format("MMMM Do YYYY, h:mm a");
        return formattedDate;
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
