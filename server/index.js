import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js';

const MONGO_NAME = process.env.MONGO_NAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const SERVER_PORT = 3000;

const dbUri = `mongodb+srv://${MONGO_NAME}:${MONGO_PASSWORD}@cluster0.jdnoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(SERVER_PORT, () => {
      console.log(`Server is listening on port ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// init app & middleware
const app = express();

app.get('/users', async (req, res) => {
  User.find().then((result) => {
    res.send(result);
  });
});

app.get('/add-user', async (req, res) => {
  const user = new User({
    email: 'niklas@test.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'password123',
    age: 30,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
