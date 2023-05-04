import express from 'express';
import authRoutes from './auth';

const router = express.Router();

// Routes
router.use('/auth', authRoutes);

export default router;
