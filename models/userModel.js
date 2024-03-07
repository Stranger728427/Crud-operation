import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  age:{type:Number, required:true, min:18, max:60},
  address:{type:String, required:true}
})

const userModel = mongoose.model('userCollection', userSchema);


 export default userModel;