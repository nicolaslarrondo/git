

function mostrardatos(){
 
 let id1 = document.getElementById("d1").value;
 let id2 = document.getElementById("d2").value;
 let desi= prompt("si o no")
 
 let t;
 
 if( desi == "si"){
  let re = prompt("nombre")
 let re2 =prompt("contraseña")
   if (id1 == re && id2 == re2) {
    t = `todo correto puede pasar señor`
   }
   else if( id1 != re && id2 != re2){
    t = `el nombre es incorreto`
   }

   else if( id1 != re){
    t = `el nombre es incorreto`
   }
   else if( id2 != re2){
    t = `la contraseña es incorreta`
   }
   else
   {
    t = `tanto el nombre y la contraseña es tan mal`
   }
 }
 else if( desi == "no"){
  t = `bueno como quieras`
 }
 else{
  t = `solamente puede poner "si" o "no"`
 }

 document.getElementById("uno").innerHTML = t


}

