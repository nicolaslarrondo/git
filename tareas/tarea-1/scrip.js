

function multiplicacion(){

let numero = document.getElementById("num").value
let b
let array =[]

 for(let i = 1; i < 11 ; i++) {
    b = `${numero} * ${i} = ${numero * i}<br> `
    array.push(b)
 }

 document.getElementById("p").innerHTML =`${array.join("")} \n`;

}

