import express from 'express';
import cors from 'cors';

const app = express();

// Routes
const authRoutes = require('./routes/authRouter');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//ADD API
app.use('/auth', authRoutes);


export default app;
