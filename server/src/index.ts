import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { createUser, getUsers, logIn } from "./dbConnection";
import * as types from "./types";
import config from "./config";

const app: Express = express();

app.use(cors()); // Usa el middleware cors para habilitar CORS

// Configure JSON parser for urlencoded request
app.use(bodyParser.urlencoded({ extended: false }));

// Base URL
app.get("/", (req: Request, res: Response) => {
  res.send("GearShift Car Rentals Backend");
});

// Obtener todos los usuarios
app.get("/getUsers", async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Validar en el LogIn que el usuario existe en la base de datos
app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const result = await logIn(username, password);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

// User Endpoint
app.post("/user", (req: Request, res: Response) => {
  const client: types.Clientes = req.body;
  try {
    createUser(client);
    res.status(200).send("Succesfully commited values to the database.");
  } catch (error) {
    res.send(500).json({ error: "Failed to commit values to the database." });
  }
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}!`);
});
