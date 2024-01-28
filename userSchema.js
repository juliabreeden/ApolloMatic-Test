const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        description: 'the full name of the user'
    },
    age: {
        type: Number,
        indexed: true,
        required: true
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
