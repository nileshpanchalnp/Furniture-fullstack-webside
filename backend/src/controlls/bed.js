const { bedData } = require("../model/bed");
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
// get bed data
const getBed = async (req, res) => {
  try {
    const data = await bedData.find();
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};
// create bed data
const createBed = async (req, res) => {
  try {
    const req_body = req.body;
    const bed_name = req_body.bed_name;
    const option = req_body.option;
    const price = req_body.price;
    const poster = req.file ? req.file.filename : " ";
    await bedData.create({
      bed_name,
      option,
      price,
      poster,
    });

    res.json({
      msg: "Bed Detail Create successful",
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};
// delete bed data
const deletebed = async (req, res) => {
  try {
    const { id } = req.params;
    const bed = await bedData.findOne({ _id: id });
    if (bed) {
      const poster = bed.poster;
      let poster_path = null;
      if (poster) {
        poster_path = path.join(__dirname, "../imgs", poster);
        fs.unlinkSync(poster_path);
      }
      await bedData.deleteOne({ _id: id });
      res.json({
        msg: "bed data deleted Succesful",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
// update
const updateBed = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedbed = await bedData.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedbed) {
      return res.status(404).json({
        msg: "bed not found",
      });
    }

    res.json({
      msg: "bed updated successfully",
      data: updatedbed,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
module.exports={getBed,createBed,deletebed,updateBed,upload}