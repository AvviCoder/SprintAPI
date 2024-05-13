const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics",{
   // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Conneciton establised successfully..");
}).catch((err) =>{
    console.log("The database is unable to connect...");
})