//Funcion que llamara al siguiente formulario

async function verMasCaracteristicas(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasCaracteristicas`;

    const formData = new URLSearchParams();
    formData.append('id', key1);
    //formData.append('password', password);

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
                
                window.location.href = `./caracteristicas.html?id=${key1}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }

}


async function verMasCategorias(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasCategorias`;

    const formData = new URLSearchParams();
    formData.append('id', key1);

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
                
                window.location.href = `./categorias_vehiculos.html?id=${key1}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasClientes(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasClientes`;

    const formData = new URLSearchParams();
    formData.append('id', key1);

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
                
                window.location.href = `./clientes.html?id=${key1}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasDanios(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasDanios`;

    const formData = new URLSearchParams();
    formData.append('id', key1);

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
                
                window.location.href = `./danio.html?id=${key1}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasEmpleados(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasEmpleados`;

    const formData = new URLSearchParams();
    formData.append('id', key1);

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
                
                window.location.href = `./empleados.html?id=${key1}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function verMasEstatus(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasEmpleados`;

    const formData = new URLSearchParams();
    formData.append('id', key1);

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
                
                window.location.href = `./estatus.html?id=${key1}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasExtras(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasExtras`;

    const formData = new URLSearchParams();
    formData.append('id', key1);

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
                
                window.location.href = `./extras_alquiler.html?id=${key1}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}



async function verMasListaNegra(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasListaNegra`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./lista_negra.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasLocalidades(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasLocalidades`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./localidades.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasMarcas(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasMarcas`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./marcas_vehiculos.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasModelos(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasModelos`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./modelo_vehiculo.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasMultas(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasModelos`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./multas.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasOrdenes(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasOrdenes`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./ordenes.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasPuestosEmpleados(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasPuestosEmpleados`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./puestos.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasReporteInicial(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasReporteInicial`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./reporte_inicial.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasSeguros(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasSeguros`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./seguros.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function verMasTarjetas(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasTarjetas`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./tarjetas.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
async function verMasVehiculos(key1) {
    const apiUrl = `http://localhost:3000/managerSeeMoore/verMasVehiculos`;
        
    const formData = new URLSearchParams();
    formData.append('id', key1);

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

                window.location.href = `./vehiculos.html?id=${key1}`

                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        //console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function verMasFacturas(key1, key2) {
    if (key2 !== 'null') {
        const apiUrl = `http://localhost:3000/managerSeeMoore/verMasFacturasRI`;
        
        const formData = new URLSearchParams();
        formData.append('id', key1);
    
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
    
                    window.location.href = `./facturas.html?id=${key1}`
    
                    console.log('No se encontraron registros.');
                }else{
                    console.log('Registros encontrados:', data);
                }
            }
            //console.log('Respuesta:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        const apiUrl = `http://localhost:3000/managerSeeMoore/verMasFacturasRF`;
        
        const formData = new URLSearchParams();
        formData.append('id', key1);
    
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
    
                    window.location.href = `./facturas.html?id=${key1}`
    
                    console.log('No se encontraron registros.');
                }else{
                    console.log('Registros encontrados:', data);
                }
            }
            //console.log('Respuesta:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}