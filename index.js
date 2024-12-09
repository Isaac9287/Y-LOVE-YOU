let clickCount = 0;

function mostrarAmor() {
    clickCount++;

    if (clickCount >= 55) {
        document.querySelector(".si").disabled = true;
        mostrarMensaje("TE AMO", "❤️");
    } else {
        moverBoton("si");
    }

    // Crear corazones animados
    for (let i = 0; i < 5; i++) {
        crearCorazon("❤️");  // Corazones rojos al hacer clic en SI
    }
}

function mostrarDesilusion() {
    mostrarMensaje("Pensaba que me amabas", "💔");  // Corazones rotos al hacer clic en NO
}

function moverBoton(botonClass) {
    const boton = document.querySelector(`.${botonClass}`);
    const maxWidth = window.innerWidth - boton.offsetWidth;
    const maxHeight = window.innerHeight - boton.offsetHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    boton.style.position = "absolute";
    boton.style.left = `${randomX}px`;
    boton.style.top = `${randomY}px`;
}

function mostrarMensaje(texto, corazon) {
    document.querySelector("h1").style.display = "none";
    document.querySelector(".opciones").style.display = "none";

    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje");

    const textoElemento = document.createElement("p");
    textoElemento.textContent = texto;

    const corazonElemento = document.createElement("span");
    corazonElemento.textContent = corazon;

    mensaje.appendChild(textoElemento);
    mensaje.appendChild(corazonElemento);

    document.body.appendChild(mensaje);

    // Crear corazones infinitos (rojos o rotos)
    const intervalId = setInterval(() => crearCorazon(corazon), 200); // Crear corazones cada 200 ms

    // No detener los corazones, se mantendrán hasta que el mensaje desaparezca
    document.querySelector(".mensaje").addEventListener('animationend', () => {
        clearInterval(intervalId); // Detener los corazones al final de la animación del mensaje
    });
}

function crearCorazon(corazonTipo) {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.textContent = corazonTipo;

    const tamaño = Math.random() * 2 + 1; // Tamaño aleatorio entre 1 y 3
    corazon.style.fontSize = `${tamaño}rem`;

    const x = Math.random() * 100; // Posición horizontal aleatoria
    corazon.style.left = `${x}vw`;

    corazon.style.animationDuration = "4s";  // Duración constante para el movimiento

    document.body.appendChild(corazon);

    // Eliminar el corazón después de un tiempo largo (por ejemplo, 5 segundos)
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}
