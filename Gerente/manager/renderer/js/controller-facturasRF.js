document.addEventListener("DOMContentLoaded", async function() {
    // Creamos un objetos para localizar los parametros
    let params = new URLSearchParams(location.search);

    // Obtenemos los parametros
    const id = decodeURIComponent(params.get('id'));

    
    // Definimos la url
    const apiUrl = `http://localhost:3000/managerSeeMoore/facturasRFInfo?id=${id}`;
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

        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

            console.log("Esta es la data")
            console.log(data)

            //document.getElementById('codigo').value = `${data.CARACTERISTICAID}`;
        data.forEach(element => {
            document.getElementById('titulo-reporte').innerHTML = 'Reporte Final: '
            document.getElementById('codigo').value = `${element.FACTURAID}`;
            document.getElementById('descripcion').value = `${element.DESCRIPCION}`;
            document.getElementById('subtotal').value = `${element.SUBTOTAL}`;
            document.getElementById('descuento').value = `${element.DESCUENTO}`;
            document.getElementById('impuesto').value = `${element.IMPUESTO_VENTA}`;
            document.getElementById('total').value = `${element.TOTAL}`;

            document.getElementById('codigo2').value = `${element.ORDENID_1}`;
            document.getElementById('estatus').value = `${element.NOMBRE}`;
            document.getElementById('vehiculo').value = `${element.NOMBRE_1} ${element.NOMBREMODELO}`;

            document.getElementById('codigo3').value = `${element.REPORTEFINALID}`;
            document.getElementById('fecha').value = `${element.FECHA_RECEPCION}`;
            document.getElementById('observaciones').value = `${element.OBSERVACIONES}`;
        });

    } catch (error) {
        console.error('Error:', error);
    }
});


