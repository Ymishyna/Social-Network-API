// imports
const { Schema, Types } = require("mongoose");
const formatDate = require("../utils/format.js")

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => formatDate(date)
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

// exports
module.exports = reactionSchema;