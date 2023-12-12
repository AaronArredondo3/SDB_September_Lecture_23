const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ //* this will be in object form
    //* think of this as our columns for our document
    firstName: {
        type: String, // what datatype this is expecting.
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true, // meaning the user needs to sign in, default is false
        unique: true // duplicate emails will throw an error response
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema); //* this is where our collection goes in the parenthesis