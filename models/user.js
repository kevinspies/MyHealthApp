const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //name(String)
  name: {
    type: String,
    trim: true,
    required: "name is required"
  },
  //age(Number)
  age: {
    type: Number,
    trim: true,
    required: "age is required"
  },
  //sex(String)
  sex: {
    type: String,
    trim: true,
    required: false
  },
  //weight(Number)
  weight: {
    type: Number,
    trim: true,
    required: "weight is required"
  },
  //height(Number)
  height: {
    type: Number,
    trim: true,
    required: "height is required"
  },
  pic: {
    type: String,
    trim: true,
    required: false
  },
  username: {
      type: String,
      trim: true,
      required: "username is required"
  },
  password: {
    type: String,
    trim: true,
    required: "password is required"
}
});

const User = new mongoose.model("User", UserSchema);
module.exports = User;
