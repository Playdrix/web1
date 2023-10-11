const header = document.querySelector("header");
const mainContent = document.querySelector("contenedor-pagina");

let lastScrollY = window.scrollY;
let setScroll = 0;

function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    console.log("scrollY: " + scrollY)
    console.log("lastScrollY: " + lastScrollY)
    console.log("setScroll: " + setScroll)
    console.log("header: " + header.style.transform)

    if (scrollY > lastScrollY) {
        // El usuario está bajando el scroll, ocultar el encabezado
        header.style.transform = `translateY(-${window.scrollY}px)`;
    } else {
        // El usuario está subiendo el scroll, mostrar el encabezado
        header.style.transform = `translateY(${setScroll}px)`;
        lastScrollY = setScroll
    }

    lastScrollY = scrollY;
}

window.addEventListener("scroll", handleScroll);

handleScroll();