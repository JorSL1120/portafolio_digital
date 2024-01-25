//funcion que pone estilo a lo seleccionado y quita la anterior
function seleccionar(link) {
    
}

//funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}