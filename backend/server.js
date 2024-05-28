import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import likeRoutes from './routes/likes.js';
import commentRoutes from './routes/comments.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, 
    optionSuccessStatus:200
  };

app.use(cors(corsOptions));
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, '../public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})

const upload = multer({ storage: storage });

app.post("/backend/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
})

app.use('/backend/auth', authRoutes);
app.use('/backend/user', userRoutes);
app.use('/backend/posts', postRoutes);
app.use('/backend/likes', likeRoutes);
app.use('/backend/comments', commentRoutes);

const PORT = 8801;

app.listen(PORT, () => {
    console.log(`Connected to backend on port ${PORT}`);
});
