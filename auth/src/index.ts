import mongoose from 'mongoose';
import { app } from './app';

// Removing warning: Mongoose: the `strictQuery` option will be
// switched back to `false` by default in Mongoose 7.
mongoose.set('strictQuery', true);

const start = async () => {
  console.log('Starting up....');

  // Check if the the process.env has been defined
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connecting to MongoDb');
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!');
  });
};

start();
