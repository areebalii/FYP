import dotenv from 'dotenv';
import connectDb from './database/connectDb.js';

dotenv.config();


connectDb();