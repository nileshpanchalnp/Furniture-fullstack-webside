const { chairData } = require("../model/chair");
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

const upolad = multer({ storage });

const getChair = async (req, res) => {
  try {
    const data = await chairData.find();
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      erro: error,
    });
  }
};

const createChair = async (req, res) => {
  try {
    const req_body = req.body;
    const chair_name = req_body["chair_name"];
    const option = req_body["option"];
    const price = req_body["price"];
    const poster = req.file ? req.file.filename : " ";
    await chairData.create({
      chair_name,
      option,
      price,
      poster,
    });

    res.json({
      msg: "chair detail create",
    });
  } catch (error) {
    res.json({
      erro: error,
    });
  }
};

const deleteChair = async (req, res) => {
  try {
    const { id } = req.params;
    const chair = await chairData.findOne({ _id: id });

    if (!chair) {
      return res.status(404).json({ msg: "Chair not found" });
    }

    const poster = chair.poster;
    if (poster) {
      const poster_path = path.join(__dirname, "../imgs", poster);

      // Check if the file exists before trying to delete
      if (fs.existsSync(poster_path)) {
        fs.unlink(poster_path, (err) => {
          if (err) {
            console.error("Failed to delete the file:", err);
            return res
              .status(500)
              .json({ msg: "Failed to delete chair image" });
          }
        });
      }
    }

    await chairData.deleteOne({ _id: id });

    res.json({
      msg: "Chair data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const updateChair = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedChair = await chairData.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedChair) {
      return res.status(404).json({
        msg: "Chair not found",
      });
    }

    res.json({
      msg: "chair updated successfully",
      data: updatedChair,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getChair, createChair, upolad, deleteChair, updateChair };
