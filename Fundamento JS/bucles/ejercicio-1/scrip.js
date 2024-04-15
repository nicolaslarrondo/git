

function cinco(){

  let numero = []
  let numero2 = 0;
  let pare = 50
 
  var i = 0

  while(i<=100){
    numero2 += 5
    numero.push(numero2)
    i++;
    
   if(i == pare ){
   numero.push(`<br>`)
   pare = pare + 50
   }
  }
  
  document.getElementById("hola").innerHTML  = numero;
 
}

function uno_a_dies(){

  let numero = []
  let numero2 = 0
  let total= 0
  var i = 0

  while(i<=9){
    
    numero2++
    numero.push(numero2 + `+`)
    i++
    
     total += numero2
    

  }

  document.getElementById("m").innerHTML = numero + `=${total}`
  
}

function pares(){
 
  let pare = [2]
  let pares2 =2
  let i = 0

  while(i<=8){
    pares2 += 2
    pare.push(pares2)
    i++
    
  }
  document.getElementById("p").innerHTML = pare

}


  function compararNumeros() {
    var numeros = [];
    var numeroMayor;
    
    for (var i = 0; i < 5; i++) {
        var numero = prompt("Ingresa el número " + (i+1));
        numeros.push(Number(numero));
    
        if (i === 0 || numero > numeroMayor) {
            numeroMayor = numero;
        }
    }

   alert("el numero mayor es: " + numeroMayor)
  }