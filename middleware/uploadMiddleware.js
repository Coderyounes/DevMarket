const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Specify the filename format
  },
});

// Configure multer
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limit the file size to 10MB
  },
  fileFilter(req, file, cb) {
    // Only accept certain file types (optional)
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only images are allowed'));
  },
});

module.exports = upload;
