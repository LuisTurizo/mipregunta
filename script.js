let btnSí = document.getElementById("btnSí");
let btnNo = document.getElementById("btnNo");

let incremento = 10;  // Incremento en el tamaño del botón "Sí"

btnNo.addEventListener("click", function() {
    // Hacer que el botón "Sí" crezca cada vez más
    let currentSize = parseInt(window.getComputedStyle(btnSí).fontSize);
    btnSí.style.fontSize = (currentSize + incremento) + "px";
    btnSí.style.padding = (currentSize + incremento) / 2 + "px";
    btnSí.style.transition = "all 0.3s ease";
    
    // Deshabilitar el botón "No" cuando se cubra
    if (currentSize + incremento >= 350) {  // Cuando el tamaño del botón "Sí" sea suficientemente grande
        btnNo.disabled = true;
    }
});

btnSí.addEventListener("click", function() {
    // Crear el cuadro con el mensaje
    mensaje.textContent = "¡Yo te amo muchísimo más!";
    mensaje.style.display = "block"; // Mostrar el mensaje
});
