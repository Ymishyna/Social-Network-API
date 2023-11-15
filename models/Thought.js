// require Mongoose
const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");
const formatDate = require("../utils/format.js")

// Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => formatDate(date)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// creating a virtual property `reactionCount` that gets # of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Thought model with thoughtSchema
const Thought = model("thought", thoughtSchema);

// exports
module.exports = Thought;
