import { NextFunction } from 'express';
import app from './server';

const port = process.env.PORT || 9000;


app.listen(port, () => console.log(`Server started on port: ${port}`));