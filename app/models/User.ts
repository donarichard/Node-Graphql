import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    // For feature reference
    // followers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     // ref: 'users'
    // }],
    // following: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     // ref: 'users'
    // }],
    login_at: {
        type: Date,
        default: Date.now
    },
    last_seen: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: false
    },
    last_ip: {
        type: String,
    },
    location: { type: [Number], index: { type: '2dsphere', sparse: true } }
}, {
    timestamps: true
})
export const Users = mongoose.model('user', User)
