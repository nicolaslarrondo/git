

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
  let arryanum = []
  let nummayor = 0;
  
    for (let i = 0; i < 5; i++) {
     let num = parseInt(prompt("ingrese su numero"))
     arryanum.push(num)
     if(nummayor < num){ nummayor = num}else{nummayor = nummayor}
    
    }
    document.getElementById("lista").innerHTML = `de los numeros: ${arryanum.sort()} `
}

function for_pares(){
 

  let p = parseInt(prompt("cuantos numeros quiere ingresar"))
 for (let i = 0; i < p; i++) {
   let paress = parseInt(prompt("ingrese sus numeros"))
 }

 for (let z = 0; z < p ; z++) {
  let numeros
  numeros =  paress % 2
   if(Number.isInteger(numeros))
   {

   }
  
 }
   
    
      
 
}