const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
