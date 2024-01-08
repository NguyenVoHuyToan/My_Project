import express from "express";
import { config } from "dotenv";
import databaseProject from "./mongodb.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3000;

config();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
databaseProject.run();
databaseProject.users.insertOne({"name":"test"})
databaseProject.inventory.insertOne({"name":"test"})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
