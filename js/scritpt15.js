document.getElementById('nav-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('nav-open');
});

function mostrarMensaje(seccion) {
    alert("Has accedido a " + seccion);
}

// Llamar a la función cuando se cargue la página
window.onload = function() {
    mostrarMensaje("la página principal");
};