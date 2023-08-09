import oracledb from "oracledb";
import * as types from "./types";

const dbConfig = require("./dbConfig");

async function initConnection() {
  try {
    // Attempt a connection to the database
    await oracledb.createPool(dbConfig);
  } catch (error) {
    console.error(error);
  } finally {
    // Close the connection
    await closeConnectionPool();
  }
}

async function createUser(client: types.Clientes) {
  let connection;
  try {
    // Establish a connection pool to the database sever
    connection = await oracledb.getConnection(dbConfig);

    // SQL statement to execute
    const sqlStatement: string = `INSERT INTO Clientes(Nombres, Apellidos, DNI, RTN, Licencia, Celular, CorreoElectronico) VALUES(:1, :2, :3, :4, :5, :6, :7)`;

    // Values for insert statement
    let params: Array<any> = [
      client.nombres,
      client.apellidos,
      client.dni,
      client.rtn,
      client.licencia,
      client.celular,
      client.correoElectronico,
    ];

    // Statement execution options
    const options: Object = {
      out: oracledb.OUT_FORMAT_OBJECT,
    };

    // Execute the statement
    await connection.execute(sqlStatement, params, options);
  } catch (error) {
    console.log(error);
  } finally {
    // Dispose of the connection
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function deleteUser(client: types.Clientes) {
  /** Delete user from DB
   * DBA Only
  */
  let connection;
  try {
    // Establish a connection pool to the database sever
    connection = await oracledb.getConnection(dbConfig);

    // SQL statement to execute
    const sqlStatement: string = `DELETE FROM Clientes WHERE DNI = :dni`;

    // Values for insert statement
    let params: Array<any> = [
      client.dni
    ];

    // Statement execution options
    const options: Object = {
      out: oracledb.OUT_FORMAT_OBJECT,
    };

    // Execute the statement
    await connection.execute(sqlStatement, params, options);
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    // Dispose of the connection
    if (connection) {
      try {
        await connection.close();
        return true;
      } catch (error) {
        console.log(error);
        return true;  // Connection not terminated, but transaction finished
      }
    }
  }
}



// TODO: DEFINE FUNC TO ADD RETRIEVE CARS USING PARAMETERS/PREFIX
async function getRealCars(){
  /**Return all the cars stored in the DB
   * Define a realCar as a Car object represented
   * as in real life (Not wiht IDs)
  */
  let connection;
  let rsp;
  try {
      // Establish connection with the server
      connection = await oracledb.getConnection(dbConfig);
      const sqlStatement: string = `SELECT Marca.Nombre, Modelo.nombreModelo, Color.nombre_color, Vehiculos.Kilometraje, Estado_Vehiculo.Nombre, Vehiculos.Automatico
      FROM Vehiculos INNER JOIN Modelo ON Vehiculos.ModeloID = Modelo.ModeloID
      INNER JOIN Categoria ON Vehiculos.CategoriaID = Categoria.CategoriaID
      INNER JOIN Color ON Vehiculos.ColorID = Color.ColorID
      INNER JOIN Estado_Vehiculo ON Vehiculos.EstadoVehiculoID = Estado_Vehiculo.EstadoVehiculoID
      `

      const options: Object = {
        out: oracledb.OUT_FORMAT_OBJECT,
      };

      // Execute SQL statement
      rsp = await connection.execute(sqlStatement, null, options)
  } catch (error) {
    console.log("CONNECTION FAILED");
    console.log(error);
  }finally{
    if (connection){
      try {
        // Close Connection
        await connection.close();
        return rsp.rows();
      } catch (error) {
        console.log("CONNECTION TERMINATION FAILED");
        console.log(error)
      }
    }
  }
}
async function getAnyTable(tableName: string){
  /**Get all the registers of any table in the DB
   * DBA ONLY
  */
  let connection;
  let rsp;
  try {
    // Establish a connection pool to the database sever
    connection = await oracledb.getConnection(dbConfig);

    // SQL statement to execute
    const sqlStatement: string = `SELECT * FROM :tablename`;

    const params = [tableName];
    // Statement execution options
    const options: Object = {
      out: oracledb.OUT_FORMAT_OBJECT,
    };

    // Execute the statement
    rsp = await connection.execute(sqlStatement, params, options);
  } catch (error) {
    console.log("CONNECTION FAILED");
    console.log(error);
  } finally {
    // Dispose of the connection
    if (connection) {
      try {
        await connection.close();
        return rsp.rows();
      } catch (error) {
        console.log("CONNECTION TERMINATION FAILED");
        console.log(error);
      }
    }
  }
}

async function getAnyRegister(registerID: number,attributeName: string, tableName: string){
    /**Get any register from any table*/ 
  let connection;
  let rsp;
  try {
    // Establish a connection pool to the database sever
    connection = await oracledb.getConnection(dbConfig);

    // SQL statement to execute
    const sqlStatement: string = `SELECT * FROM :tablename WHERE :attributename = : registerid`;

    // Values for insert statement
    let params: Array<any> = [
      tableName,
      attributeName,
      registerID
    ];

    // Statement execution options
    const options: Object = {
      out: oracledb.OUT_FORMAT_OBJECT,
    };

    // Execute the statement
    rsp = await connection.execute(sqlStatement, params, options);
  } catch (error) {
    console.log("CONNECTION FAILED");
    console.log(error);
  } finally {
    // Dispose of the connection
    if (connection) {
      try {
        await connection.close();
        return rsp;
      } catch (error) {
        console.log("CONNECTION TERMINATION FAILED");
        console.log(error);
      }
    }
  }   
}




async function closeConnectionPool() {
  try {
    await oracledb.getPool().close(10);
  } catch (error) {
    console.error(error);
  }
}

initConnection();
