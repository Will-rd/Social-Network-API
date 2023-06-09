const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId();
        },
        createdAt: {
            type: Date,
            default: new Date().toGMTString(),
        },
        username: {
            type:String,
            required: true
        },
       reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
       },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
)