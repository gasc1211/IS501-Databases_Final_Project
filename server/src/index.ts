// import Clientes from "./index";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as types from "./types";
import { createUser  } from "./dbConnection";

dotenv.config();


const app: Express = express();
const port = process.env.PORT;

// Configure JSON parser for urlencoded request
app.use(bodyParser.urlencoded({ extended: false }));

// Base URL
app.get("/", (req: Request, res: Response) => {
  res.send("GearShift Car Rentals Backend");
});

// User Endpoint
app.post("/user", (req: Request, res: Response) => {
  const client: types.Clientes = req.body;
  // createUser(client);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
