


function punta(){
    let puntaje = document.getElementById("p").value

    let resulf= "";

    if(90 <= puntaje){
     resulf = `esxelente su puntaje es ${puntaje}`
    }
    else if(70 <= puntaje && 89>= puntaje){
     resulf = `bien echo su puntaje es ${puntaje}`
    }
    else if(70 > puntaje){
        resulf = `intentelo denuevo ${puntaje}`
    }
  
    document.getElementById("mostrar").innerHTML = resulf
}