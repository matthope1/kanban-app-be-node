// src/index.ts
import express, { Express, Request, Response } from "express"
import dotenv from "dotenv";
import routes from './routes/routes'
import bodyParser from 'body-parser'
import cors from 'cors'
import { connectDB } from "./db/db";

dotenv.config()

connectDB()

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cors())

app.use('/api', routes)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});