const regresar = document.getElementById("regresar")
regresar.addEventListener("click", function(){
    window.location.href = "./extras.html"
})

const verPerfil = document.getElementById("verPerfil")
verPerfil.addEventListener("click", function(){
    window.location.href = "./infoUser.html"
})

const cerrarSesion = document.getElementById("cerrarSesion")
cerrarSesion.addEventListener("click", function(){
    window.location.href = "../../src/landingPage/index.html"
})

// ------------------------------------------------------------------------------
// Datos necesarios para crear Orden
const localidadEntrega = sessionStorage.getItem("localidadEntrega");
const localidadRecogida = sessionStorage.getItem("localidadRecogida");
const fechaHoraEntrega = sessionStorage.getItem("fechaEntrega");
const fechaHoraRecogida = sessionStorage.getItem("fechaRecogida");
const seguroID = sessionStorage.getItem("seguro");
const autoID = sessionStorage.getItem("autoID")
const estatusOrden = '1';
let clienteID;
let extrasEnTexto = sessionStorage.getItem('nombresExtras')
let extrasNombres = JSON.parse(extrasEnTexto)

// Obtener el día, mes y año
let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1; // Sumar 1, ya que los meses van de 0 a 11
let anio = fechaActual.getFullYear();

// Formatear el mes y día para que tengan siempre dos dígitos
if (mes < 10) {
    mes = '0' + mes;
}
if (dia < 10) {
    dia = '0' + dia;
}

const horaActual = new Date();

// Obtener la hora, los minutos y los segundos
const horas = horaActual.getHours();
const minutos = horaActual.getMinutes();

// Formatear la hora en un formato legible
const horaFormateada = `${horas}:${minutos}`;

// Crear una cadena en el formato deseado (DD-MM-YYYY)
// let fechaFormateada = anio + '-' + mes + '-' + dia;
let fechaFormateada = `${anio}-${mes}-${dia} ${horaFormateada}`;

// ------------------------------------------------------------------------------

