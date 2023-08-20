document.addEventListener("DOMContentLoaded", async function() {
    // Creamos un objetos para localizar los parametros
    let params = new URLSearchParams(location.search);
    console.log("El primer parametro: "+params)

    // Obtenemos los parametros
    const id = decodeURIComponent(params.get('id'));
    console.log("Valor de id: "+id)
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/managerSeeMoore/empleadosInfo?id=${id}`;
    console.log(apiUrl)

    // Creamos otro objeto para agregar los parametros a la peticion
    const formData = new URLSearchParams();
    formData.append('id', id);

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

            console.log("Esta es la data")
            console.log(data)
            console.log(data[0].CARACTERISTICAID)

            //document.getElementById('codigo').value = `${data.CARACTERISTICAID}`;
        data.forEach(element => {
            document.getElementById('codigo').value = `${element.EMPLEADOID}`;
            document.getElementById('identidad').value = `${element.DNI}`;
            document.getElementById('nombre').value = `${element.NOMBRES}`;
            document.getElementById('apellido').value = `${element.APELLIDOS}`;
            document.getElementById('usuario').value = `${element.USUARIO}`;
            document.getElementById('telefono').value = `${element.CELULAR}`;
            document.getElementById('direccion').value = `${element.DIRECCION}`;
            document.getElementById('sueldo').value = `${element.SUELDO}`;

            document.getElementById('codigo2').value = `${element.PUESTOID_1}`;
            document.getElementById('nombre2').value = `${element.NOMBRE}`;
        });

    } catch (error) {
        console.error('Error:', error);
    }
});