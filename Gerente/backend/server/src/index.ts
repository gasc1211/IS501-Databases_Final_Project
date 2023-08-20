// import Clientes from "./index";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as types from "./types";
//import { logIn, logInNew, userInfo, userOrdenActive, userOrdenFinished, userAssociatedCard } from "./dbConnectionClient";

dotenv.config();
//var clientRouter = require('./routes/Client-routes');
//var managerRouter = require('./routes/Manager-routes');
//app.use('/client', clientRouter);
//app.use('/manager', managerRouter);

const app: Express = express();
const port = 3000;

app.use(cors()); // Usa el middleware cors para habilitar CORS

// Configure JSON parser for urlencoded request
app.use(bodyParser.urlencoded({ extended: false }));


//import clientRouter from './routes/Client-routes';
import managerRouter from './routes/Manager-routes';
import managerTarjetsRouter from './routes/Manager-tarjets-routes';
import managerSeeMooreRouter from './routes/Manager-see-moore-router';
//app.use('/client', clientRouter);
app.use('/manager', managerRouter);
app.use('/managerTarjets', managerTarjetsRouter);
app.use('/managerSeeMoore', managerSeeMooreRouter);

// Base URL
app.get("/", (req: Request, res: Response) => {
  res.send("GearShift Car Rentals Backend");
});



app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
