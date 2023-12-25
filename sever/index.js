import express from 'express';
import {config} from 'dotenv';
import databaseProject from './mongodb.js';
import connectMongo from './routes/connectMongo.js';

config();

const app = express();
const port = 4000;

databaseProject.run()

app.use(express.json());


app.use('/post',connectMongo);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });