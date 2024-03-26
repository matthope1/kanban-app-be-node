// src/index.ts
import express, { Express, Request, Response } from "express"
import dotenv from "dotenv";
import routes from './routes/routes'
import bodyParser from 'body-parser'
import cors from 'cors'
import { connectDB } from "./db/db";
import { auth } from "express-oauth2-jwt-bearer"

dotenv.config()

connectDB()

const app: Express = express();
const port = process.env.PORT || 3000;

const jwtCheck = auth({
  audience: 'https://kanbanbe.com',
  issuerBaseURL: 'https://dev-8mqlgmbq3y23i00o.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});


app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cors())

// app.use(jwtCheck)

app.use('/api', routes)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});