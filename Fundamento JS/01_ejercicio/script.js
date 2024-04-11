// ejercicio creacion de variables
//Una variable global de tipo
var global = "Global";
// variable local
let local ="Local";
//constante
const constante ="con"

console.log("variables:-global" + global + "-local:" + local + "- constante:" + constante);

let nu_desimal ="0.2";


let tex = "hola";

let bolean = true;

let cadena = [ "pepito",30];

let nada;

let nulo = null;

let Objeto = {
    eda:300,
    nombre:"Ppep",
    telefono:4235,
    direccion:"el cosesion"
};

function sumar(num1,num2){
    return num1 + num2;

};


console.log("numero desimal:" + nu_desimal + "\ntexto:" + tex +"\ncadena:"+
cadena +"\nboleana:" + bolean + "\nnada:" + nada + "\nnulo:"
+ nulo + "\nobjeto:" + JSON.stringify(Objeto) + "\nfuncio:" + sumar(10,5));







