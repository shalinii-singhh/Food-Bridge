import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db.js';

// We will import routes momentarily
// import authRoutes from './routes/authRoutes.js';
// import donationRoutes from './routes/donationRoutes.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const httpServer = createServer(app);

// Socket.io initialization
export const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || '*',
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// Socket connections
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  // NGOs join specific room to receive match updates
  socket.on('join_ngo_room', (ngoId) => {
    socket.join(ngoId);
    console.log(`NGO ${ngoId} joined their room.`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
