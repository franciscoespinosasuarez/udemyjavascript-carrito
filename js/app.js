//VARIABLES

const carrito = document.querySelector('#carrito')

const contenedorCarrito = document.querySelector('#lista-carrito t-body')

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')

const listaCursos = document.querySelector('#lista-cursos')

cargarEventListeners();
function cargarEventListeners() {
    //cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)

};

function agregarCurso(e) {
    if (e.target.classList.contains ('agregar-carrito')) {
        console.log('es el botón correcto')
    }
}