import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import PostsRoutes from './routes/PostRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.use('/posts', PostsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
