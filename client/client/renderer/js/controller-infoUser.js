const regresar = document.getElementById("regresar")
regresar.addEventListener("click", function(){
    window.location.href = "../../src/landingPage/index.html"
})

document.addEventListener("DOMContentLoaded", async function() {
    // Obtener los valores almacenados desde sessionStorage
    const username = sessionStorage.getItem('username');
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/userInfo`;

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();
    formData.append('username', username);

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
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

            let datos = '';

            data.forEach(element => {
                if(element['USUARIO'] == username){
                    datos = element;
                }
            });

            const nombreCliente = document.getElementById("nombreCliente");
            const apellidoCliente = document.getElementById("apellidoCliente");
            const emailCliente = document.getElementById("emailCliente");
            const telCliente = document.getElementById("telCliente");
            const dniCliente = document.getElementById("dniCliente");
            const licenciaCliente = document.getElementById("licenciaCliente");

            const parrafoNombre = document.createElement("p");
            const parrafoApellido = document.createElement("p");
            const parrafoEmail = document.createElement("p");
            const parrafoTel = document.createElement("p");
            const parrafoDNI = document.createElement("p");
            const parrafoLicencia = document.createElement("p");

            parrafoNombre.textContent = `Nombre: ${datos['NOMBRES']}`;
            parrafoApellido.textContent = `Apellido: ${datos['APELLIDOS']}`;
            parrafoEmail.textContent = `Email: ${datos['CORREOELECTRONICO']}`;
            parrafoTel.textContent = `Teléfono: ${datos['CELULAR']}`;
            parrafoDNI.textContent = `DNI: ${datos['DNI']}`;
            parrafoLicencia.textContent = `Número de Licencia: ${datos['LICENCIA']}`;

            nombreCliente.appendChild(parrafoNombre);
            apellidoCliente.appendChild(parrafoApellido);
            emailCliente.appendChild(parrafoEmail);
            telCliente.appendChild(parrafoTel);
            dniCliente.appendChild(parrafoDNI);
            licenciaCliente.appendChild(parrafoLicencia);

    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", async function() {
    // Obtener los valores almacenados desde sessionStorage
    const username = sessionStorage.getItem('username');
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/userOrdenActive`;

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();
    formData.append('username', username);

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
        const response = await fetch(apiUrl, requestOptions);
        const dataActiveOrders = await response.json();

        const formatoFechas = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        const tbody = document.getElementById("tbody")
        tbody.innerHTML = '';

        dataActiveOrders.forEach(orden => {

            const ordenRow = document.createElement("tr");

            for (const atributo in orden) {

                if(atributo == 'FECHA_ENTREGA'){
                    const fechaEntrega = new Date(orden[atributo]);
                    const fechaFormateada = fechaEntrega.toLocaleDateString('es-ES', formatoFechas);
                    const ordenCell = document.createElement("td");
                    ordenCell.textContent = `${fechaFormateada}`;
                    ordenRow.appendChild(ordenCell);

                }else if (atributo == 'FECHA_DEVOLUCION') {
                    const fechaEntrega = new Date(orden[atributo]);
                    const fechaFormateada = fechaEntrega.toLocaleDateString('es-ES', formatoFechas);
                    const ordenCell = document.createElement("td");
                    ordenCell.textContent = `${fechaFormateada}`;
                    ordenRow.appendChild(ordenCell);
                } else {
                    const ordenCell = document.createElement("td");
                    ordenCell.textContent = `${orden[atributo]}`;
                    ordenRow.appendChild(ordenCell);
                }

            }

            tbody.appendChild(ordenRow);
        });

    } catch (error) {
        console.error('Error:', error);
    }

});


document.addEventListener("DOMContentLoaded", async function() {
    // Obtener los valores almacenados desde sessionStorage
    const username = sessionStorage.getItem('username');
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/userOrdenFinished`;

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();
    formData.append('username', username);

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

        data.forEach(element => {
            document.getElementById('cuerpo-tabla-ordenes-finalizadas').innerHTML += `
            <tr>
                <td>${element.ORDENID}</td>
                <td>${element.NOMBREMODELO}</td>
                <td>${element.FECHA_ENTREGA}</td>
                <td>${element.FECHA_DEVOLUCION}</td>
            </tr>
            `; 
        });

    } catch (error) {
        console.error('Error:', error);
    }

});


document.addEventListener("DOMContentLoaded", async function() {
    // Obtener los valores almacenados desde sessionStorage
    const username = sessionStorage.getItem('username');
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/userAssociatedCard`;

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();
    formData.append('username', username);

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

        data.forEach(element => {
            document.getElementById('cuerpo-tabla-tarjetas-credito').innerHTML += `
            <tr>
            <td>${element.NOMBRE}</td>
            <td>${element.NUM_TARJETA}</td>
            <td><button id="${element.TARJETAID}" class="btn btn-danger btn-styles " type="button">Quitar</button></td>
            </tr>
            `; 

            const eliminarButton = document.getElementById(element.TARJETAID);
            eliminarButton.addEventListener('click', async function() {

                const apiUrlDelete = `http://localhost:3000/deleteCard`;

                // Creamos otro objeto para agregar los parametros a la peticion
                const formDataTarjeta = new URLSearchParams();
                formDataTarjeta.append('tarjetaID', element.TARJETAID);

                // Definimos las opciones de la peticion
                const requestOptionsTarjeta = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formDataTarjeta
                };

                try {
                    const deleteResponse = await fetch(apiUrlDelete, requestOptionsTarjeta);
                    // const dataRespuesta = await responseTarjeta.json();
                    if (deleteResponse.ok) {
                        // Eliminar la fila de la tabla después de eliminar la tarjeta en la base de datos
                        const row = eliminarButton.closest('tr');
                        row.remove();
                    } else {
                        console.error('Error al eliminar la tarjeta');
                    }

                } catch (error) {
                    console.error('Error:', error);
                }


            });

        });


    } catch (error) {
        console.error('Error:', error);
    }

});

