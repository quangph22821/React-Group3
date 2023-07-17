import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import router from"./routers/index"

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(`${process.env.URI_DB}`);


app.use(cors())
app.use("", router);



export const viteNodeApp = app;


