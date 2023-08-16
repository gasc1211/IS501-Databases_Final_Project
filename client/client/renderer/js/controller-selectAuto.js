const regresar = document.getElementById("regresar")
regresar.addEventListener("click", function(){
    window.location.href = "./reserva.html"
})

document.addEventListener("DOMContentLoaded", async function() {
    
    // Definimos la url
    const apiUrl = `http://localhost:3000/getAutos`;

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
        const autos = await response.json();

        const filasAutos = document.getElementById("filasAutos");
        filasAutos.innerHTML = '';

        // Para localidades de Recogida
        autos.forEach(auto => {
            filasAutos.innerHTML += `
            <div class="row mt-5 mb-5 cliente-info-stles">
                <div class="col-6 d-flex justify-content-center p-2">
                    <img class="img-styles" src="${auto.IMAGEN}" alt="">
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="col-12"><h2>Información</h2></div>
                        <div class="col-12"><p><b>Marca:</b> ${auto.MARCA}</p></div>
                        <div class="col-12"><p><b>Modelo:</b> ${auto.MODELO}</p></div>
                        <div class="col-12"><p><b>Categoría:</b> ${auto.CATEGORIA}</p></div>
                        <div class="col-12"><p><b>Precio:</b> $${auto.PRECIO} por día</p></div>
                        <div class="col-12"><p><b>Combustible:</b> ${auto.COMBUSTIBLE}</p></div>
                    </div>
                </div>
                <div class="col-3 text-center d-flex align-items-center">
                    <button id="auto${auto.VEHICULOID}" type="button" class="btn btn-styles m-auto">Reservar</button>
                </div>
            </div>
            `  
            
        });

        // Agregar eventos a los botones de reservar
        autos.forEach(auto => {
            const autoButton = document.getElementById(`auto${auto.VEHICULOID}`);
            if (autoButton) {
                autoButton.addEventListener("click", function() {
                    sessionStorage.setItem('autoID', auto.VEHICULOID);

                    window.location.href = `../views/extras.html`;
                });
            }
        });

    } catch (error) {
        console.error('Error:', error);
    }

});