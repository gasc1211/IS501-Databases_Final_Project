import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import config from "./config";
import userModule from "./components/user.module";

const app: Express = express();

app.use(cors()); // Usa el middleware cors para habilitar CORS

// Configure JSON parser for urlencoded request
app.use(bodyParser.urlencoded({ extended: false }));

// User Module
app.use("/users", userModule.router);

// Base URL
app.get("/", (req: Request, res: Response) => {
  res.send("GearShift Car Rentals Backend");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}!`);
});
