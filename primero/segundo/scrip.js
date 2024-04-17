
function sumar(){
    let array = []
    let con = parseInt(prompt("cuantos numeros quieres"))
 
  
    for (let x = 0; x < con; x++) {
      let numero = parseInt(prompt("cuales son tus numeros"))
      array.push(numero)
      
    }
    let original = [array]
    let sumar = array[0] + array[1]
    document.getElementById("p").innerHTML = ` original${original} \n la suma ${sumar}`

    alert(sumar)
};