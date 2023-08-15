import { Request, Response } from "express";
import { connection } from "../dbConnection";
import {Localidades} from "../types"
import oracledb, { Connection, Result } from "oracledb";

const localidadController: any = {
    async getLocalidades(req: Request, res: Response) {
      /**Get all the location's data from DB */
    try {
      connection.then(async (connection: Connection | undefined) => {
        let result;
        if (connection !== undefined) {
          result = await connection.execute(`SELECT Direccion, Telefono FROM Localidades`);
          console.log(result.rows);
        } else {
          throw new Error("Failed to connect to the database");
        }
        let localidades = result.rows;
        // TODO: CHECK DATA RETURN
        res.status(200).send(localidades);
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to fetch data from database");
    }
  },

  async insertLocalidad(req: Request, res: Response) {
    /**Insert a new location to DB
     * DBA ONLY
    */
    try {
        connection.then(async (connection: Connection | undefined) => {
            let localidad: Localidades = req.body.localidad;
            let result;
            if (connection !== undefined){
                const bindParams: Array<any> = [localidad.localidadID, localidad.direccion, localidad.telefono]
                const options: Object = {
                    out: oracledb.OUT_FORMAT_OBJECT,
                  };
                result = await connection.execute(`INSERT INTO Localidades VALUES(:id, :dir, :tel)`, bindParams, options);
            }else{
                throw new Error("Failed to connect to the database");
            }
        });
      res.status(200).send();
    } catch (error) {
      res.status(500).send("Failed to insert data to the database.");
    }
  },
};

export default localidadController;