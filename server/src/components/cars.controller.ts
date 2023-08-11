import { Request, Response } from "express";
import { connection } from "../dbConnection";
import oracledb, { Connection, Result } from "oracledb";

const carsController: any = {
  // Get cars data (real model) from DB
  async getRealCars(req: Request, res: Response) {
    try {
      connection.then(async (connection: Connection | undefined) => {
        let result;
        if (connection !== undefined) {
            const options: Object = {
                out: oracledb.OUT_FORMAT_OBJECT,
              };
          
            result  = await connection.execute(`
            SELECT Marca.Nombre, Modelo.nombreModelo, Color.nombre_color, Vehiculos.Kilometraje, Estado_Vehiculo.Nombre, Vehiculos.Automatico
            FROM Vehiculos INNER JOIN Modelo ON Vehiculos.ModeloID = Modelo.ModeloID
            INNER JOIN Categoria ON Vehiculos.CategoriaID = Categoria.CategoriaID
            INNER JOIN Color ON Vehiculos.ColorID = Color.ColorID
            INNER JOIN Estado_Vehiculo ON Vehiculos.EstadoVehiculoID = Estado_Vehiculo.EstadoVehiculoID`,
            [],
            options
            );
          console.log(result.rows);
        } else { 
            result = null;
            throw new Error("Failed to connect to the database");
        }
        const cars = result.rows;
        res.status(200).send(cars);
      });
    }catch (error) {
      console.log(error);
      res.status(500).send("Failed to fetch data from database");
    }
  },
  
};

export default carsController;