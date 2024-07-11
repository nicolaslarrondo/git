



puntos = 0;
document.getElementById('miBoton').addEventListener('click', () => {
// En este caso, `this` no se refiere al botón, sino al contexto léxico superior.

this.puntos += 1;


    document.getElementById('miBoton').innerHTML = `el puntaje es${puntos}`;


});
