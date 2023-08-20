import oracledb from "oracledb";
import * as types from "./types";

const dbConfig = require("./dbConfig");


//----------------------------------------------------------------------------------------------------Mostrando tablas
async function tableCaracteristicas() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM caracteristicas
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

async function tableCategorias() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM categoria_vehiculo
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

async function tableClientes() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Clientes
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

async function tableDanios() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Danios
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

async function tableEmpleados() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Empleados
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

async function tableEstatusOrden() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Estatus_Orden
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

async function tableExtras() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Extras
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

async function tableFacturas() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Facturas
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

async function tableListaNegra() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM ListaNegra_Clientes
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

async function tableLocalidades() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Localidades
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

async function tableMarcas() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        SELECT * FROM Marcas
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

async function tableModelos() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from modelo_vehiculo
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

async function tableMultas() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from multas
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

async function tableOrdenes() {
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

async function tablePuestos() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from puestos
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

async function tableReporteFinal() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from reporte_final
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


async function tableReporteInicial() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from reporte_inicial
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


async function tableSeguros() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from seguro
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


async function tableTarjetas() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from tarjetas
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


async function tableVehiculos() {
    let connection
    try {
        connection = await oracledb.getConnection({
        user: "admin_dba",
        password: "123456A",
        connectionString: "localhost/xe"
        });

        const sqlStatement: string = `
        select * from Vehiculos
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



//----------------------------------------------------------------------------------------------------Mostrando tablas
export { tableCaracteristicas, tableCategorias, tableClientes, tableDanios, tableEmpleados, tableEstatusOrden, tableExtras, tableFacturas, tableListaNegra };
export { tableLocalidades, tableMarcas, tableModelos, tableMultas, tableOrdenes, tablePuestos, tableReporteFinal, tableReporteInicial, tableSeguros, tableTarjetas, tableVehiculos };