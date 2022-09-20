import mongoose from 'mongoose';
import * as CryptoJS from 'crypto-js';
const Message = new mongoose.Schema({
    conversation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversation',
        required: true,
        index: true
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        index: true
    },
    seenByReceiver: {
        type: Boolean,
        defaut: false
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

Message.post('save', async (doc, next) => {
    const encryptMessage =  CryptoJS.AES.encrypt(doc.content,String(doc._id)).toString(); 
    console.log(doc)
    console.log(encryptMessage)
    await doc.$model('message').findOneAndUpdate({
        _id: doc.id,
    }, {
        $set: {
            content: encryptMessage
        }
    })
    next()
})

export const Messages = mongoose.model('message', Message)