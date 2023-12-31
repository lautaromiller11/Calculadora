const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".botones");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            return;
        }
        if (botonPresionado === "%") {
            const valor = parseFloat(pantalla.textContent);
            pantalla.textContent = valor / 100;
            return;
        }

        if (boton.id === "igual") {
            pantalla.textContent = eval(pantalla.textContent);
            return;
        }

        if (pantalla.textContent === "0") {
            pantalla.textContent = botonPresionado;
        } else {
            pantalla.textContent += botonPresionado;
        }
    });
})
