const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

//Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique, true,
        },
    }
)