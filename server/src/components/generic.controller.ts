import { Request, Response } from "express";
import { connection } from "../dbConnection";
import oracledb, { Connection, Result } from "oracledb";

const genericController: any = {
  // Get cars data (real model) from DB
  async getAnyTable(req: Request, res: Response) {
    /**Return any table from the DB
     * DBA ONLY
     */
    try {
      connection.then(async (connection: Connection | undefined) => {
        let result;
        if (connection !== undefined) {
            const params: Array<any> = [req.body.tableName];
            const options: Object = {
                out: oracledb.OUT_FORMAT_OBJECT,
              };
            result  = await connection.execute(`SELECT * FROM :tableName`, params, options);
          console.log(result.rows);
        } else { 
            result = null;
            throw new Error("Failed to connect to the database");
        }
        const genericTable = result.rows;
        res.status(200).send(genericTable);
      });
    }catch (error) {
      console.log(error);
      res.status(500).send("Failed to fetch data from database");
    }
  },

  async getAnyRegister(req: Request, res:Response){
    /**Return any register from the DB */
    try {
        connection.then(async (connection: Connection | undefined) => {
          let result;
          if (connection !== undefined) {
              const params: Array<any> = [req.body.tableName, req.body.attributeName, req.body.attributeValue];
              const options: Object = {
                  out: oracledb.OUT_FORMAT_OBJECT,
                };
              result  = await connection.execute(`SELECT * FROM :tableName WHERE :attributeName = :attributeValue`, params, options);
            console.log(result.rows);
          } else { 
              result = null;
              throw new Error("Failed to connect to the database");
          }
          const genericTable = result.rows;
          res.status(200).send(genericTable);
        });
      }catch (error) {
        console.log(error);
        res.status(500).send("Failed to fetch data from database");
      }

  }
  
};

export default genericController;