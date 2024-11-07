function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();
    const imagenPerfil = document.getElementById('imagenPerfil').files[0];

    // Validación de campos requeridos
    if (!nombre || !correo || !contraseña) {
        alert("Por favor, completa todos los campos requeridos.");
        return false; // Evita el envío del formulario
    }

    // Validación del formato de la imagen
    if (imagenPerfil) {
        const tipoArchivo = imagenPerfil.type;
        if (tipoArchivo !== "image/jpeg" && tipoArchivo !== "image/png") {
            alert("Por favor, sube una imagen en formato JPG o PNG.");
            return false; // Evita el envío del formulario
        }
    }

    // Mostrar datos en consola
    console.log("Datos enviados:");
    console.log("Nombre:", nombre);
    console.log("Correo Electrónico:", correo);
    console.log("Contraseña:", contraseña);
    
    if (imagenPerfil) {
        console.log("Imagen de Perfil:", imagenPerfil.name);
    }

    // Mensaje de éxito
    alert("Los datos fueron enviados correctamente.");

    return true; // Permite el envío del formulario
}

function mostrarImagen(event) {
    const imagen = document.getElementById('ver-imagen');
    
    if (event.target.files.length > 0) {
        imagen.src = URL.createObjectURL(event.target.files[0]);
        imagen.style.display = "block"; // Muestra la imagen
    } else {
        imagen.style.display = "none"; // Oculta la imagen si no hay archivo
    }
}