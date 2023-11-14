// Require Mongoose
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
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
    },
    id: false,
  }
);

// get total count of friends
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Thought model with thoughtSchema
const Thought = model("Thought", thoughtSchema);

// exports
module.exports = Thought;
