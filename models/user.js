const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //name(String)
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required']
  },
  //age(Number)
  age: {
    type: Number,
    trim: true,
    required: [true, 'Age is required']
  },
  //sex(String)
  sex: {
    type: String,
    trim: true,
    required: [true, 'Your biological sex is required']
  },
  //weight(Number)
  weight: {
    type: Number,
    trim: true,
    required: [true, 'Weight is required in lbs']
  },
  //height(Number)
  height: {
    type: Number,
    trim: true,
    required: [true, 'Height is required in cm']
  },
  pic: {
    type: String,
    trim: true,
    required: [true, 'Picture is required, please use a url string address']
  },
  username: {
      type: String,
      trim: true,
      required: [true, 'Username is required']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password is required']
}
});

const User = new mongoose.model("User", UserSchema);
module.exports = User;
