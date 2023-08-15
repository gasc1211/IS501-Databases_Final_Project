import { Request, Response } from "express";
import { connection } from "../dbConnection";
import { Clientes } from "../types";
import oracledb, { Connection, Result } from "oracledb";

const userController: any = {
  // Get user data from database
  async getUser(req: Request, res: Response) {
    connection
      .then(async (connection: Connection | undefined) => {
        let { clientID } = req.params;
        let user;
        if (connection !== undefined) {
          const result = await connection.execute(
            `SELECT * FROM Clientes WHERE Clientes.ClienteID = ${clientID}`
          );
          user = result.rows;
        } else {
          throw new Error("Failed to connect to the database");
        }
        res.status(200).send(user);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Failed to fetch data from database");
      });
  },
  // Get all user data from database
  async getUsers(req: Request, res: Response) {
    connection
      .then(async (connection: Connection | undefined) => {
        let users;
        if (connection !== undefined) {
          const result = await connection.execute(`SELECT * FROM Clientes`);
          users = result.rows;
        } else {
          throw new Error("Failed to connect to the database");
        }
        res.status(200).send(users);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Failed to fetch data from database");
      });
  },
  // Insert user data into database
  async insertUser(req: Request, res: Response) {
    connection
      .then(async (connection: Connection | undefined) => {
        let client = req.body.client;
        if (connection !== undefined) {
          const result = await connection.execute(`INSERT INTO 
            Clientes(Nombres, Apellidos, DNI, RTN, Licencia, Celular, CorreoElectronico) 
            VALUES (
              ${client.Nombres},
              ${client.Apellidos},
              ${client.DNI},
              ${client.RTN},
              ${client.Licencia},
              ${client.Celular},
              ${client.CorreoElectronico}
            )`);
        } else {
          throw new Error("Failed to connect to the database");
        }
        res.status(200).send();
      })
      .catch((error) => {
        res.status(500).send("Failed to insert data to the database.");
      });
  },
};

export default userController;
