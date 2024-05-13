const multer = require("multer");
const path = require("path");

const storage = (destinationFolder) => multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `images/${destinationFolder}`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


const upload = (destinationFolder) => multer({
  storage: storage(destinationFolder),
});

// Export a function that creates the middleware
module.exports = (destinationFolder) => {
  return upload(destinationFolder).single('img');
};