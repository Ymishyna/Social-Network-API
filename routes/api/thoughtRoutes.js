const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts GET all and POST thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by id
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions POST new reactions
router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by id
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;