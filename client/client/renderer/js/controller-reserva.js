const regresar = document.getElementById("regresar")
regresar.addEventListener("click", function(){
    window.location.href = "./infoUser.html"
})


document.addEventListener("DOMContentLoaded", async function() {
    // Definimos la url
    const apiUrl = `http://localhost:3000/getLocalidades`;

    // Definimos las opciones de la peticion
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Creamos la peticion
    try {
        const response = await fetch(apiUrl, requestOptions);
        const localidades = await response.json();

        const listaLocalidadesRecogida = document.getElementById("localidadesRecogida");
        listaLocalidadesRecogida.innerHTML = `<option value="" disabled selected>Selecciona una opción</option>`
        
        const listaLocalidadesEntrega = document.getElementById("localidadesEntrega");
        listaLocalidadesEntrega.innerHTML = `<option value="" disabled selected>Selecciona una opción</option>`

        // Para localidades de Recogida
        localidades.forEach(localidad => {
            const optionLocalidad = document.createElement("option");
            optionLocalidad.value= `${localidad.LOCALIDADID}`;
            optionLocalidad.textContent=`${localidad.DIRECCION}`;

            listaLocalidadesRecogida.appendChild(optionLocalidad);
            
        });

        // Para localidades de Entrega
        localidades.forEach(localidad => {
            const optionLocalidad = document.createElement("option");
            optionLocalidad.value= `${localidad.LOCALIDADID}`;
            optionLocalidad.textContent=`${localidad.DIRECCION}`;

            listaLocalidadesEntrega.appendChild(optionLocalidad);
            
        });

    } catch (error) {
        console.error('Error:', error);
    }

});

// ---------------------------------------------------------------------------------
// Seguros
document.addEventListener("DOMContentLoaded", async function() {
    // Definimos la url
    const apiUrl = `http://localhost:3000/getSeguros`;

    // Definimos las opciones de la peticion
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Creamos la peticion
    try {
        const response = await fetch(apiUrl, requestOptions);
        const seguros = await response.json();

        const listaSeguros = document.getElementById("seguros");
        listaSeguros.innerHTML = `<option value="" disabled selected>Selecciona una opción</option>`;

        // Para localidades de Recogida
        seguros.forEach(seguro => {
            const optionSeguro = document.createElement("option");
            optionSeguro.value= `${seguro.SEGUROID}`;
            optionSeguro.textContent=`${seguro.NOMBRE}`;

            listaSeguros.appendChild(optionSeguro);
            
        });

    } catch (error) {
        console.error('Error:', error);
    }

});

// ---------------------------------------------------------------------------------
// SECCION PARA CAPTURAR LOS VALORES DE QUE SELECCIONO EL USUARIO
let localidadRecogida;
let localidadEntrega;
let seguro;

const optionLocalRecogida = document.getElementById("localidadesRecogida");
const optionLocalEntrega = document.getElementById("localidadesEntrega");
const optionSeguro = document.getElementById("seguros");
const selectFechaRecogida = document.getElementById("fechaRecogida");
const selectFechaEntrega = document.getElementById("fechaEntrega");
const selectHoraRecogida = document.getElementById("horaRecogida");
const selectHoraEntrega = document.getElementById("horaEntrega");

optionLocalRecogida.addEventListener("change", function (){
    localidadRecogida = optionLocalRecogida.value;
});

optionLocalEntrega.addEventListener("change", function (){
    localidadEntrega = optionLocalEntrega.value;

});

optionSeguro.addEventListener("change", function(){
    seguro = optionSeguro.value;
});

document.getElementById("crearReserva").addEventListener("click", async function(){

    // Creamos un objetos para localizar los parametros
    let username = sessionStorage.getItem('username');

    let fechaHoraEntrega = [selectFechaEntrega.value, selectHoraEntrega.value].toString();
    fechaHoraEntrega = fechaHoraEntrega.replace(',', ' ');

    let fechaHoraRecogida = [selectFechaRecogida.value, selectHoraRecogida.value].toString();
    fechaHoraRecogida = fechaHoraRecogida.replace(',', ' ');

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('fechaRecogida', fechaHoraRecogida);
    sessionStorage.setItem('fechaEntrega', fechaHoraEntrega);
    sessionStorage.setItem('localidadEntrega', localidadEntrega);
    sessionStorage.setItem('localidadRecogida', localidadRecogida);
    sessionStorage.setItem('seguro', seguro);

    window.location.href = `../views/selectAuto.html`;

});