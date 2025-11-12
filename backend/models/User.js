const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, default: "client" } // default client, admin manually set
});

module.exports = mongoose.model("User", userSchema);
