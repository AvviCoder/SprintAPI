const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true // to have distinct entry of the number
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true,
        set: function(value)
        {
            return new Date(value);
        }
    },
    country:{
        type:String,
        required:true,
        trim:true,
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m",
    }

})
// creation of a new collection
const MensRanking = new mongoose.model("MenRanking", menSchema)

module.exports = MensRanking;