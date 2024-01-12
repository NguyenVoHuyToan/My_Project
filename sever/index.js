import express from "express";
import { config } from "dotenv";
import databaseProject from "./mongodb.js";
import morgan from "morgan";
import cors from "cors";
import { productRoute } from "./routes/product.js";

import { userRoute } from "./routes/userRoute.js";

const app = express();
const port = 4000;

config();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use("/product", productRoute)
app.use("/user", userRoute)
databaseProject.run();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
