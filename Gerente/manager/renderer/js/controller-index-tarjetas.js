//Aqui se generan las tablas de manera dinamica 
//Se muestran algunos atributos

document.getElementById('caracteristicas').addEventListener('click', async function() {
    // Creamos un objetos para localizar los parametros
    //let params = new URLSearchParams(location.search);
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/managerTarjets/tableCaracteristicas`;
    console.log(apiUrl)

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();

    // Definimos las opciones de la peticion
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    // Creamos la peticion
    try {
        console.log("Aqui hay error")
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        //let datos = '';
        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Caracteristicas de vehiculos';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.CARACTERISTICAID}</td>
                    <td>${element.NOMBRE}</td>
                    <td>${element.DESCRIPCION}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasCaracteristicas(${element.CARACTERISTICAID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});




document.getElementById('categorias').addEventListener('click', async function() {
    // Creamos un objetos para localizar los parametros
    //let params = new URLSearchParams(location.search);
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/managerTarjets/tableCategorias`;
    console.log(apiUrl)

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();

    // Definimos las opciones de la peticion
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    // Creamos la peticion
    try {
        console.log("Aqui hay error")
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        //let datos = '';
        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Categorias de vehiculos';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.CATEGORIA_VEHICULOID}</td>
                    <td>${element.NOMBRE}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasCategorias(${element.CATEGORIA_VEHICULOID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('clientes').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableClientes`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        //let datos = '';
        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Clientes registrados';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombres</th>
            <th>Usuario</th>
            <th>Licencia</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.CLIENTEID}</td>
                    <td>${element.NOMBRES}</td>
                    <td>${element.USUARIO}</td>
                    <td>${element.LICENCIA}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasClientes(${element.CLIENTEID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('danios').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableDanios`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Posibles danios que puede sufrir un vehiculo';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.DANIOID}</td>
                    <td>${element.NOMBRE}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasDanios(${element.DANIOID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('empleados').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableEmpleados`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        //let datos = '';
        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Empleados contratados';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombres</th>
            <th>Usuario</th>
            <th>Puesto</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.EMPLEADOID}</td>
                    <td>${element.NOMBRES}</td>
                    <td>${element.USUARIO}</td>
                    <td>${element.PUESTOID}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasEmpleados(${element.EMPLEADOID})"">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('estatus').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableEstatusOrden`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Los estados que puede tomar una orden';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.ESTATUSID}</td>
                    <td>${element.NOMBRE}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasEstatus(${element.ESTATUSID})"">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('extras').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableExtras`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Los extras que se pueden agregar a los vehiculos';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.EXTRAID}</td>
                    <td>${element.NOMBRE}</td>
                    <td>${element.COSTO}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasExtras(${element.EXTRAID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('facturas').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableFacturas`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Las facturas registradas en el sistema';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Orden</th>
            <th>Reporte Inicial ID</th>
            <th>Reporte Final ID</th>
            <th>SubTotal</th>
            <th>Total</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.FACTURAID}</td>
                    <td>${element.ORDENID}</td>
                    <td>${element.REPORTEINICIALID}</td>
                    <td>${element.REPORTEFINALID}</td>
                    <td>${element.SUBTOTAL}</td>
                    <td>${element.TOTAL}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasFacturas(${element.FACTURAID}, ${element.REPORTEINICIALID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('lista-negra').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableListaNegra`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra a los clientes que se encuentran en la lista negra';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Cliente</th>
            <th>Motivo</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.LISTANEGRAID}</td>
                    <td>${element.CLIENTEID}</td>
                    <td>${element.MOTIVO}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasListaNegra(${element.LISTANEGRAID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('localidades').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableLocalidades`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra las localidades de la empresa';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.LOCALIDADID}</td>
                    <td>${element.DIRECCION}</td>
                    <td>${element.TELEFONO}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasLocalidades(${element.LOCALIDADID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('marcas').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableMarcas`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra las marcas de vehiculos que maneja la empresa';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.MARCAID}</td>
                    <td>${element.NOMBRE}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasMarcas(${element.MARCAID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('modelos').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableModelos`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra los modelos de vehiculos que maneja la empresa';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.MODELOID}</td>
                    <td>${element.NOMBREMODELO}</td>
                    <td>
                        <img src="${element.IMAGEN}" alt="" style=" width: 200px; height: 150px; border-radius: 10px 0 0 10px;">
                    </td>
                    <td><button class="btn btn-success " type="button" onclick="verMasModelos(${element.MODELOID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('multas').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableMultas`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra las posibles multas que se pueden cargar a una factura';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.MULTAID}</td>
                    <td>${element.NOMBRE}</td>
                    <td>${element.COSTO}</td>
                    <td><button class="btn btn-success" type="button" onclick="verMasMultas(${element.MULTAID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('ordenes').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableOrdenes`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('tabla-de-tablas').innerHTML += `<p class="family-font titulo">Ordenes Pendientes</p>`;
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra las ordenes generadas por los clientes';
        document.getElementById('contenedor-tablas').innerHTML += `
            <p class="family-font titulo">Ordenes Activas</p>
            <table class="table-styles">
                <thead>
                    <th>Identificador</th>
                    <th>EstatusID</th>
                    <th>TarjetaID</th>
                    <th>VehiculoID</th>
                    <th>Acciones</th>
                </thead>
                <tbody id="cuerpo-activa">

                </tbody>
            </table>
            <p class="family-font titulo">Ordenes Finalizadas</p>
            <table class="table-styles">
                <thead>
                    <th>Identificador</th>
                    <th>EstatusID</th>
                    <th>TarjetaID</th>
                    <th>VehiculoID</th>
                    <th>Acciones</th>
                </thead>
                <tbody id="cuerpo-finalizada">

                </tbody>
            </table>
        `
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>EstatusID</th>
            <th>TarjetaID</th>
            <th>VehiculoID</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            if (element.NOMBRE == 'Pendiente') {
                document.getElementById('tabla-de-tablas').innerHTML +=`
                <tr>
                    <td>${element.ORDENID}</td>
                    <td>${element.NOMBRE}</td>
                    <td>${element.TARJETAID}</td>
                    <td>${element.VEHICULOID}</td>
                    <td>
                        <button class="btn btn-success " type="button" onclick="verMasOrdenes(${element.ORDENID})">Ver más</button>
                        <button class="btn btn-warning " type="button" onclick="activarOrden(${element.ORDENID})">Activar</button>
                        <button class="btn btn-danger " type="button" onclick="">Rechazar</button>
                    </td>
                </tr>
                `
                
            } else if (element.NOMBRE == 'Activa') {
                document.getElementById('cuerpo-activa'). innerHTML += `
                    <tr>
                        <td>${element.ORDENID}</td>
                        <td>${element.NOMBRE}</td>
                        <td>${element.TARJETAID}</td>
                        <td>${element.VEHICULOID}</td>
                        <td>
                            <button class="btn btn-success " type="button" onclick="verMasOrdenes(${element.ORDENID})">Ver más</button>
                            <button class="btn btn-warning " type="button" onclick="">Finalizar</button>
                        </td>
                    </tr>
                `;
            } else {
                document.getElementById('cuerpo-finalizada'). innerHTML += `
                    <tr>
                        <td>${element.ORDENID}</td>
                        <td>${element.NOMBRE}</td>
                        <td>${element.TARJETAID}</td>
                        <td>${element.VEHICULOID}</td>
                        <td><button class="btn btn-success " type="button" onclick="verMasOrdenes(${element.ORDENID})">Ver más</button></td>
                    </tr>
                `;
            }


        });
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('puestos').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tablePuestos`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestras los puestos que pueden ocupar los empleados en la empresa';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.PUESTOID}</td>
                    <td>${element.NOMBRE}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasPuestosEmpleados(${element.PUESTOID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('reporte-final').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableReporteFinal`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra los reportes finales generados';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Orden</th>
            <th>Receptor</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.REPORTEFINALID}</td>
                    <td>${element.ORDENID}</td>
                    <td>${element.RECEPTORID}</td>
                    <td><button class="btn btn-success " type="button" onclick=" "">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('reporte-inicial').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableReporteInicial`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra los reportes finales generados';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Orden</th>
            <th>Receptor</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.REPORTEINICIALID}</td>
                    <td>${element.ORDENID}</td>
                    <td>${element.RECEPTORID}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasReporteInicial(${element.REPORTEINICIALID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('seguros').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableSeguros`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra los seguros que se pueden aplicar a los vehiculos';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.SEGUROID}</td>
                    <td>${element.NOMBRE}</td>
                    <td>${element.COSTO}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasSeguros(${element.SEGUROID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('tarjetas').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableTarjetas`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra las tarjetas de credito que han sido ingresadas por los clientes';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Cliente</th>
            <th>Tipo de tarjeta</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.TARJETAID}</td>
                    <td>${element.CLIENTEID}</td>
                    <td>${element.TIPO_TARJETAID}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasTarjetas(${element.TARJETAID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


document.getElementById('vehiculos').addEventListener('click', async function() {
    const apiUrl = `http://localhost:3000/managerTarjets/tableVehiculos`;
    console.log(apiUrl)

    const formData = new URLSearchParams();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log("Esta es la data")
        console.log(data)
        document.getElementById('tabla-de-tablas').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = '';
        document.getElementById('titulo-tabla').innerHTML = 'Muestra los vehiculos que posee la empresa';
        document.getElementById('tabla-de-tablas').innerHTML += `
        <thead>
            <th>Identificador</th>
            <th>Categoria de vehiculo</th>
            <th>Modelo de vehiculo</th>
            <th>Kilometraje actual</th>
            <th>Acciones</th>
        </thead>
        `;
        data.forEach(element => {
            document.getElementById('tabla-de-tablas').innerHTML += `
            
            <tbody>
                <tr>
                    <td>${element.VEHICULOID}</td>
                    <td>${element.CATEGORIA_VEHICULOID}</td>
                    <td>${element.MODELOID}</td>
                    <td>${element.KILOMETRAJE}</td>
                    <td><button class="btn btn-success " type="button" onclick="verMasVehiculos(${element.VEHICULOID})">Ver más</button></td>
                </tr>
            </tbody>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});


