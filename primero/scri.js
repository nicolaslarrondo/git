
function no_negativo(){
  let array = []
  
  let con = parseInt(prompt("cuantos numeros quieres"))
 
  
  for (let x = 0; x < con; x++) {
    let numero = parseInt(prompt("cuales son tus numeros"))
    array.push(numero)
    
  }
let original = [array]
   for (let i = 0; i < con; i++) {
         let numero = parseInt(prompt("cuales son tus numeros"))
         array.push(numero)

         if(array[i] < 0){
           array[i] = 0
         }
   }
   document.getElementById("p").innerHTML = `el array original ${original}\n el resultado ${array}`
  
  
 
};





