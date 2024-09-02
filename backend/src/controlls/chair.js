const { chairData } = require("../model/chair");
const fs = require("fs");
const path = require("path");
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
    const poster = req.file.filename;
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
    if (chair) {
      const poster = chair.poster;
      let poster_path = null;
      if (poster) {
        poster_path = path.join(__dirname, "../imgs", poster);
        fs.unlinkSync(poster_path);
      }
      await chairData.deleteOne({ _id: id });
      // await Movie.findByIdAndDelete(id);

      res.json({
        msg: " chair Data deleted successfully",
      });
    }
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

    const updatedChair = await Book.findByIdAndUpdate(id, updateData, {
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

module.exports = { getChair, createChair, deleteChair, updateChair };
