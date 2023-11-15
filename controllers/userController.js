const { User, Thought } = require("../models");

module.exports = {

    // get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create user
    createUser(req, res) {
        User.create({
            username: req.body.username,
            email: req.body.email
        })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    // update user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {
                username: req.body.username,
                email: req.body.email
            },
            { new: true }
        )
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                    console.log(`Updated: ${result}`);
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: 'Internal server error', err });
            });
    },

    // delete a user (BONUS: Remove a user's associated thoughts when deleted)
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Thought.deleteMany({ username: user.username })
                        .then((thoughts) =>
                            !thoughts
                                ? res.status(404).json({ message: 'No thoughts for that user' })
                                : res.json(user)
                        )
            )
            .catch((err) => res.status(500).json(err));
    },

    //add a friend
    addFriend(req, res) {
        User.findOne({ _id: req.params.friendId })
            .select('-__v')
            .then((user) => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    {
                        $addToSet: {
                            friends: user._id
                        }
                    },
                    { new: true }
                );
            }).then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //delete a friend
    deleteFriend(req, res) {
        User.findOne({ _id: req.params.friendId })
            .select('-__v')
            .then((user) => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    {
                        $pull: {
                            friends: user._id
                        }
                    },
                    { new: true }
                );
            }).then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
};