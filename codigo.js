let pantalla = document.getElementById("pantalla");

function Agregar(valor) {
    pantalla.value += valor;
}

function Eliminar(){
    pantalla.value = "";
}
function Borrar(){
    pantalla.value = pantalla.value.slice(0, -1);
}
function Calcular(){
    pantalla.value = eval(pantalla.value);
}