// routes/payment.js
import express from 'express';
import { makePayment } from '../controllers/payment.js';

const router = express.Router();

router.post('/makePayment', makePayment);

export default router;
//hehehe
