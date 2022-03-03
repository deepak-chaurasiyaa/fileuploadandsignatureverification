const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength:8},
  },
      { timestamps: true }
  );
  
  const User = mongoose.model("users", userSchema);
  module.exports = User;