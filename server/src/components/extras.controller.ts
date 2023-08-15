import { Request, Response } from "express";
import { connection } from "../dbConnection";
import {Extras} from "../types"
import oracledb, { Connection, Result } from "oracledb";

const extraController: any = {
    async getExtras(req: Request, res: Response) {
      /**Get all the location's data from DB */
    try {
      connection.then(async (connection: Connection | undefined) => {
        let result;
        if (connection !== undefined) {
            const options: Object = {
                out: oracledb.OUT_FORMAT_OBJECT,
              };
            result = await connection.execute(
                `
                SELECT Extra.nombre, Extra.Descripcion, Extra.costo, Categoria.Nombre
                FROM Extras INNER JOIN Categoria ON Extras.CategoriaID = Categoria.CategoriaID
                `,
                [],
                options
            );
          console.log(result.rows);
          
        } else {
          throw new Error("Failed to connect to the database");
        }
        let extras = result.rows;
        // TODO: CHECK DATA RETURN
        res.status(200).send(extras);
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to fetch data from database");
    }
  },

  async insertExtra(req: Request, res: Response) {
    /**Insert a new extra to DB
     * DBA ONLY
    */
    try {
        connection.then(async (connection: Connection | undefined) => {
            let extra: Extras = req.body.extras;
            let result;
            if (connection !== undefined){
                const bindParams: Array<any> = [extra.extraID, extra.nombre, extra.descripcion, extra.categoriaID]
                const options: Object = {
                    out: oracledb.OUT_FORMAT_OBJECT,
                  };
                result = await connection.execute(`INSERT INTO Extras VALUES(:id, :name, :desc, :cid)`, bindParams, options);
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

export default extraController;