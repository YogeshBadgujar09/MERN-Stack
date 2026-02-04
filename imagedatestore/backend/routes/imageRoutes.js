const express = require('express');
const multer = require('multer');
const ImageSchema = require('../models/ImageModel');

const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({

    destination: function (req, file, cb) { 
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }

});

const upload = multer({ storage: storage });



// Upload Image API
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const image = new ImageSchema({
      imagePath: req.file.filename
    });

    await image.save();
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ================= GET: FETCH IMAGES =================
router.get("/", async (req, res) => {
  try {
    const images = await ImageSchema.find().sort({ createdAt: -1 });
    res.status(200).json(images);
    // res.status(200).json({ message: "Server is handling request properly." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

