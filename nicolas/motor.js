





  

document.getElementById('boton').addEventListener('click', function() {
  var inpute = document.getElementById("p").value
  const resultado = document.getElementById('lista');
  
  const p_1 = document.createElement('li');
  p_1.textContent = inpute// Si `this` se refiere al botón, esto no tiene mucho sentido, normalmente sería `input.value`

  resultado.appendChild(p_1);

  console.log(this);
});









/*function motor_1(){

var l = document.getElementById("p").value
const p_1 = document.getElementById("lista")

const p_2 = document.createElement('li')

p_2.textContent = l

p_1.appendChild(p_2)



}*/