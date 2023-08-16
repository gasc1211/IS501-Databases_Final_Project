import oracledb from "oracledb";
import * as types from "./types";

const dbConfig = {
  user: "system",
  password: "ProyectoBD1",
  connectionString: "localhost/xe",
};

async function initConnection() {
  try {
    // Attempt a connection to the database
    await oracledb.createPool(dbConfig);
  } catch (error) {
    console.error(error);
  } finally {
    // Close the connection
    await closeConnectionPool();
  }
}

// Validar si el usuario existe
async function logIn(key1: String, key2: String) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
        SELECT * FROM Clientes
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
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function userInfo(key1: String) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
        SELECT * FROM Clientes
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
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function userOrdenActive(key1: String) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
        SELECT ord.ordenid, mar.nombre, ord.fecha_entrega, ord.fecha_devolucion
        FROM ordenes ord
        JOIN estatus_orden est ON est.estatusid = ord.estatusid
        JOIN clientes cli ON cli.clienteid = ord.clienteid
        JOIN vehiculos veh ON veh.vehiculoid = ord.vehiculoid
        JOIN modelo_vehiculo mo_veh ON mo_veh.modeloid = veh.modeloid
        JOIN marcas mar ON mar.marcaid = mo_veh.marcaid
        JOIN localidades locali_ent ON locali_ent.localidadid = ord.localidad_entregaid
        JOIN localidades locali_dev ON locali_dev.localidadid = ord.localidad_devolucionid
        JOIN seguro seg ON seg.seguroid = ord.seguroid
        WHERE cli.usuario = '${key1}'
        `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function userOrdenFinished(key1: String) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
        SELECT ord.ordenid, modelo_vehiculo.nombreModelo, ord.fecha_entrega, ord.fecha_devolucion
        FROM ordenes ord
        INNER JOIN Estatus_Orden ON estatus_orden.estatusid = ord.estatusid
        inner join clientes on clientes.clienteid = ord.clienteid
        inner join vehiculos on vehiculos.vehiculoid = ord.vehiculoid
        inner join modelo_vehiculo on modelo_vehiculo.modeloid = vehiculos.vehiculoid
        where Estatus_Orden.nombre = 'Finalizada' and clientes.usuario = '${key1}'
        `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function userAssociatedCard(key1: String) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
        select Tipo_Tarjeta.Nombre, Tarjetas.Num_Tarjeta, clientes.usuario, Tarjetas.tarjetaid
        FROM Tarjetas
        INNER JOIN tipo_tarjeta ON tipo_tarjeta.tipo_tarjetaid = tarjetas.tipo_tarjetaid
        INNER JOIN clientes on clientes.clienteid = tarjetas.clienteid
        where clientes.usuario = '${key1}'
        `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getLocalidades() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    SELECT DIRECCION, LOCALIDADID
    FROM LOCALIDADES
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getTipoTarjeta() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    SELECT TIPO_TARJETAID, NOMBRE
    FROM TIPO_TARJETA
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getLocalidad(key: number) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    SELECT DIRECCION, LOCALIDADID
    FROM LOCALIDADES
    WHERE LOCALIDADID=${key}
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getSeguros() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    SELECT SEGUROID, NOMBRE
    FROM SEGURO
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getAutos() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    SELECT veh.vehiculoid, mar.nombre AS Marca,
      mo_veh.imagen AS Imagen,
      mo_veh.nombremodelo AS Modelo, 
      cat_veh.nombre AS Categoria, 
      veh.combustible, 
      veh.precio
    FROM VEHICULOS VEH
    JOIN modelo_vehiculo mo_veh ON mo_veh.modeloid = veh.modeloid
    JOIN categoria_vehiculo cat_veh ON cat_veh.categoria_vehiculoid = veh.categoria_vehiculoid
    JOIN marcas mar ON mar.marcaid = mo_veh.marcaid
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getAuto(key: number) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    SELECT veh.vehiculoid, mar.nombre AS Marca,
      mo_veh.imagen AS Imagen,
      mo_veh.nombremodelo AS Modelo, 
      cat_veh.nombre AS Categoria, 
      veh.combustible, 
      veh.precio
    FROM VEHICULOS VEH
    JOIN modelo_vehiculo mo_veh ON mo_veh.modeloid = veh.modeloid
    JOIN categoria_vehiculo cat_veh ON cat_veh.categoria_vehiculoid = veh.categoria_vehiculoid
    JOIN marcas mar ON mar.marcaid = mo_veh.marcaid
    WHERE veh.vehiculoid = ${key}
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getExtras() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    SELECT *
    FROM EXTRAS
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function getListaExtras(key: String) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    ${key}
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function crearUser(key1: any) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const sqlStatement: string = `
    INSERT INTO CLIENTES (NOMBRES, APELLIDOS, DNI, LICENCIA, CELULAR, CORREOELECTRONICO, DIRECCION, USUARIO, CONTRASENIA)
    VALUES (:nombreNuevoUser, :apellidoNuevoUser, :DNINuevoUser, :licenciaNuevoUser, :telNuevoUser, :emailNuevoUser, :dirNuevoUser, :userNuevoUser, :passNuevoUser)
    `;

    const result = await connection.execute(sqlStatement, key1, { autoCommit: true });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
};

// async function crearUsuario(key1: any, key2: any) {
//   let connection;
//   try {
//     connection = await oracledb.getConnection(dbConfig);

//     const options: Object = {
//       outFormat: oracledb.OUT_FORMAT_OBJECT,
//     };

//     const scrip1 = await connection.execute(
//       `CREATE USER C##${key2} IDENTIFIED BY ${key1}`
//     );

//     const scrip2 = await connection.execute(
//       `GRANT C##Clientes TO C##${key2}`
//     );

//     const result = await connection.commit();

//     connection.close(); // Close the connection

//     console.log(scrip1, scrip2, result);
    
//     return result;
//   } catch (error) {

//     console.error('An error occurred:', error);

//     console.log(error);
//     throw error;
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
// };

async function crearTarjeta(key1: any) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const sqlStatement: string = `
    INSERT INTO TARJETAS (CLIENTEID, NUM_TARJETA, CSC, FECHA_VENCIMIENTO, TIPO_TARJETAID)
    VALUES (:clienteID, :numTarjeta, :cvv, TO_DATE(:fechaVencimiento, 'YYYY-MM-DD'), :tipoID)
    `;
    
    const result = await connection.execute(sqlStatement, key1, { autoCommit: true });
    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
};

async function finalizarOrden(key1: any) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const sqlStatement: string = `
    INSERT INTO TARJETAS (CLIENTEID, NUM_TARJETA, CSC, FECHA_VENCIMIENTO, TIPO_TARJETAID)
    VALUES (:clienteID, :numTarjeta, :cvv, TO_DATE(:fechaVencimiento, 'YYYY-MM-DD'), :tipoID)
    `;
    
    const result = await connection.execute(sqlStatement, key1, { autoCommit: true });
    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
};

async function dropTarjeta(key: number) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const sqlStatement: string = `
    DELETE FROM TARJETAS
    WHERE TARJETAID=${key}
    `;

    const options: Object = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sqlStatement, [], options);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function closeConnectionPool() {
  try {
    await oracledb.getPool().close(10);
  } catch (error) {
    console.error(error);
  }
}

initConnection();

export { logIn, userInfo, userOrdenActive, userAssociatedCard, userOrdenFinished, getLocalidades, getLocalidad, getSeguros, getAutos, getAuto, getExtras, getListaExtras, crearUser, getTipoTarjeta, crearTarjeta, dropTarjeta, finalizarOrden };
