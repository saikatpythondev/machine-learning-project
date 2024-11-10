const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/cacha");
const userSchema=mongoose.Schema({
    name:String,
    username:String
})
module.exports=mongoose.model("user",userSchema);