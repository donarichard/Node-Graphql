import mongoose from 'mongoose';

const Conversation = new mongoose.Schema({
    memeber: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        index: true  
    }],
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message',
        index: true  
    }],
}, {
    timestamps: true
})

export const Conversations = mongoose.model('conversation', Conversation)