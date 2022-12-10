import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandling } from './middleware/index-error';
import mongoose from 'mongoose';

dotenv.config();

const app: Express = express();
app.use(express.json());


// Routes
import authRoute from './routes/authRoute';
import jobRoute from './routes/jobRoute';





app.get('/', (req: Request, res: Response) => {
    
  res.send('Express + TypeScript Server');
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/job', jobRoute);

// notFound handler
app.use(notFound);
app.use(errorHandling)

mongoose.set('strictQuery', true);



mongoose
  .connect(process.env.DATABASE_URL!, )
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

  const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`serve at http://localhost:${PORT}`);
});


