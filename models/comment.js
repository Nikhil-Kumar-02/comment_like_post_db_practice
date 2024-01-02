const {Schema,model} = require("mongoose");
const mongoose = require('mongoose');

  const MySchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    body : {
        type : String,
        required : true
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "post"
    }
  });
  
  module.exports = model("comment", MySchema)
  