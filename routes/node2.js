const router = require("express").Router();

const { getPhotos, getPhotoById } = require("../controllers/node2");

router.route("/photos").get(getPhotos);
router.route("/photos/:id").get(getPhotoById);

module.exports = router;
