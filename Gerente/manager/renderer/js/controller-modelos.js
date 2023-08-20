// Muestra la informacion del Empleado
document.addEventListener("DOMContentLoaded", async function() {
    // Creamos un objetos para localizar los parametros
    let params = new URLSearchParams(location.search);
    console.log("El primer parametro: "+params)

    // Obtenemos los parametros
    const id = decodeURIComponent(params.get('id'));
    console.log("Valor de id: "+id)
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/managerSeeMoore/modelosInfo?id=${id}`;
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

            //document.getElementById('codigo').value = `${data.CARACTERISTICAID}`;
        data.forEach(element => {
            document.getElementById('codigo').value = `${element.MODELOID}`;
            document.getElementById('img').innerHTML = `
                Imagen:
                <br>
                <img src="${element.IMAGEN}" alt="" style=" width: 200px; height: 150px; border-radius: 10px 0 0 10px;">
            `
            document.getElementById('nombre').value = `${element.NOMBREMODELO}`;
            document.getElementById('descripcion').value = `${element.DESCRIPCION}`;

            document.getElementById('codigo2').value = `${element.MARCAID_1}`;
            document.getElementById('nombre2').value = `${element.NOMBRE}`;
        });

    } catch (error) {
        console.error('Error:', error);
    }
});