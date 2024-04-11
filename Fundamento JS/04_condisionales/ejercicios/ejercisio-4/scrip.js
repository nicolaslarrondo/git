



function alma_numero(){
let num = document.getElementById("d1").value
let mensaje=""

let resul=""

mensaje = `su numero es: ${num}`

if ( num < 0 ) {
    resul=`el numero ${num} es negativo`
}
else if( num > 0){
  resul = `el numero ${num} es positivo`
}
else if( num == 0){
 resul=`el numero ${num} es cero`
}

document.getElementById("uno").innerHTML = mensaje
document.getElementById("dos").innerHTML = resul
}