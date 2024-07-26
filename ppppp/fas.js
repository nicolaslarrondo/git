function boton(array){

  var  mayor = array[0];
  var  menor = array[0];

 for(let i = 0; i < array.length;i++){
   if(array[i] > mayor){
      mayor = array[i]
   }

   if(array[i] < menor ){
    menor = array[i]
   }
 } 
 let p = [menor,mayor]
 return(p); 
 
}

let result = boton([3,5,7,2,200,33,100,3,400]);
console.log(result);