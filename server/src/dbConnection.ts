import oracledb from "oracledb";
import * as types from "./types";

const dbConfig = require("./dbConfig");

async function initConnection() {
  try {
    // Attempt a connection to the database
    await oracledb.createPool({
      user: "system",
      password: "ProyectoBD1",
      connectionString: "localhost/xe"
    });
  } catch (error) {
    console.error(error);
  } finally {
    // Close the connection
    await closeConnectionPool();
  }
}

async function getUsers() {
  let connection;
  try {
    // Establish a connection to the database server
    connection = await oracledb.getConnection({
      user: "system",
      password: "ProyectoBD1",
      connectionString: "localhost/xe"
    });

    // SQL statement to execute
    const sqlStatement: string = `
    SELECT emp.empID, emp.nombre_emp, pu.desc_puesto
    FROM Empleado emp 
    JOIN Puesto pu ON pu.puestoID = emp.puestoID
    `;

    // Statement execution options
    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT, // Use OUT_FORMAT_OBJECT for JSON-like results
    };

    // Execute the SELECT statement
    const result = await connection.execute(sqlStatement, [], options);

    return result.rows; // Return the retrieved rows
  } catch (error) {
    console.log(error);
    throw error;
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


async function logIn(key1: String, key2: String) {
  let connection
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "ProyectoBD1",
      connectionString: "localhost/xe"
    });

    const sqlStatement: string = `
    SELECT * FROM Clientes
    WHERE NOMBREUSUARIO = '${key1}'
    AND CONTRASENIA = '${key2}'
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
};

async function createUser(client: types.Clientes) {
  let connection;
  try {
    // Establish a connection pool to the database sever
    connection = await oracledb.getConnection({
      user: "system",
      password: "ProyectoBD1",
      connectionString: "localhost/xe"
    });

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

export {getUsers, logIn}