const moongoose = require("mongoose");
const Users = require("../models/Users");
require("../databases/mongodb");

const addUser = async (req, res) => {
  const { name, phone, count } = req.body;
  const user = new Users({
    name,
    phone,
    count,
  });
  try {
    await user.save();
    res.status(201).json({ message: "User Added to Mongo Successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// const setup = async (req, res) => {
//   try {
//     await mongoConnection();
//     res.status(200).json({ message: "Mongo Connection Successful" });
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

module.exports = { addUser, allUsers };
