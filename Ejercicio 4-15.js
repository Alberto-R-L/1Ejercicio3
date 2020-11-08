
//Ejercicio 4.15

var numeroadivinar = prompt("*Jugador 1* introduce el numero a adivinar por el jugador 2")

document.write('Si, el numero es ' + numeroadivinar + ' Esto es para confirmar');


while(numerointroducido != numeroadivinar){
    var numerointroducido = prompt('Cual es tu intento?');
    if(numerointroducido > numeroadivinar){
        alert('El numero introducido es mayor que el que tienes que adivinar')
    }   
    else if(numerointroducido < numeroadivinar){
        alert('El numero introducido es menor que el que tienes que adivinar')
    }
}