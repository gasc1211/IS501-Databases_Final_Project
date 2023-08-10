import { Request, Response } from "express";
import { connection } from "../dbConnection";
import { Clientes } from "../types";
import oracledb, { Connection, Result } from "oracledb";

const userController: any = {
  // Get user data from database
  async getUsers(req: Request, res: Response) {
    try {
      connection.then(async (connection: Connection | undefined) => {
        // `SELECT * FROM Clientes WHERE ClienteID=${req.body.clientID}`
        if (connection !== undefined) {
          const result = await connection.execute(`SELECT * FROM Clientes`);
          console.log(result.rows);
        } else {
          throw new Error("Failed to connect to the database");
        }
        let users;
        res.status(200).send(users);
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to fetch data from database");
    }
  },
  // Insert user data into database
  async insertUser(req: Request, res: Response) {
    try {
      let client = req.body.client;
      res.status(200).send();
    } catch (error) {
      res.status(500).send("Failed to insert data to the database.");
    }
  },
};

export default userController;
