import oracledb from "oracledb";
import * as types from "./types";

const dbConfig = require("./dbConfig");

async function initConnection() {
    try {
        // Attempt a connection to the database
        await oracledb.createPool({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });
    } catch (error) {
        console.error(error);
    } finally {
        // Close the connection
        await closeConnectionPool();
    }
}

// Validar si el usuario existe
async function logInNew(key1: String, key2: String) {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from empleados
        inner join puestos on puestos.puestoid = empleados.puestoid
        where empleados.usuario = '${key1}' and empleados.contrasenia = '${key2}' and puestos.nombre = 'Gerente'
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







async function userInfo(key1: String) {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Empleados
        WHERE USUARIO = '${key1}'
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

async function closeConnectionPool() {
    try {
        await oracledb.getPool().close(10);
    } catch (error) {
        console.error(error);
    }
}

initConnection();

export { logInNew, userInfo };

