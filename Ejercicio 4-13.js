
//Ejercicio 4.13

var ncol = prompt("Cuantos cuadraditos quieres?");
var alto = prompt("Cuan de alto quieres los cuadraditos?");
var ancho = prompt("Cuan de ancho quieres los cuadraditos?");
var a = 0;

document.write('<table border ="0" cellspacing = "2" bgcolor = "white" width = "' + ancho*ncol + '">');
document.write('<tr bgcolor = "black" height = "' + alto + '">');

while(a < ncol){

    document.write('<td width= "' + ancho + '"> &nbsp; </td>');

    a++
}

document.write('</tr> </table>');

