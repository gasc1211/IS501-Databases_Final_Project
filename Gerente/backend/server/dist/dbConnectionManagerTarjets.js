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
exports.tableVehiculos = exports.tableTarjetas = exports.tableSeguros = exports.tableReporteInicial = exports.tableReporteFinal = exports.tablePuestos = exports.tableOrdenes = exports.tableMultas = exports.tableModelos = exports.tableMarcas = exports.tableLocalidades = exports.tableListaNegra = exports.tableFacturas = exports.tableExtras = exports.tableEstatusOrden = exports.tableEmpleados = exports.tableDanios = exports.tableClientes = exports.tableCategorias = exports.tableCaracteristicas = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
const dbConfig = require("./dbConfig");
//----------------------------------------------------------------------------------------------------Mostrando tablas
function tableCaracteristicas() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM caracteristicas
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
exports.tableCaracteristicas = tableCaracteristicas;
;
function tableCategorias() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM categoria_vehiculo
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
exports.tableCategorias = tableCategorias;
;
function tableClientes() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Clientes
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
exports.tableClientes = tableClientes;
;
function tableDanios() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Danios
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
exports.tableDanios = tableDanios;
;
function tableEmpleados() {
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
exports.tableEmpleados = tableEmpleados;
;
function tableEstatusOrden() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Estatus_Orden
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
exports.tableEstatusOrden = tableEstatusOrden;
;
function tableExtras() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Extras
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
exports.tableExtras = tableExtras;
;
function tableFacturas() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Facturas
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
exports.tableFacturas = tableFacturas;
;
function tableListaNegra() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM ListaNegra_Clientes
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
exports.tableListaNegra = tableListaNegra;
;
function tableLocalidades() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Localidades
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
exports.tableLocalidades = tableLocalidades;
;
function tableMarcas() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        SELECT * FROM Marcas
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
exports.tableMarcas = tableMarcas;
;
function tableModelos() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from modelo_vehiculo
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
exports.tableModelos = tableModelos;
;
function tableMultas() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from multas
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
exports.tableMultas = tableMultas;
;
function tableOrdenes() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from ordenes 
        inner join estatus_orden on estatus_orden.estatusid = ordenes.estatusid
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
exports.tableOrdenes = tableOrdenes;
;
function tablePuestos() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from puestos
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
exports.tablePuestos = tablePuestos;
;
function tableReporteFinal() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from reporte_final
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
exports.tableReporteFinal = tableReporteFinal;
;
function tableReporteInicial() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from reporte_inicial
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
exports.tableReporteInicial = tableReporteInicial;
;
function tableSeguros() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from seguro
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
exports.tableSeguros = tableSeguros;
;
function tableTarjetas() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from tarjetas
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
exports.tableTarjetas = tableTarjetas;
;
function tableVehiculos() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
        select * from Vehiculos
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
exports.tableVehiculos = tableVehiculos;
;
//# sourceMappingURL=dbConnectionManagerTarjets.js.map