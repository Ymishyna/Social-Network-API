// require Mongoose
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

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
      default: Date.now
    },
    username: {
      type: String,
      required: true
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

// creating a virtual property `reactionCount` that gets # of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Thought model with thoughtSchema
const Thought = model("Thought", thoughtSchema);

// exports
module.exports = Thought;
