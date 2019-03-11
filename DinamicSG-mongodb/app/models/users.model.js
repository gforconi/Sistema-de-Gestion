const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    lastname: String,
    image: String,
    email: String,
    password: String,
    confirmation: Boolean,
    created_at: Date
});

module.exports = mongoose.model('Users', UserSchema);