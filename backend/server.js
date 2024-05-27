import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import likeRoutes from './routes/likes.js';
import commentRoutes from './routes/comments.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, 
    optionSuccessStatus:200
  };

app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/backend/auth', authRoutes);
app.use('/backend/users', userRoutes);
app.use('/backend/post', postRoutes);
app.use('/backend/likes', likeRoutes);
app.use('/backend/comments', commentRoutes);

const PORT = 8802;

app.listen(PORT, () => {
    console.log(`Connected to backend on port ${PORT}`);
});
