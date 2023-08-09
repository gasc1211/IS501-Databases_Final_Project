// import Clientes from "./index";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as types from "./types";
import { getUsers, logIn } from "./dbConnection";

dotenv.config();

const app: Express = express();
const port = 3000;

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
app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password)
  try{
    const result = await logIn(username, password);
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
  }
});



// User Endpoint
app.post("/user", (req: Request, res: Response) => {
  const client: types.Clientes = req.body;
  // createUser(client);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
