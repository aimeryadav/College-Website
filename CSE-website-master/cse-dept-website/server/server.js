const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const facultyRoutes = require('./routes/faculty');
const noticeRoutes = require('./routes/notices');
const courseRoutes = require('./routes/courses');
const placementRoutes = require('./routes/placements');
const researchRoutes = require('./routes/research');

dotenv.config();
const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',  // React dev server
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/research', researchRoutes);

// DB
connectDB();

// Simple test route
app.get('/', (req, res) => {
  res.send('CSE Dept API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
