var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var userSchema =new Schema({

    fullname:{
        type: String,
        required:true
    },
    enrollmentno:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phonenumber:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('students',userSchema);