



function temperatura(){

    let tem = parseInt(prompt("ingrese la temperatura actual"))
    
    let resultado = "";
    if (tem <= 0) {
        resultado = `estamos helados <h2>${tem}</h2>`
    }
    else if(tem == 0 || tem <= 25){
      resultado = `esta fresco <h2>${tem}</h2>`
    }
    else if(tem >= 25){
        resultado = `tenemos calor <h2>${tem}</h2>`
    }

    document.getElementById(`uno`).innerHTML = resultado;
}