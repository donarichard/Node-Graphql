import mongoose from 'mongoose';

const ConversationUser = new mongoose.Schema({
    conversation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversation',
        required: true,
        index: true  
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversation',
        required: true,
        index: true  
    },
    un_read_messages: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export const ConversationsUsers = mongoose.model('conversation_users', ConversationUser)