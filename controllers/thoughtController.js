const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    //Gets all the thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No user that id found :-( '})
            }
            
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Create a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                res.status(404).json({ message: 'No thought found with that id' });
            }

            await Thought.deletemany({ _id: { $in: thoughts.reactions } });
            res.json({ message: 'Thoughts and reactions deleted Pew Pew!'});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true}
            );

            if (!thought) {
                res.status(404).json({ message: 'No thought with this id dude' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Add a reaction
    async addReaction(req, res) {
        console.log('Youre adding a reaction!');
        console.log(req.body);

        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res
                .status(404)
                .json({ message: 'No thought found with that id :-( '});
            }

            res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
 },
    //Remove a friend :-(
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndRemove(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                {runValidators: true, new: true }
            );

            if(!thought) {
                return res
                .status(404)
                .json({ message: "No thought found with this id" });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};