document.getElementById('newOrder').addEventListener('click', async function() {
    // Obtener los valores almacenados desde sessionStorage
    const username = sessionStorage.getItem('username');

    // Url 
    const apiUrl = 'http://localhost:3000/userInfo';

    const formData = new URLSearchParams();
    formData.append('username', username);

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

        if(response.status == 200){
            if(data.length !== 0){

                sessionStorage.setItem('username', username)
                sessionStorage.setItem('nombresCliente', data['NOMBRES']);
                sessionStorage.setItem('IDCliente', data['CLIENTEID']);
                sessionStorage.setItem('apellidosCliente', data['APELLIDOS']);
                sessionStorage.setItem('emailCliente', data['CORREOELECTRONICO']);
                sessionStorage.setItem('telCliente', data['CELULAR']);
                sessionStorage.setItem('DNICliente', data['DNI']);
                sessionStorage.setItem('licenciaCliente', data['LICENCIA']);
                
                window.location.href = `../views/reserva.html`
                
            }
        }
        console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", async function() {
    const bodyAtributosTarjeta = document.getElementById("bodyAtributosTarjeta");
    bodyAtributosTarjeta.innerHTML = '';

    bodyAtributosTarjeta.innerHTML = `
    <div class="row">
                <div class="col">
                  <h3>Tarjeta de Crédito</h3>
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-tipoT"
                          >Tipo Tarjeta</span
                        >
                        <select
                          class="form-select"
                          name=""
                          id="optionTipo"
                          aria-describedby="inputGroup-tipoT"
                        >
                          <option value="">Tipo 1</option>
                          <option value="">Tipo 2</option>
                        </select>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-numT"
                          >Número de Tarjeta</span
                        >
                        <input
                          id="numTarjeta"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-numT"
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-cvv"
                          >CVV</span
                        >
                        <input
                          id="cvv"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-cvv"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-fechaV"
                          >Fecha de Vencimiento</span
                        >
                        <input
                        id="fechaVencimiento"
                          type="date"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-fechaV"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    `

    const apiUrl = `http://localhost:3000/getTipoTarjeta`;

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
        const tipoTarjeta = await response.json();

        const listaTipoTarjeta = document.getElementById("optionTipo");
        listaTipoTarjeta.innerHTML = `<option value="" disabled selected>Selecciona una opción</option>`;

        // Para localidades de Recogida
        tipoTarjeta.forEach(tipo => {
            const optionTipo = document.createElement("option");
            optionTipo.value= `${tipo.TIPO_TARJETAID}`;
            optionTipo.textContent=`${tipo.NOMBRE}`;

            listaTipoTarjeta.appendChild(optionTipo);
            
        });

    } catch (error) {
        console.error('Error:', error);
    }

    // Obtener los valores almacenados desde sessionStorage
    const username = sessionStorage.getItem('username');
    let clienteID;
    
    // Definimos la url
    const apiUrlUser = `http://localhost:3000/userInfo`;

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();
    formData.append('username', username);

    // Definimos las opciones de la peticion
    const requestOptionsUser = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    // Creamos la peticion
    try {
        const response = await fetch(apiUrlUser, requestOptionsUser);
        const data = await response.json();

        data.forEach(element => {
          clienteID = element.CLIENTEID;
        })

    } catch (error) {
        console.error('Error:', error);
    }


    let tipoID;

    optionTipo.addEventListener("change", function (){
      tipoID = optionTipo.value;
    });

    document.getElementById("agregarTarjeta").addEventListener("click", async function(){
      const numTarjeta = document.getElementById("numTarjeta").value;
      const cvv = document.getElementById("cvv").value;
      const fechaVencimiento = document.getElementById("fechaVencimiento").value;

        // Definimos la url
        const apiUrl = `http://localhost:3000/crearTarjeta`;
    
        // Creamos otro objeto para agregar los parametros a la peticion
        const formData = new URLSearchParams();
        formData.append('clienteID', clienteID);
        formData.append('numTarjeta', numTarjeta);
        formData.append('cvv', cvv);
        formData.append('fechaVencimiento', fechaVencimiento);
        formData.append('tipoID', tipoID);
    
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


});