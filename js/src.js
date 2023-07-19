var nombre_titulo = document.getElementsByClassName("name")[0];

document.getElementsByClassName("boton-style")[0].addEventListener('click', cambia_estilo_1)
document.getElementsByClassName("boton-style")[1].addEventListener('click', cambia_estilo_2)
document.getElementsByClassName("boton-style")[2].addEventListener('click', cambia_estilo_3)

function cambia_estilo_1() {
    document.getElementById('estilos').href = '/css/style1.css';
    document.title = nombre_titulo;

}

function cambia_estilo_2() {
    document.getElementById('estilos').href = '/css/style2.css';
    document.title = nombre_titulo;
}

function cambia_estilo_3() {
    document.getElementById('estilos').href = '/css/style3.css';
    document.title = nombre_titulo;

}