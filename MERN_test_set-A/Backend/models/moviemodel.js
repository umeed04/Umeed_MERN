const mongoose = require("mongoose");

const movieschema=mongoose.Schema(
    {
        title:String,
        rating:Number,
        genre:String,
        duration:String,
        language:String,
        poster:String
}
)
const moviemodel=mongoose.model("movie",movieschema)
module.exports=moviemodel