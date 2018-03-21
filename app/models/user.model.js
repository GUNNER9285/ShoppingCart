var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname: {
        type:String,
        required:true
    } ,
    lastname: {
        type:String,
        required:true
    } ,
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        index: true
    },
    password: {
        type:String,
        required:true
    } ,
});

mongoose.model('User', UserSchema);