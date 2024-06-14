// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new mongoose.Schema({
//   firtname: String,
//   lastname: String,
//   email: String,
//   domicilio:String,
//   celular:String,
//   documento:String,
//   rol:String,
//   area:String,
// });

// const userModel = mongoose.model("User", userSchema);

// module.exports = userModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  domicilio: String,
  celular: String,
  documento: String,
  rol: { type: String, enum: ['Task', 'Gammer', 'Client', 'Provider'], required: true },
  area: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
