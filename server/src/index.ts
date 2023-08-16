// import Clientes from "./index";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as types from "./types";
import { logIn, userInfo, userOrdenActive, userAssociatedCard, userOrdenFinished, getLocalidades, getLocalidad, getSeguros, getAutos, getAuto, getExtras, getListaExtras, crearUser, getTipoTarjeta, crearTarjeta, deleteCard, finalizarOrden } from "./dbConnectionClient";

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

// Validar en el LogIn que el usuario existe en la base de datos
app.post("/logIn", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const result = await logIn(username, password);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.post("/userInfo", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const result = await userInfo(username);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.post("/userOrdenActive", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const result = await userOrdenActive(username);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

//Recupera los datos de las ordenes finalizadas de un cliente
app.post("/userOrdenFinished", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const result = await userOrdenFinished(username);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

//Recupera los datos de las tarjetas de los clientes
app.post("/userAssociatedCard", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const result = await userAssociatedCard(username);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.get("/getTipoTarjeta", async (req: Request, res: Response) => {
  try {
    const result = await getTipoTarjeta();
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.get("/getLocalidades", async (req: Request, res: Response) => {
  try {
    const result = await getLocalidades();
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.get("/getLocalidad/:localidadid", async (req: Request, res: Response) => {
  const localidadid = parseInt(req.params.localidadid)
  try {
    const result = await getLocalidad(localidadid);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.get("/getSeguros", async (req: Request, res: Response) => {
  try {
    const result = await getSeguros();
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.post("/datosReserva", async (req: Request, res: Response) => {
  res.json(req.body);
  console.log(req.body)
});

app.get("/getAutos", async (req: Request, res: Response) => {
  try {
    const result = await getAutos();
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.get("/getAuto/:autoID", async (req: Request, res: Response) => {
  const autoID = parseInt(req.params.autoID);
  try {
    const result = await getAuto(autoID);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.get("/getExtras", async (req: Request, res: Response) => {
  try {
    const result = await getExtras();
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.get("/getListaExtras/:listaExtras", async (req: Request, res: Response) => {
  const listaExtras = req.params.listaExtras;
  try {
    const result = await getListaExtras(listaExtras);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

//Recupera los datos de las ordenes finalizadas de un cliente
app.post("/crearUser", async (req: Request, res: Response) => {
  const { nombreNuevoUser, apellidoNuevoUser, emailNuevoUser, telNuevoUser, dirNuevoUser, passNuevoUser, userNuevoUser, DNINuevoUser, licenciaNuevoUser } = req.body;

  let datos = {
    nombreNuevoUser: nombreNuevoUser,
    apellidoNuevoUser: apellidoNuevoUser,
    emailNuevoUser: emailNuevoUser,
    telNuevoUser: telNuevoUser,
    dirNuevoUser: dirNuevoUser,
    passNuevoUser: passNuevoUser,
    userNuevoUser: userNuevoUser,
    DNINuevoUser: DNINuevoUser,
    licenciaNuevoUser: licenciaNuevoUser
  }

  console.log(datos)

  try {
    const result = await crearUser(datos);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

// app.post("/crearUsuario", async (req: Request, res: Response) => {
//   const { passNuevoUser, userNuevoUser} = req.body;

//   let datos = {
//     passNuevoUser: passNuevoUser,
//     userNuevoUser: userNuevoUser
//   }

//   console.log(passNuevoUser, userNuevoUser)
//   res.sendStatus(200);
//   try {
//     const result = await crearUsuario(passNuevoUser, userNuevoUser);
//     res.json(result);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Ocurrió un error en el servidor." });
//   }
// });


//Recupera los datos de las ordenes finalizadas de un cliente
app.post("/crearTarjeta", async (req: Request, res: Response) => {
  const { clienteID, numTarjeta, cvv, fechaVencimiento, tipoID } = req.body;

  let datos = {
    clienteID: parseInt(clienteID),
    numTarjeta: numTarjeta,
    cvv: cvv,
    fechaVencimiento: fechaVencimiento,
    tipoID: parseInt(tipoID)
  }

  console.log(datos)

  try {
    const result = await crearTarjeta(datos);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

//Recupera los datos de las ordenes finalizadas de un cliente
app.post("/finalizarOrden", async (req: Request, res: Response) => {
  const { localidadEntrega, localidadRecogida, fechaHoraEntrega, fechaHoraRecogida, seguroID, autoID, fechaFormateada, estatusOrden, clienteID, extrasNombres } = req.body;

  let datos = {
    localidadEntrega: localidadEntrega,
    localidadRecogida: localidadRecogida,
    fechaHoraEntrega: fechaHoraEntrega,
    fechaHoraRecogida: fechaHoraRecogida,
    seguroID: seguroID,
    autoID: autoID,
    fechaFormateada: fechaFormateada,
    estatusOrden: estatusOrden,
    clienteID: clienteID,
    extrasNombres: extrasNombres
  }

  console.log(datos)

  try {
    const result = await finalizarOrden(datos);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
});

app.post("/deleteCard", async (req: Request, res: Response) => {
  const {tarjetaID} = req.body;

  let datos = {
    tarjetaID: parseInt(tarjetaID)
  }

  console.log(tarjetaID)

  try {
    const result = await deleteCard(datos);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
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
