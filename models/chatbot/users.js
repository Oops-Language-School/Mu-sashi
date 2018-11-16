const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema= new Schema({
    username: String,
    name: String,
})

// for hash and salt
UserSchema.plugin(passportLocalMongoose);

// the third argment students(optional) => for mongodb name
const Users= mongoose.model('users',UserSchema);

module.exports= Users;