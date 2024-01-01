const {Schema,model} = require("mongoose");
  
  const MySchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "like"
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "comment"
    }]
  });
  
  module.exports = model("post", MySchema)
  