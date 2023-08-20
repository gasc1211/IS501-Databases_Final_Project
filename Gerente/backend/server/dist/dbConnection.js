"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oracledb_1 = __importDefault(require("oracledb"));
const dbConfig = require("./dbConfig");
function initConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Attempt a connection to the database
            yield oracledb_1.default.createPool({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            // Close the connection
            yield closeConnectionPool();
        }
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            // Establish a connection to the database server
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            // SQL statement to execute
            const sqlStatement = `
    SELECT emp.empID, emp.nombre_emp, pu.desc_puesto
    FROM Empleado emp 
    JOIN Puesto pu ON pu.puestoID = emp.puestoID
    `;
            // Statement execution options
            const options = {
                outFormat: oracledb_1.default.OUT_FORMAT_OBJECT, // Use OUT_FORMAT_OBJECT for JSON-like results
            };
            // Execute the SELECT statement
            const result = yield connection.execute(sqlStatement, [], options);
            return result.rows; // Return the retrieved rows
        }
        catch (error) {
            console.log(error);
            throw error;
        }
        finally {
            // Dispose of the connection
            if (connection) {
                try {
                    yield connection.close();
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    });
}
function createUser(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            // Establish a connection pool to the database sever
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            // SQL statement to execute
            const sqlStatement = `INSERT INTO Clientes(Nombres, Apellidos, DNI, RTN, Licencia, Celular, CorreoElectronico) VALUES(:1, :2, :3, :4, :5, :6, :7)`;
            // Values for insert statement
            let params = [
                client.nombres,
                client.apellidos,
                client.dni,
                client.rtn,
                client.licencia,
                client.celular,
                client.correoElectronico,
            ];
            // Statement execution options
            const options = {
                out: oracledb_1.default.OUT_FORMAT_OBJECT,
            };
            // Execute the statement
            yield connection.execute(sqlStatement, params, options);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            // Dispose of the connection
            if (connection) {
                try {
                    yield connection.close();
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    });
}
function closeConnectionPool() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield oracledb_1.default.getPool().close(10);
        }
        catch (error) {
            console.error(error);
        }
    });
}
initConnection();
//# sourceMappingURL=dbConnection.js.map