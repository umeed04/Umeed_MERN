const mongoose= require("mongoose");
const connectdb=mongoose.connect("mongodb://localhost:27017/mern_test")
.then(()=>{console.log("connected");
})
.catch((err)=>{console.log(err);
})
module.exports=connectdb