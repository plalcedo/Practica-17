/* Elementos HTML */
var header = document.getElementById("header");
var nav = document.getElementById("navbar");
var btnSol = document.getElementById("btnSol");
var btnLuna = document.getElementById("btnLuna");
var siteName = document.getElementById("siteName");
var background = document.getElementById("inicio");
var fondo = document.getElementById("fondo");
var title = document.getElementById("title");
var profilePic = document.getElementById("fotoPerfil");
var info = document.getElementById("info");
var listInfo = document.getElementById("listInfo");
var descripcion = document.getElementById("descripcion");


/* Evento del botón */

/* BOTON SOL */
document.querySelector("#btnSol").addEventListener("click", function() {
    btnSol.classList.remove("d-block");
    btnSol.classList.add("d-none");
    btnLuna.classList.remove("d-none");
    btnLuna.classList.add("d-block");

    header.classList.remove("headerDiurno");
    header.classList.add("headerNocturno");

    siteName.classList.remove("textBlack");
    siteName.classList.add("textWhite");

    title.classList.remove("textBlack");
    title.classList.add("textWhite");

    background.classList.remove("bgWhite");
    background.classList.add("bgDark");

    fondo.classList.remove("bgGrayClaro");
    fondo.classList.add("bgGray");
    fondo.classList.remove("bgBorderBlueClaro");
    fondo.classList.add("bgBorderBlueDark");

    profilePic.classList.remove("bgBorderBlueClaro");
    profilePic.classList.add("bgBorderBlueDark");

    info.classList.remove("bgBlueClaro");
    info.classList.add("bgBlueInfo");

    listInfo.classList.remove("textBlack");
    listInfo.classList.add("textWhite");

    descripcion.classList.remove("textBlack");
    descripcion.classList.add("textWhite");
});

document.querySelector("#btnLuna").addEventListener("click", function() {
    btnSol.classList.remove("d-none");
    btnSol.classList.add("d-block");
    btnLuna.classList.remove("d-block");
    btnLuna.classList.add("d-none");

    header.classList.remove("headerNocturno");
    header.classList.add("headerDiurno");

    siteName.classList.remove("textWhite");
    siteName.classList.add("textBlack");

    title.classList.remove("textWhite");
    title.classList.add("textBlack");

    background.classList.remove("bgDark");
    background.classList.add("bgWhite");

    fondo.classList.remove("bgGray");
    fondo.classList.add("bgGrayClaro");
    fondo.classList.remove("bgBorderBlueDark");
    fondo.classList.add("bgBorderBlueClaro");

    profilePic.classList.remove("bgBorderBlueDark");
    profilePic.classList.add("bgBorderBlueClaro");

    info.classList.remove("bgBlueInfo");
    info.classList.add("bgBlueClaro");

    listInfo.classList.remove("textWhite");
    listInfo.classList.add("textBlack");

    descripcion.classList.remove("textWhite");
    descripcion.classList.add("textBlack");
});