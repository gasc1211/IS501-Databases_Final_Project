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
exports.ordenesChangeState = exports.facturasRFInfo = exports.facturasRIInfo = exports.verMasFacturasRF = exports.verMasFacturasRI = exports.vehiculosInfo = exports.verMasVehiculos = exports.tarjetasInfo = exports.verMasTarjetas = exports.segurosInfo = exports.verMasSeguros = exports.reporteInicialInfo = exports.verMasReporteInicial = exports.puestosEmpleadosInfo = exports.verMasPuestosEmpleados = exports.ordenesInfo = exports.verMasOrdenes = exports.multasInfo = exports.verMasMultas = exports.modelosInfo = exports.verMasModelos = exports.marcasInfo = exports.verMasMarcas = exports.localidadesInfo = exports.verMasLocalidades = exports.listaNegraInfo = exports.verMasListaNegra = exports.extrasInfo = exports.verMasExtras = exports.estatusInfo = exports.verMasEstatus = exports.empleadosInfo = exports.verMasEmpleados = exports.daniosInfo = exports.verMasDanios = exports.clientesInfo = exports.verMasClientes = exports.categoriasInfo = exports.verMasCategorias = exports.caracteristicaInfo = exports.verMasCaracteristicas = void 0;
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
                user: "admin_dba",
                password: "123456A",
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
                user: "admin_dba",
                password: "123456A",
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
                user: "admin_dba",
                password: "123456A",
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
                user: "admin_dba",
                password: "123456A",
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasClientes(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM clientes 
            where clienteid = ${key1}
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
exports.verMasClientes = verMasClientes;
;
function clientesInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM clientes 
            where clienteid = ${key1}
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
exports.clientesInfo = clientesInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasDanios(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM danios 
            where danioID = ${key1}
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
exports.verMasDanios = verMasDanios;
;
function daniosInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM danios 
            where danioID = ${key1}
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
exports.daniosInfo = daniosInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasEmpleados(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM empleados 
            where empleadoid = ${key1}
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
exports.verMasEmpleados = verMasEmpleados;
;
function empleadosInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM empleados 
            inner join puestos on puestos.puestoid = empleados.puestoid
            where empleadoid = ${key1}
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
exports.empleadosInfo = empleadosInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasEstatus(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM estatus_orden 
            where estatusid = ${key1}
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
exports.verMasEstatus = verMasEstatus;
;
function estatusInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM estatus_orden 
            where estatusid = ${key1}
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
exports.estatusInfo = estatusInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasExtras(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM extras 
            where extraid = ${key1}
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
exports.verMasExtras = verMasExtras;
;
function extrasInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM extras 
            where extraid = ${key1}
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
exports.extrasInfo = extrasInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasListaNegra(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM listanegra_Clientes 
            where listanegraid = ${key1}
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
exports.verMasListaNegra = verMasListaNegra;
;
function listaNegraInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM listanegra_Clientes
            inner join clientes on clientes.clienteid = listanegra_Clientes.clienteid
            where listanegra_Clientes.listanegraid = ${key1}
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
exports.listaNegraInfo = listaNegraInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasLocalidades(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM localidades 
            where localidadid = ${key1}
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
exports.verMasLocalidades = verMasLocalidades;
;
function localidadesInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM localidades 
            where localidadid = ${key1}
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
exports.localidadesInfo = localidadesInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasMarcas(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM marcas 
            where marcaid = ${key1}
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
exports.verMasMarcas = verMasMarcas;
;
function marcasInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM marcas 
            where marcaid = ${key1}
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
exports.marcasInfo = marcasInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasModelos(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM modelo_vehiculo 
            where modeloid = ${key1}
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
exports.verMasModelos = verMasModelos;
;
function modelosInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM modelo_vehiculo 
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            where modeloid = ${key1}
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
exports.modelosInfo = modelosInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasMultas(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM multas
            where multaid = ${key1}
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
exports.verMasMultas = verMasMultas;
;
function multasInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM multas
            where multaid = ${key1}
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
exports.multasInfo = multasInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasOrdenes(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM ordenes
            where ordenid = ${key1}
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
exports.verMasOrdenes = verMasOrdenes;
;
function ordenesInfo(key1) {
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
            inner join localidades on localidades.localidadid = ordenes.localidad_entregaid
            inner join localidades on localidades.localidadid = ordenes.localidad_devolucionid
            inner join vehiculos on vehiculos.vehiculoid = ordenes.vehiculoid
            inner join tarjetas on tarjetas.tarjetaid = ordenes.tarjetaid
            inner join clientes on clientes.clienteid = tarjetas.clienteid
            inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.modeloid
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            where ordenid = ${key1}
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
exports.ordenesInfo = ordenesInfo;
;
function ordenesChangeState(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            update ordenes set estatusid = 2
            where ordenid = ${key1}
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
exports.ordenesChangeState = ordenesChangeState;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasPuestosEmpleados(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM puestos
            where puestoid = ${key1}
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
exports.verMasPuestosEmpleados = verMasPuestosEmpleados;
;
function puestosEmpleadosInfo(key1) {
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
            where puestoid = ${key1}
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
exports.puestosEmpleadosInfo = puestosEmpleadosInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasReporteInicial(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            select * from reporte_inicial 
            where reporteinicialid = ${key1}
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
exports.verMasReporteInicial = verMasReporteInicial;
;
function reporteInicialInfo(key1) {
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
            inner join ordenes on ordenes.ordenid = reporte_inicial.ordenid
            inner join estatus_orden on estatus_orden.estatusid = ordenes.estatusid
            inner join empleados on empleados.empleadoid = reporte_inicial.receptorid
            where reporteinicialid = ${key1}
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
exports.reporteInicialInfo = reporteInicialInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasSeguros(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            select * from seguro 
            where seguroid = ${key1}
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
exports.verMasSeguros = verMasSeguros;
;
function segurosInfo(key1) {
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
            where seguroid = ${key1}
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
exports.segurosInfo = segurosInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasTarjetas(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            select * from tarjetas
            where tarjetaid = ${key1}
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
exports.verMasTarjetas = verMasTarjetas;
;
function tarjetasInfo(key1) {
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
            inner join clientes on clientes.clienteid = tarjetas.clienteid
            where tarjetaid = ${key1}
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
exports.tarjetasInfo = tarjetasInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasVehiculos(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            select * from vehiculos
            where vehiculoid = ${key1}
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
exports.verMasVehiculos = verMasVehiculos;
;
function vehiculosInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            select * from vehiculos
            inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.modeloid
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            inner join categoria_vehiculo on categoria_vehiculo.categoria_vehiculoid = vehiculos.categoria_vehiculoid
            where vehiculoid = ${key1}
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
exports.vehiculosInfo = vehiculosInfo;
;
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
function verMasFacturasRI(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            SELECT * FROM facturas 
            where facturaid = ${key1}
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
exports.verMasFacturasRI = verMasFacturasRI;
;
function verMasFacturasRF(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function prueba() {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
                SELECT * FROM facturas 
                where facturaid = ${key1}
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
exports.verMasFacturasRF = verMasFacturasRF;
;
function facturasRIInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            select * from facturas
            inner join ordenes on ordenes.ordenid = facturas.ordenid
            inner join reporte_inicial on reporte_inicial.reporteinicialid = facturas.reporteinicialid
            inner join estatus_orden on estatus_orden.estatusid = ordenes.estatusid
            inner join vehiculos on vehiculos.vehiculoid = ordenes.vehiculoid
            inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.modeloid
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            where facturaid = ${key1}
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
exports.facturasRIInfo = facturasRIInfo;
;
function facturasRFInfo(key1) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
            });
            const sqlStatement = `
            select * from facturas
            inner join ordenes on ordenes.ordenid = facturas.ordenid
            inner join reporte_final on reporte_final.reportefinalID = facturas.reportefinalid
            inner join estatus_orden on estatus_orden.estatusid = ordenes.estatusid
            inner join vehiculos on vehiculos.vehiculoid = ordenes.vehiculoid
            inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.modeloid
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            where facturaid = ${key1}
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
exports.facturasRFInfo = facturasRFInfo;
;
//# sourceMappingURL=dbConnectionManagerSeeMoore.js.map