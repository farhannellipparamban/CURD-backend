import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import dbConnect from "./config/mongodb.js";
import Taskrouter from "./route/taskRoute.js";

dotenv.config()
dbConnect();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", 'DELETE',],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/", Taskrouter);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
