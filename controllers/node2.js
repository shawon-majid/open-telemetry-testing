const axios = require("axios");

const getPhotos = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8000/photos");
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getPhotoById = async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/photos/${req.params.id}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { getPhotos, getPhotoById };
