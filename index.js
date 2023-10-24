import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

// Environment variables
dotenv.config();

// Initialize server
const index = express();

// Setting
index.set('port', process.env.PORT || 3000);

// Middlewares
index.use(morgan('dev'));
index.use(cors());
index.use(express.json());

// Routes 
// Here goes the routes you want to define, or at least that's what I recommend.

// Server
index.listen(index.get(port), () => {
  console.log('Server on port ' + index.get('port'));
});

