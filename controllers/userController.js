const { User, Thought } = require('../models');


module.exports = {
    //Gets all the users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user that id found :-( ' })
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //Delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'No user found with that id' });
            }

            await User.deletemany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and thoughts deleted Pew Pew!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Update a course
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'No user with this id dude' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Add a friend
    async addFriend(req, res) {
        console.log('Youre adding a friend!');
        console.log(req.params.friendId);

        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!friend) {
                return res
                    .status(404)
                    .json({ message: 'No user found with that id :-( ' });
            }


            res.json(friend);



        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Remove a friend :-(
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndRemove(
                { _id: req.params.userId },
                { $pull: { friends: { _id: req.params.friendId } } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res
                    .status(404)
                    .json({ message: "No user found with this id" });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};


