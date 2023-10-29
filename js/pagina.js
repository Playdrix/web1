const botonAplicaciones = document.getElementById('button-aplicaciones');
const botonWeb = document.getElementById('button-web');
const botonComentarios = document.getElementById('button-comentarios');

const sectionAplicaciones = document.getElementById('section-aplicaciones');
const sectionWeb = document.getElementById('section-web');
const sectionComentarios = document.getElementById('section-comentarios');

botonWeb.addEventListener('click', () => {
    sectionWeb.classList.add('active');
    sectionAplicaciones.classList.remove('active')
    sectionComentarios.classList.remove('active')

    botonAplicaciones.classList.remove('active')
    botonWeb.classList.add('active')
    botonComentarios.classList.remove('active')
})

botonAplicaciones.addEventListener('click', () => {
    sectionWeb.classList.remove('active');
    sectionAplicaciones.classList.add('active')
    sectionComentarios.classList.remove('active')

    botonAplicaciones.classList.add('active')
    botonWeb.classList.remove('active')
    botonComentarios.classList.remove('active')
})

botonComentarios.addEventListener('click', () => {
    sectionWeb.classList.remove('active');
    sectionAplicaciones.classList.remove('active')
    sectionComentarios.classList.add('active')

    botonAplicaciones.classList.remove('active')
    botonWeb.classList.remove('active')
    botonComentarios.classList.add('active')
})

