// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahura' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la ahura basada en el fecha_nac.
console.log("hola")
function declararVariables() {  
    // Tu código aquí
    let ahura = 2345;
    let fecha_nac = 1200;
    ahura = ahura - fecha_nac;
    alert(`el tiene: ${ahura}`)
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
    let var1 = 666;
    let var2 = 616;
    alert(`el valor de var2 es: ${var2}`)
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1', 'num2' y num3, resta 'num1' de 'num2', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() { 
    // Tu código aquí
    let num1 = 30;
    let num2 = 36;
    let num3 = 145;
    let suma = num1 +num2 + num3;
    let resta = num1 - num2;
    let multiplicasion = num2 * num3;
    let divicion = num1 / 120;

    alert(`la suma es: ${suma} \nla resta es:${resta}  \nla multiplicasion es:  ${multiplicasion}  \nla divicion es: ${divicion} `);

    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n casa'.
    // Luego, muestra la longitud del mensaje y el antepelultimo carácter en el mensaje.
    function manipularCadenas() {
    // Tu código aquí
    let direccion = "Av.aLameda"
    let n_casa = 2300;
    let mensaje = "su casa esta en " + direccion + " y el numero de la casa es " + n_casa;
    alert(`la longitud del mensaje es: ${mensaje.length}\nCaracter antepenultimo: ${mensaje[mensaje.length - 3]}`);
    }

    function suma_indirecta(){

    let a = [1,2,3,4,5,6,7];
    p = a[a.length -1];
    c = a[a.length -2]
    resultadodd = p + c;
    alert(`${resultadodd}`);
    }