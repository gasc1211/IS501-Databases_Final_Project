import oracledb, { Connection } from "oracledb";
import * as types from "./types";

const config = require("./config");

// Attempt to create the connection pool
async function initConnection(): Promise<Connection | undefined> {
  try {
    // Get connection properties from config file
    const { user, password, connectionString } = config.default;

    // Create the connection pool
    await oracledb.createPool({
      user: user,
      password: password,
      connectionString: connectionString,
      poolAlias: "MainPool",
    });

    // Return the connection
    return await oracledb.getConnection("MainPool");
  } catch (error) {
    console.error(error);
  }
}

// Close the connection pool
async function closeConnectionPool() {
  try {
    await oracledb.getPool().close(10);
  } catch (error) {
    console.error(error);
  }
}

const connection: Promise<Connection | undefined> = initConnection();

export { connection };
