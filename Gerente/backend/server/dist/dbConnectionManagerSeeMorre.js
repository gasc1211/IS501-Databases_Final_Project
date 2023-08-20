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
exports.categoriasInfo = exports.verMasCategorias = exports.caracteristicaInfo = exports.verMasCaracteristicas = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
const dbConfig = require("./dbConfig");
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasCaracteristicas(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM caracteristicas
            WHERE caracteristicas.caracteristicaID = ${key1}
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
exports.verMasCaracteristicas = verMasCaracteristicas;
;
function caracteristicaInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM Caracteristicas
            WHERE CARACTERISTICAID = '${key1}'
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
exports.caracteristicaInfo = caracteristicaInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasCategorias(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM categoria_vehiculo
            WHERE categoria_vehiculo.categoria_vehiculoID = ${key1}
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
exports.verMasCategorias = verMasCategorias;
;
function categoriasInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "system",
                password: "08012001",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM categoria_vehiculo
            WHERE categoria_vehiculo.categoria_vehiculoID = ${key1}
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
exports.categoriasInfo = categoriasInfo;
;
//# sourceMappingURL=dbConnectionManagerSeeMorre.js.map