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
exports.userInfo = exports.logInNew = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
const dbConfig = require("./dbConfig");
function initConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Attempt a connection to the database
            yield oracledb_1.default.createPool({
                user: "admin_dba",
                password: "123456A",
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
// Validar si el usuario existe
function logInNew(key1, key2) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from empleados
        inner join puestos on puestos.puestoid = empleados.puestoid
        where empleados.usuario = '${key1}' and empleados.contrasenia = '${key2}' and puestos.nombre = 'Gerente'
        `;
            const options = {
                outFormat: oracledb_1.default.OUT_FORMAT_OBJECT,
            };
            const result = yield connection.execute(sqlStatement, [], options);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
        finally {
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
exports.logInNew = logInNew;
;
function userInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Empleados
        WHERE USUARIO = '${key1}'
        `;
            const options = {
                outFormat: oracledb_1.default.OUT_FORMAT_OBJECT,
            };
            const result = yield connection.execute(sqlStatement, [], options);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
        finally {
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
exports.userInfo = userInfo;
;
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
//# sourceMappingURL=dbConnectionManager.js.map