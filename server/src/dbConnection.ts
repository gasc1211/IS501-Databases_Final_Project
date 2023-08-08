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

async function closeConnectionPool() {
  try {
    await oracledb.getPool().close(10);
  } catch (error) {
    console.error(error);
  }
}

initConnection();
