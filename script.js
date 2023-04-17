"use strict";
let button = document.querySelector('#button');
let input = document.querySelector('.input');
let resul = document.querySelector(".binres");
let opt = document.querySelector('select');
button.addEventListener('click', () => {
    input.innerHTML = '';
    converter();
});
function converter() {
    let dec = +input.value;
    if ((opt === null || opt === void 0 ? void 0 : opt.value) === 'dtob') {
        if (isNaN(dec)) {
            alert("Type a number");
        }
        else {
            resul.innerHTML = '';
            let bin = dec.toString(2);
            let trans = bin.toString();
            resul.innerHTML += ` ${trans}`;
        }
    }
    else if ((opt === null || opt === void 0 ? void 0 : opt.value) === 'dtoo') {
        if (isNaN(dec)) {
            alert("Type a number");
        }
        else {
            resul.innerHTML = '';
            let bin = dec.toString(8);
            let trans = bin.toString();
            resul.innerHTML += ` ${trans}`;
        }
    }
    else if ((opt === null || opt === void 0 ? void 0 : opt.value) === 'dtoh') {
        if (isNaN(dec)) {
            alert("Type a number");
        }
        else {
            resul.innerHTML = '';
            let bin = dec.toString(16);
            let trans = bin.toString();
            resul.innerHTML += ` ${trans}`;
        }
    }
}
