import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Allow your frontend origin
  }));
  

app.use(express.json());
app.use(cookieParser());
app.use('/backend/auth', authRoutes);
app.use('/backend/user', userRoutes);
app.use('/backend/post', postRoutes);

app.listen(8801, () => {
    console.log("Connected to backend on port 8801");
});
