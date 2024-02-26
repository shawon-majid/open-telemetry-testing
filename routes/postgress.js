const express = require("express");

const router = express.Router();

const { addUser, allUsers, setup } = require("../controllers/postgres");

router.route("/add").post(addUser);
router.route("/all").get(allUsers);
router.route("/setup").get(setup);

module.exports = router;
