import oracledb from "oracledb";
import * as types from "./types";

const dbConfig = require("./dbConfig");


//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasCaracteristicas(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM caracteristicas
            WHERE caracteristicas.caracteristicaID = ${key1}
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

    async function caracteristicaInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM Caracteristicas
            WHERE CARACTERISTICAID = '${key1}'
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasCategorias(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM categoria_vehiculo
            WHERE categoria_vehiculo.categoria_vehiculoID = ${key1}
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

    async function categoriasInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM categoria_vehiculo
            WHERE categoria_vehiculo.categoria_vehiculoID = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:

async function verMasClientes(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM clientes 
            where clienteid = ${key1}
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

    async function clientesInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM clientes 
            where clienteid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:


async function verMasDanios(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM danios 
            where danioID = ${key1}
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

    async function daniosInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM danios 
            where danioID = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasEmpleados(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM empleados 
            where empleadoid = ${key1}
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

    async function empleadosInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM empleados 
            inner join puestos on puestos.puestoid = empleados.puestoid
            where empleadoid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasEstatus(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM estatus_orden 
            where estatusid = ${key1}
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

    async function estatusInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM estatus_orden 
            where estatusid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasExtras(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM extras 
            where extraid = ${key1}
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

    async function extrasInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM extras 
            where extraid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasListaNegra(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM listanegra_Clientes 
            where listanegraid = ${key1}
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

    async function listaNegraInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM listanegra_Clientes
            inner join clientes on clientes.clienteid = listanegra_Clientes.clienteid
            where listanegra_Clientes.listanegraid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasLocalidades(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM localidades 
            where localidadid = ${key1}
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

    async function localidadesInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM localidades 
            where localidadid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasMarcas(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM marcas 
            where marcaid = ${key1}
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

    async function marcasInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM marcas 
            where marcaid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasModelos(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM modelo_vehiculo 
            where modeloid = ${key1}
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

    async function modelosInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM modelo_vehiculo 
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            where modeloid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasMultas(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM multas
            where multaid = ${key1}
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

    async function multasInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM multas
            where multaid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasOrdenes(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM ordenes
            where ordenid = ${key1}
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

    async function ordenesInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
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
    async function ordenesChangeState(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            update ordenes set estatusid = 2
            where ordenid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasPuestosEmpleados(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM puestos
            where puestoid = ${key1}
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

    async function puestosEmpleadosInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from puestos 
            where puestoid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasReporteInicial(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from reporte_inicial 
            where reporteinicialid = ${key1}
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

    async function reporteInicialInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from reporte_inicial 
            inner join ordenes on ordenes.ordenid = reporte_inicial.ordenid
            inner join estatus_orden on estatus_orden.estatusid = ordenes.estatusid
            inner join empleados on empleados.empleadoid = reporte_inicial.receptorid
            where reporteinicialid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasSeguros(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from seguro 
            where seguroid = ${key1}
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

    async function segurosInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from seguro 
            where seguroid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasTarjetas(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from tarjetas
            where tarjetaid = ${key1}
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

    async function tarjetasInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from tarjetas
            inner join clientes on clientes.clienteid = tarjetas.clienteid
            where tarjetaid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasVehiculos(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from vehiculos
            where vehiculoid = ${key1}
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

    async function vehiculosInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from vehiculos
            inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.modeloid
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            inner join categoria_vehiculo on categoria_vehiculo.categoria_vehiculoid = vehiculos.categoria_vehiculoid
            where vehiculoid = ${key1}
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
//---------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------Ver mas de:
async function verMasFacturasRI(key1: String) {
    //async function prueba() {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            SELECT * FROM facturas 
            where facturaid = ${key1}
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
    
    async function verMasFacturasRF(key1: String) {
        //async function prueba() {
            let connection
            try {
                connection = await oracledb.getConnection({
                user: "admin_dba",
                password: "123456A",
                connectionString: "localhost/xe"
                });
        
                const sqlStatement: string = `
                SELECT * FROM facturas 
                where facturaid = ${key1}
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


    async function facturasRIInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from facturas
            inner join ordenes on ordenes.ordenid = facturas.ordenid
            inner join reporte_inicial on reporte_inicial.reporteinicialid = facturas.reporteinicialid
            inner join estatus_orden on estatus_orden.estatusid = ordenes.estatusid
            inner join vehiculos on vehiculos.vehiculoid = ordenes.vehiculoid
            inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.modeloid
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            where facturaid = ${key1}
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
    
    async function facturasRFInfo(key1: String) {
        let connection
        try {
            connection = await oracledb.getConnection({
            user: "admin_dba",
            password: "123456A",
            connectionString: "localhost/xe"
            });
    
            const sqlStatement: string = `
            select * from facturas
            inner join ordenes on ordenes.ordenid = facturas.ordenid
            inner join reporte_final on reporte_final.reportefinalID = facturas.reportefinalid
            inner join estatus_orden on estatus_orden.estatusid = ordenes.estatusid
            inner join vehiculos on vehiculos.vehiculoid = ordenes.vehiculoid
            inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.modeloid
            inner join marcas on marcas.marcaid = modelo_vehiculo.marcaid
            where facturaid = ${key1}
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
    //---------------------------------------------------------------------------------------------------------------

export { verMasCaracteristicas, caracteristicaInfo, verMasCategorias, categoriasInfo, verMasClientes, clientesInfo, verMasDanios, daniosInfo, verMasEmpleados, empleadosInfo };
export { verMasEstatus, estatusInfo, verMasExtras, extrasInfo, verMasListaNegra, listaNegraInfo, verMasLocalidades, localidadesInfo}
export {verMasMarcas, marcasInfo, verMasModelos, modelosInfo, verMasMultas, multasInfo, verMasOrdenes, ordenesInfo, verMasPuestosEmpleados, puestosEmpleadosInfo}
export {verMasReporteInicial, reporteInicialInfo, verMasSeguros, segurosInfo, verMasTarjetas, tarjetasInfo, verMasVehiculos, vehiculosInfo}
export {verMasFacturasRI, verMasFacturasRF, facturasRIInfo, facturasRFInfo,}
export {ordenesChangeState}