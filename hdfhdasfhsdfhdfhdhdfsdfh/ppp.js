
var count = 0;

function contar() {
    var k = document.getElementById("pep").value;
    var numeros = k.split(',');

    for (var i = 0; i < numeros.length; i++) {
        var numero = numeros[i];


        if(numero <= 1){
           alert("numeros menores a 1 no seran amitidos")
           return;
        }
        // Lógica de conteo
        switch (numero) {
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                count++;
                break;
            case "10":
            case "j":
            case "q":
            case 'k':
            case "a":
                count--;
                break;
        }
    }

    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }

    var resultado = count + "-" + holdbet

    document.getElementById("pun").innerHTML = `resultado:${resultado} `
    return count + "-" + holdbet;
}

