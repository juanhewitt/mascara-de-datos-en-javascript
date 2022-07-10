const Nombre = prompt("ingresar nombre");

const Titulo = document.querySelector(".holder");

Titulo.innerHTML = Nombre.toLocaleUpperCase();

const inputTarjeta = document.querySelector("#inputTarjeta");
const inputFecha = document.querySelector("#inputFecha");
const inputCVV = document.querySelector("#inputCVV");

const maskNumero = "####-####-####-####";
const maskFecha = "##/##";
const maskCVV = "###";
let current = "";
let tarjetaNumero = [];
let fechaNumero = [];
let cvvNumero = [];

inputTarjeta.addEventListener('keydown', (e) => {

    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();

    inputTarjeta.value = tarjetaNumero.join("");
    manoInput(maskNumero, e.key, tarjetaNumero);
});

inputFecha.addEventListener('keydown', (e) => {

    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();

    inputFecha.value = fechaNumero.join("");
    manoInput(maskFecha, e.key, fechaNumero);
});

inputCVV.addEventListener('keydown', (e) => {

    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();

    inputCVV.value = cvvNumero.join("");
    manoInput(maskCVV, e.key, cvvNumero);
});

function manoInput(mask, key, arr) {

    let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (key === "Backspace" && arr.length > 0) {
        arr.pop();
        return;
    }
    if (numeros.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key);
        } else {
            arr.push(key);
            }
        }
    }

