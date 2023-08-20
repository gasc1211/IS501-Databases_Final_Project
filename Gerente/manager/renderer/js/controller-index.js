// Muestra la informacion del Empleado
document.addEventListener("DOMContentLoaded", async function() {
    // Creamos un objetos para localizar los parametros
    let params = new URLSearchParams(location.search);
    console.log(params)

    // Obtenemos los parametros
    const username = decodeURIComponent(params.get('username'));
    console.log(username)
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/manager/userInfo?username=${username}`;
    console.log(apiUrl)

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
        console.log("Aqui hay error")
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

            let datos = '';
            console.log("Esta es la data")
            console.log(data)

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
            parrafoEmail.textContent = `Nombre de usuario: ${datos['USUARIO']}`;
            parrafoTel.textContent = `Teléfono: ${datos['CELULAR']}`;
            parrafoDNI.textContent = `DNI: ${datos['DNI']}`;

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