const username = sessionStorage.getItem('username');
document.addEventListener("DOMContentLoaded", async function() {

    // Definimos la url
    const apiUrlLocalEnt = `http://localhost:3000/getLocalidad/${localidadEntrega}`;

    // Definimos las opciones de la peticion
    const requestOptionsLocEnt = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Creamos la peticion
    let saveLocalidadEnt;
    try {
        const response = await fetch(apiUrlLocalEnt, requestOptionsLocEnt);
        arregloLocalidadEnt = await response.json();

        arregloLocalidadEnt.forEach(element => {
            saveLocalidadEnt = element.DIRECCION;
        });

    } catch (error) {
        console.error('Error:', error);
    }

    // Definimos la url
    const apiUrlLocalRec = `http://localhost:3000/getLocalidad/${localidadRecogida}`;

    // Definimos las opciones de la peticion
    const requestOptionsLocRec = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Creamos la peticion
    let saveLocalidadRec;
    try {
        const response = await fetch(apiUrlLocalRec, requestOptionsLocRec);
        arregloLocalidadRec = await response.json();

        arregloLocalidadRec.forEach(element => {
            saveLocalidadRec = element.DIRECCION
        });

    } catch (error) {
        console.error('Error:', error);
    }

    const resumenOrden = document.getElementById("resumenOrden");

    resumenOrden.innerHTML = `
    <div class="col-12">
        <h2>Órden</h2>
    </div>
    <div class="col-4"><p><b>Fecha de Entrega:</b> ${fechaHoraRecogida}</p></div>
    <div class="col-4"><p><b>Fecha de Debolución:</b> ${fechaHoraEntrega}</p></div>
    <div class="col-4"><p><b>Fecha de Emisión:</b> ${fechaFormateada}</p></div>
    <div class="col-4"><p><b>Lugar de Entrega:</b> ${saveLocalidadRec}</p></div>
    <div class="col-4"><p><b>Lugar de Devolucón:</b> ${saveLocalidadEnt}</p></div>
    `

    // Definimos la url
    const apiUrlDatosUser = `http://localhost:3000/userInfo`;

    const formData = new URLSearchParams();
    formData.append('username', username);

    // Definimos las opciones de la peticion
    const requestOptionsDatosUser = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    // Creamos la peticion
    try {
        const response = await fetch(apiUrlDatosUser, requestOptionsDatosUser);
        datosUser = await response.json();
        
        const datosPersonales = document.getElementById("datosPersonales");

        datosUser.forEach(dato => {

            clienteID = dato.CLIENTEID
            clienteID = clienteID.toString()

            datosPersonales.innerHTML = `
            <div class="row">
                <h2>Datos Personales</h2>
            </div>
            <div class="row">
                <div class="col-6"><p><b>Nombre:</b> ${dato.NOMBRES}</p></div>
                <div class="col-6"><p><b>Apellido:</b> ${dato.APELLIDOS}</p></div>
                <div class="col-6"><p><b>Email:</b> ${dato.CORREOELECTRONICO}</p></div>
                <div class="col-6"><p><b>Teléfono:</b> ${dato.CELULAR}</p></div>
                <div class="col-6"><p><b>No. Identidad:</b> ${dato.DNI}</p></div>
                <div class="col-6"><p><b>Licencia de Conducir:</b> ${dato.LICENCIA}</p></div>
            </div>
            `;

        })


    } catch (error) {
        console.error('Error:', error);
    }


    // Definimos la url
    const apiUrlDatosVehiculo = `http://localhost:3000/getAuto/${autoID}`;

    // Definimos las opciones de la peticion
    const requestOptionsDatosVeh = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Creamos la peticion
    try {
        const response = await fetch(apiUrlDatosVehiculo, requestOptionsDatosVeh);
        datosAuto = await response.json();
        
        const datosAutoResumen = document.getElementById("datosAutoResumen");

        datosAuto.forEach(dato => {

            datosAutoResumen.innerHTML = `
            <div class="row">
                <h2>Vehículo</h2>
            </div>
            <div class="row">
                <div class="col-6"><p><b>Combustible:</b> ${dato.COMBUSTIBLE}</p></div>
                <div class="col-6"><p><b>Marca:</b> ${dato.MARCA}</p></div>
                <div class="col-6"><p><b>Modelo:</b> ${dato.MODELO}</p></div>
                <div class="col-6"><p><b>Categoría:</b> ${dato.CATEGORIA}</p></div>
                <div class="col-6"><p><b>Precio:</b> ${dato.PRECIO}</p></div>
            </div>
            `;

        })


    } catch (error) {
        console.error('Error:', error);
    }

    const contadorExtras = sessionStorage.getItem("contadorExtras")

    arrayExtras = [];

    for(i = 1; i <= contadorExtras; i++){
        arrayExtras.push(sessionStorage.getItem(`extraID${i}`))
    }

    function generateSQLQuery(keys) {
        if (!Array.isArray(keys) || keys.length === 0) {
            return "SELECT NOMBRE, COSTO FROM EXTRAS WHERE 1=0";
        }
    
        const conditions = keys.map(key => `EXTRAID=${key}`).join(' OR ');
    
        const query = `SELECT NOMBRE, COSTO FROM EXTRAS WHERE ${conditions}`;
    
        return query;
    }
    
    const sqlQuery = generateSQLQuery(arrayExtras);
    // const nuevo = sqlQuery.replace('/\n/g', ' ');

    // Definimos la url
    const apiUrlListaExtras = `http://localhost:3000/getListaExtras/${sqlQuery}`;

    // Definimos las opciones de la peticion
    const requestOptionsListaExtras = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Creamos la peticion
    try {
        const response = await fetch(apiUrlListaExtras, requestOptionsListaExtras);
        listaExtras = await response.json();

        const tablaExtras =  document.getElementById("tablaExtras")

        tablaExtras.innerHTML = '';
        
        listaExtras.forEach(extraAgregado => {

            tablaExtras.innerHTML += `
            <tr>
                <td>${extraAgregado.NOMBRE}</td>
                <td>$${extraAgregado.COSTO}</td>
            </tr>
            `;

        })


    } catch (error) {
        console.error('Error:', error);
    }

});

document.getElementById("finalizarOrden").addEventListener("click", async function(){

    // Definimos la url
    const apiUrl = `http://localhost:3000/finalizarOrden`;
    
    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();
    formData.append('localidadEntrega', localidadEntrega);
    formData.append('localidadRecogida', localidadRecogida);
    formData.append('fechaHoraEntrega', fechaHoraEntrega);
    formData.append('fechaHoraRecogida', fechaHoraRecogida);
    formData.append('seguroID', seguroID);
    formData.append('autoID', autoID);
    formData.append('fechaFormateada', fechaFormateada);
    formData.append('estatusOrden', estatusOrden);
    formData.append('clienteID', clienteID);
    formData.append('extrasNombres', extrasNombres);

    // Definimos las opciones de la peticion
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

        console.log('Respuesta:', data);

    } catch (error) {
        console.error('Error:', error);
    }

})