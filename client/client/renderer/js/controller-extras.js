const regresar = document.getElementById("regresar")
regresar.addEventListener("click", function(){
    window.location.href = "./selectAuto.html"
})

let nombresExtras = []

document.addEventListener("DOMContentLoaded", async function() {
    // Definimos la url
    const apiUrl = `http://localhost:3000/getExtras`;

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
        const extras = await response.json();

        const filasExtras = document.getElementById("filasExtras");
        filasExtras.innerHTML = '';

        // Para localidades de Recogida
        extras.forEach(extra => {
            filasExtras.innerHTML += `
            <div class="col d-flex justify-content-center">
                <div class="card m-2 card-styles" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${extra.NOMBRE}</h5>
                      <p class="card-text">${extra.DESCRIPCION}</p>
                      <p><b>Precio: </b> $${extra.COSTO}</p>
                      <button id="extra${extra.EXTRAID}" type="button" class="btn btn-styles">Agregar</button>
                    </div>
                </div>
            </div>
            `  
            
        });

        // Agregar eventos a los botones de reservar
        let contadorExtras = 0;
        extras.forEach(extra => {
            const extraButton = document.getElementById(`extra${extra.EXTRAID}`);
            if (extraButton) {
                extraButton.addEventListener("click", function() {

                    contadorExtras += 1;
                    sessionStorage.setItem(`extraID${contadorExtras}`, extra.EXTRAID);
                    nombresExtras.push(extra.NOMBRE)

                    
                });
            }
        });

        

        document.getElementById("finalizarExtras").addEventListener("click", function(){

            sessionStorage.setItem("contadorExtras", contadorExtras)
            sessionStorage.setItem('nombresExtras', JSON.stringify(nombresExtras))
            window.location.href = `../views/infoOrden.html`;

        })

    } catch (error) {
        console.error('Error:', error);
    }

    console.log(nombresExtras)
});
