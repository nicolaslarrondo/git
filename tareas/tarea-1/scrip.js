

function multiplicacion(){

let numero = document.getElementById("num").value
let contador = document.getElementById("con").value
let array = []

for(let i = 0; i < contador ; i++) {
    let resultado = numero * i
    array.push(resultado)
}
 document.getElementById("p").innerHTML  = array;
}