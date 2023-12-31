const { User, Thought } = require("../models");

module.exports = {

    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // get single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .populate('reactions')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a thought and push its _id to the associated user's thoughts array field
    createThought(req, res) {
        Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        }).then((thought) => {
            return User.findOneAndUpdate(
                { username: req.body.username }, {
                $addToSet: { thoughts: thought._id }
            }, { new: true }
            );
        }).then((user) =>
            !user
                ? res.status(404).json({
                    message: 'Error creating thought - no user with that ID'
                })
                : res.json(user)
        ).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            {
                thoughtText: req.body.thoughtText,
                username: req.body.username
            },
            { new: true }
        )
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                    console.log(`Updated: ${result}`);
                } else {
                    res.status(404).json({ message: 'Thought not found' });
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: 'Internal server error', err });
            });
    },

    // delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Error deleting thought',
                    })
                    : res.json({ message: 'Thought successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },

    // create reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(`Reaction added`)
            )
            .catch((err) => res.status(500).json(err));
    },

    // delete reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(`Reaction deleted`)
            )
            .catch((err) => res.status(500).json(err));
    },
};