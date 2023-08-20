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
exports.userAssociatedCard = exports.userOrdenFinished = exports.userOrdenActive = exports.userInfo = exports.logIn = void 0;
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
// Validar si el usuario existe
/*
async function logInNew(key1: String, key2: String) {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "system",
        password: "08012001",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Empleados
        WHERE USUARIO = '${key1}'
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
*/
// Validar si el usuario existe
function logIn(key1, key2) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Clientes
        WHERE USUARIO = '${key1}'
        AND CONTRASENIA = '${key2}'
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
exports.logIn = logIn;
;
function userInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Clientes
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
function userOrdenActive(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT Ordenes.ordenid, modelo_vehiculo.nombreModelo, ordenes.fecha_entrega, ordenes.fecha_devolucion
        FROM ordenes 
        INNER JOIN Estatus_Orden ON estatus_orden.estatusid = ordenes.estatusid
        INNER JOIN tarjetas on tarjetas.tarjetaid = ordenes.tarjetaid
        inner join clientes on clientes.clienteid = tarjetas.clienteid
        inner join vehiculos on vehiculos.vehiculoid = ordenes.vehiculoid
        inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.vehiculoid
        where Estatus_Orden.nombre = 'Activa' and clientes.usuario = '${key1}'
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
exports.userOrdenActive = userOrdenActive;
;
function userOrdenFinished(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT Ordenes.ordenid, modelo_vehiculo.nombreModelo, ordenes.fecha_entrega, ordenes.fecha_devolucion
        FROM ordenes 
        INNER JOIN Estatus_Orden ON estatus_orden.estatusid = ordenes.estatusid
        INNER JOIN tarjetas on tarjetas.tarjetaid = ordenes.tarjetaid
        inner join clientes on clientes.clienteid = tarjetas.clienteid
        inner join vehiculos on vehiculos.vehiculoid = ordenes.vehiculoid
        inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.vehiculoid
        where Estatus_Orden.nombre = 'Finalizada' and clientes.usuario = '${key1}'
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
exports.userOrdenFinished = userOrdenFinished;
;
function userAssociatedCard(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select Tipo_Tarjeta.Nombre, Tarjetas.Num_Tarjeta, clientes.usuario
        FROM Tarjetas
        INNER JOIN tipo_tarjeta ON tipo_tarjeta.tipo_tarjetaid = tarjetas.tipo_tarjetaid
        INNER JOIN clientes on clientes.clienteid = tarjetas.clienteid
        where clientes.usuario = 'Roy01'
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
exports.userAssociatedCard = userAssociatedCard;
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
//# sourceMappingURL=dbConnectionClient.js.map