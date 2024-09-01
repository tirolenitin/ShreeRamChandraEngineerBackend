import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the upload directory within the React public folder
const uploadDir = path.join(__dirname, '../frontend/public/uploads');

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Specify the directory to store the uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, basename + '-' + uniqueSuffix + ext); // Save the file with a unique name
  }
});

const upload = multer({ storage: storage });

// Create the 'uploads' directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Upload a single file
export const uploadSingleFile = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Upload error', error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filename = req.file.filename;
    res.status(200).json({ filename: filename });
  });
};
