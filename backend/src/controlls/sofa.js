const { sofaData } = require("../model/sofa");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../imgs")); // Ensure the path is correctly set
  },
  filename: function (req, file, cb) {
    const prefix = Date.now() + "-" + Math.round(Math.random() * 100000);
    cb(null, prefix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const getSofa = async (req, res) => {
  try {
    const data = await sofaData.find();
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};
const createSofa = async (req, res) => {
  try {
    const req_body = req.body;
    const sofa_name = req_body.sofa_name;
    const option = req_body.option;
    const price = req_body.price;
    const poster = req.file ? req.file.filename : " ";
    await sofaData.create({
      sofa_name,
      option,
      price,
      poster,
    });

    res.json({
      msg: "sofa Detail Create successful",
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteSofa = async (req, res) => {
  try {
    const { id } = req.params;
    const sofa = await sofaData.findOne({ _id: id });
    if (sofa) {
      const poster = sofa.poster;
      let poster_path = null;
      if (poster) {
        poster_path = path.join(__dirname, "../imgs", poster);
        fs.unlinkSync(poster_path);
      }
      await sofaData.deleteOne({ _id: id });
      res.json({
        msg: "sofa data deleted Succesful",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
// update
const updateSofa = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedSofa = await sofaData.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedSofa) {
      return res.status(404).json({
        msg: "Sofa not found",
      });
    }

    res.json({
      msg: "Sofa updated successfully",
      data: updatedSofa,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getSofa, createSofa, deleteSofa, updateSofa, upload };
