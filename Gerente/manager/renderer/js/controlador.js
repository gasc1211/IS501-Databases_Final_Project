

function mostrarVistaEspecifica() {
    document.getElementById('vista-especifica').style.display = "block";
    document.getElementById('Vistas').style.display = "none";
    document.getElementById('vista-especifica-editar').style.display = "none";
}
function mostrarVistas() {
    document.getElementById('Vistas').style.display = "block";
    document.getElementById('vista-especifica').style.display = "none";
    document.getElementById('vista-especifica-editar').style.display = "none";
}

function mostrarVistasEspecificasEdicion(){
    document.getElementById('vista-especifica-editar').style.display = "block";
    document.getElementById('vista-especifica').style.display = "none";
}